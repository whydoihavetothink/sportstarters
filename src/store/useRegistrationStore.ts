import { create } from 'zustand';

// 1. Define the shape of our data
export interface FormData {
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
}

// 2. Define the shape of our store (State + Actions)
interface RegistrationStore {
  step: number;
  formData: FormData;
  setStep: (step: number) => void;
  updateForm: (field: keyof FormData, value: string | boolean) => void;
  resetForm: () => void;
}

const initialFormData: FormData = {
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
};

// 3. Create the store
export const useRegistrationStore = create<RegistrationStore>((set) => ({
  step: 1,
  formData: initialFormData,
  
  // Action to change the wizard step
  setStep: (step) => set({ step }),

  // Action to update a specific field in the form data
  updateForm: (field, value) => 
    set((state) => ({
      formData: {
        ...state.formData,
        [field]: value,
      },
    })),

  // Action to clear everything after a successful submission
  resetForm: () => set({ step: 1, formData: initialFormData }),
}));