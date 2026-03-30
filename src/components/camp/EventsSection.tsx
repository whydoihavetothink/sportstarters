import * as React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { CAMP_TERMS } from '@/lib/campData';
// Adjust the import path to match where your store is located in your project
import { useRegistrationStore } from '@/store/useRegistrationStore'; 

const EventsSection = () => {
  // Extract the updateForm function from the Zustand store
  const updateForm = useRegistrationStore((state) => state.updateForm);

  const images = [
    "/hornikova/zs_hornikova_sportovni_areal-5.jpg",
    "/hornikova/zs_hornikova_sportovni_areal-4.jpg",
    "/hornikova/zs_hornikova_sportovni_areal-2.jpg",
    "/hornikova/zs_hornikova.jpg",
    "/hornikova/zs_hornikova_sportovni_areal-1.jpg",
  ];

  return (
    <section className="bg-background py-16 px-5 md:px-8 md:py-24 lg:py-28" id="terminy">
      <div className="container mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* --- LEVÁ ČÁST: Termíny a lokalita --- */}
            <div className="flex flex-col justify-center space-y-8 animate-fade-up">
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Termíny a lokalita
                </h2>

            <div className="bg-surface border border-border rounded-2xl p-6 md:p-8 shadow-sm">
              
              {/* Seznam termínů */}
              <div className="space-y-0">
                {CAMP_TERMS.map((date, index) => (
                  <div 
                    key={index} 
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 py-5 border-b border-border first:pt-0"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Calendar className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="block font-body text-lg font-lg mt-0.5 font-semibold">
                          {date}
                        </span>
                      </div>
                    </div>
                    {/* Tlačítko pro CTA - oranžové */}
                    <a 
                      href="#registrace"
                      onClick={() => updateForm('term', date)}
                      className="bg-accent text-white font-body font-medium h-11 px-6 rounded-lg shadow-md hover:-translate-y-0.5 transition-transform flex-shrink-0 w-full sm:w-auto flex items-center justify-center no-underline"
                    >
                      Přihlásit se
                    </a>
                  </div>
                ))}
              </div>

              {/* Lokalita (malým písmem pod termíny) */}
              <div className="pt-6 mt-2">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 flex justify-center mt-1">
                    <MapPin className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground text-xl">
                      Lokalita: ZŠ Horníkova
                    </h3>
                    <p className="font-body text-sm text-muted-foreground mt-1.5">
                      Horníkova 2170/1, 628 00 Brno-Líšeň
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* --- PRAVÁ ČÁST: Embla Carousel --- */}
          <div className="w-full">
            <Carousel 
              opts={{ loop: true }}
              className="w-full group"
            >
              <CarouselContent>
                {images.map((img, index) => (
                  <CarouselItem key={index}>
                    <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-surface border border-border shadow-sm">
                      <img 
                        src={img} 
                        alt={`Ilustrace z kempu ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              
              <CarouselPrevious className="absolute left-4 bg-background/80 backdrop-blur-sm text-primary border-border" />
              <CarouselNext className="absolute right-4 bg-background/80 backdrop-blur-sm text-primary border-border" />
            </Carousel>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EventsSection;