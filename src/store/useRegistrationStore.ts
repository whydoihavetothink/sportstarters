import { create } from 'zustand';
import { persist } from 'zustand/middleware'; // <-- 1. Import persist

// 1. Define the shape of our data (Unchanged)
export interface FormData {
  variableSymbol: string;
  term: string;
  childFirstName: string;
  childLastName: string;
  childDob: string;
  tshirtSize: string;
  healthNotes: string;
  parentFirstName: string;
  parentLastName: string;
  phone: string;
  email: string;
  street: string;
  city: string;
  zipCode: string;
  consent: boolean;
  brnoSubsidy: boolean;
}

// 2. Define the shape of our store (Unchanged)
interface RegistrationStore {
  step: number;
  formData: FormData;
  setStep: (step: number) => void;
  updateForm: (field: keyof FormData, value: string | boolean) => void;
  resetForm: () => void;
}

const initialFormData: FormData = {
  variableSymbol: "",
  term: "",
  childFirstName: "",
  childLastName: "",
  childDob: "",
  tshirtSize: "",
  healthNotes: "",
  parentFirstName: "",
  parentLastName: "",
  phone: "",
  email: "",
  street: "",
  city: "",
  zipCode: "",
  consent: false,
  brnoSubsidy: false,
};

// 3. Create the store wrapped in persist
export const useRegistrationStore = create<RegistrationStore>()(
  persist(
    (set) => ({
      step: 1,
      formData: initialFormData,
      
      setStep: (step) => set({ step }),

      updateForm: (field, value) => 
        set((state) => ({
          formData: {
            ...state.formData,
            [field]: value,
          },
        })),

      resetForm: () => set({ step: 1, formData: initialFormData }),
    }),
    {
      name: 'camp-registration-storage', // <-- 2. The key name in localStorage
    }
  )
);