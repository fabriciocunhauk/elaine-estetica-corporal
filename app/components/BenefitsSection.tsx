import React from "react";
import Container from "./Container";

function BenefitsSection() {
  return (
    <Container
      id="benefits"
      element="section"
      classes={{
        container: "py-12 bg-purple-primary rounded-xl p-8 my-40",
      }}
    >
      <h2 className="text-3xl font-bold text-center text-purple-secondary mb-12">
        Benefícios das Minhas Terapias
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="bg-purple-secondary w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-purple-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-purple-secondary mb-2">
            Redução de Inchaço
          </h3>
          <p className="text-purple-secondary">
            Eliminação de toxinas e líquidos retidos através da drenagem
            linfática
          </p>
        </div>
        <div className="text-center">
          <div className="bg-purple-secondary w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-purple-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-purple-secondary mb-2">
            Relaxamento Profundo
          </h3>
          <p className="text-purple-secondary">
            Alívio do estresse e tensões musculares com técnicas especializadas
          </p>
        </div>
        <div className="text-center">
          <div className="bg-purple-secondary w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-purple-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-purple-secondary mb-2">
            Rejuvenescimento
          </h3>
          <p className="text-purple-secondary">
            Melhora da aparência da pele e contorno facial com drenagem
            específica
          </p>
        </div>
      </div>
    </Container>
  );
}

export default BenefitsSection;
