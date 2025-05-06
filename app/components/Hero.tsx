import React from "react";
import Container from "./Container";
import Image from "next/image";
import background from "@/public/images/relax-background.jpg";

function Hero() {
  return (
    <div className="relative h-[800px]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-purple-primary/20"></div>
        <Image
          src={background}
          alt="Massage therapy session"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <Container
          element="section"
          classes={{
            container: "text-center py-12",
          }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Terapias Especializadas em Domicílio
          </h1>
          <p className="text-xl text-white/90 mb-8 drop-shadow-md">
            Drenagem Linfática | Drenagem Facial | Massagem Modeladora |
            Depilação
          </p>
          <div className="max-w-2xl mx-auto bg-purple-secondary rounded-xl p-6 mb-8 backdrop-blur-sm">
            <p className="text-lg font-medium text-purple-primary">
              Aplico o método Renata França com protocolos personalizados para
              cada cliente, garantindo resultados eficazes no conforto do seu
              lar.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-purple-primary hover:bg-purple-secondary text-purple-secondary hover:text-purple-primary font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg hover:shadow-xl"
            >
              Agende Sua Sessão
            </a>
            <a
              href="#services"
              className="bg-purple-secondary hover:bg-purple-primary  text-purple-primary hover:text-purple-secondary font-bold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg hover:shadow-xl"
            >
              Nossos Serviços
            </a>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Hero;
