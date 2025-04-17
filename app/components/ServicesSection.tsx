import React from "react";
import Container from "./Container";
import Card from "./Card";

function ServicesSection() {
  const services = [
    {
      title: "Drenagem Linfática Método Renata França",
      description:
        "Técnica especializada que estimula o sistema linfático, reduzindo inchaços e melhorando a circulação.",
      duration: "60/90 min",
      price: "R$200/R$280",
    },
    {
      title: "Massagem Relaxante",
      description:
        "Alívio de tensões musculares e promoção de bem-estar geral com óleos essenciais.",
      duration: "60/90 min",
      price: "R$180/R$250",
    },
    {
      title: "Drenagem Facial",
      description:
        "Redução de inchaços faciais, melhora da oxigenação e rejuvenescimento da pele.",
      duration: "45 min",
      price: "R$150",
    },
    {
      title: "Combo Completo",
      description:
        "Sessão combinada de drenagem linfática corporal + facial para resultados integrados.",
      duration: "120 min",
      price: "R$350",
    },
  ];

  return (
    <Container
      element="section"
      classes={{
        container: "py-12 my-40",
      }}
    >
      <h2 className="text-3xl font-bold text-center text-purple-primary mb-12">
        Serviços Especializados
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Card key={index}>
            <div className="p-6">
              <h3 className="text-xl font-bold text-purple-primary mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-purple-primary/70 font-medium">
                  {service.duration}
                </span>
                <span className="text-lg font-bold text-purple-primary">
                  {service.price}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default ServicesSection;
