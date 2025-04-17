import React from "react";
import Container from "./Container";

function Hero() {
  return (
    <div>
      <Container
        element="section"
        classes={{
          container: "text-center py-12",
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-purple-primary mb-4">
          Terapias Especializadas em Domicílio
        </h1>
        <p className="text-xl text-purple-primary mb-8">
          Drenagem Linfática | Massagem Relaxante | Drenagem Facial
        </p>
        <div className="max-w-2xl mx-auto bg-purple-secondary rounded-xl p-6 mb-8">
          <p className="text-lg font-medium text-purple-primary">
            Aplico o método Renata França com protocolos personalizados para
            cada cliente, garantindo resultados eficazes no conforto do seu lar.
          </p>
        </div>
        <a
          href="#contact"
          className="bg-purple-primary hover:bg-violet-400 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300"
        >
          Agende Sua Sessão
        </a>
      </Container>
    </div>
  );
}

export default Hero;
