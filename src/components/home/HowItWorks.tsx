import React from "react";
import { MapPin, MessageCircle, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const HowItWorks = () => {
  const features = [
    {
      icon: <MapPin className="h-8 w-8 text-estate-primary" />,
      title: "Busca Geolocalizada",
      description: "Encontre imóveis próximos aos locais que são importantes para você, como trabalho, escola ou família."
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-estate-primary" />,
      title: "Assistente Virtual",
      description: "Nosso chatbot com IA está disponível 24/7 para responder suas dúvidas e ajudar na sua busca."
    },
    {
      icon: <Calendar className="h-8 w-8 text-estate-primary" />,
      title: "Agendamento Fácil",
      description: "Agende visitas aos imóveis diretamente pelo aplicativo, escolhendo o dia e horário que for melhor para você."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Como Funciona</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Facilitamos sua busca pelo imóvel ideal com tecnologia de ponta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-estate-primary/10 rounded-full">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 