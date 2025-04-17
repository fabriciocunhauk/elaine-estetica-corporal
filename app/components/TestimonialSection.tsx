import React from "react";
import Card from "./Card";
import Container from "./Container";

const TestimonialSection = () => {
  const testimonials = [
    {
      quote:
        "A drenagem com o método Renata França mudou minha relação com o meu corpo. Resultados visíveis desde a primeira sessão!",
      author: "Camila R.",
    },
    {
      quote:
        "Sou atleta e a massagem relaxante aliada à drenagem acelerou minha recuperação pós-treino.",
      author: "Carlos M.",
    },
    {
      quote:
        "Minha pele nunca esteve tão bonita depois de começar com as drenagens faciais. Recomendo demais!",
      author: "Fernanda S.",
    },
  ];

  return (
    <Container
      element="section"
      classes={{ container: "py-12" }}
      id="testimonials"
    >
      <h2 className="text-3xl font-bold text-center text-purple-primary my-40">
        Depoimentos de Clientes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <div className="mb-4 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <p className="text-gray-700 italic mb-4">{testimonial.quote}</p>
            <p className="font-semibold text-amber-800">
              — {testimonial.author}
            </p>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default TestimonialSection;
