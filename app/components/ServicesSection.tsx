import React from "react";
import Container from "./Container";
import Card from "./Card";

function ServicesSection() {
  const services = [
    {
      title: "Drenagem Linfática",
      description:
        "Técnica que estimula o sistema linfático, reduzindo inchaços e melhorando a circulação.",
      price: "£50,00",
    },
    {
      title: "Drenagem Facial",
      description:
        "Redução de inchaços faciais, melhora da oxigenação e rejuvenescimento da pele.",
      duration: "45 min",
      price: "£30,00",
    },
    {
      title: "Massagem Modeladora",
      description:
        "Promove a modelagem corporal, aliviando tensões musculares e melhorando a postura.",
      price: "£50,00",
    },
    {
      title: "Depilação Biquíni",
      description:
        "Depilação cuidadosa na região do biquíni, garantindo resultados suaves e duradouros.",
      price: "£35,00",
    },
    {
      title: "Depilação Axilas",
      description:
        "Depilação eficaz nas axilas, proporcionando conforto e suavidade.",
      price: "£15,00",
    },
    {
      title: "Depilação Total das Pernas",
      description:
        "Depilação completa nas pernas, incluindo joelhos e tornozelos.",
      price: "£35,00",
    },
    {
      title: "Depilação Meia Perna",
      description: "Depilação nas metades superiores ou inferiores das pernas.",
      price: "£20,00",
    },
    {
      title: "Depilação Fluff",
      description:
        "Depilação leve e delicada para áreas pequenas, como sobrancelhas ou maxilar.",
      price: "£10,00",
    },
  ];

  return (
    <Container
      id="services"
      element="section"
      classes={{
        container: "py-12 my-40 text-purple-primary",
      }}
    >
      <h2 className="text-3xl font-bold text-center mb-12  font-serif ">
        Meus Serviços
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Card
            key={index}
            classes={{
              card: "flex flex-col justify-between p-6 bg-purple-secondary",
            }}
          >
            <div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-purple-primary/70 mb-4">
                {service.description}
              </p>
            </div>
            <div className="flex justify-between items-center">
              {/* <span className="text-purple-primary/70 font-medium">
                {service.duration}
              </span> */}
              <span className="text-purple-primary/70 font-medium">
                {service.price}
              </span>
            </div>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default ServicesSection;
