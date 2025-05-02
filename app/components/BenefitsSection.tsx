import React from "react";
import Container from "./Container";
import Card from "./Card";
import { IoBody } from "react-icons/io5";
import { GiFemaleLegs, GiLeg } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";

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
        {/* Benefício 1 */}
        <Card
          classes={{
            card: "text-center bg-purple-secondary text-purple-primary",
          }}
        >
          <div className="bg-purple-primary w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
            <GiLeg className="text-purple-secondary" size="30" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Redução de Inchaço</h3>
          <p>
            Técnicas de drenagem linfática corporal e facial promovem a
            eliminação de líquidos retidos e toxinas.
          </p>
        </Card>

        {/* Benefício 2 */}
        <Card
          classes={{
            card: "text-center bg-purple-secondary text-purple-primary",
          }}
        >
          <div className="bg-purple-primary w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
            <FaRegHeart className="text-purple-secondary" size="30" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Melhora da Circulação</h3>
          <p>
            Estímulo à circulação sanguínea e linfática, ajudando na oxigenação
            dos tecidos.
          </p>
        </Card>

        {/* Benefício 3 */}
        <Card
          classes={{
            card: "text-center bg-purple-secondary text-purple-primary",
          }}
        >
          <div className="bg-purple-primary w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-purple-secondary"
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
          <h3 className="text-xl font-semibold mb-2">
            Relaxamento e Bem-Estar
          </h3>
          <p>
            Massagens relaxantes e técnicas suaves promovem alívio do estresse e
            sensação de bem-estar geral.
          </p>
        </Card>

        {/* Benefício 4 */}
        <Card
          classes={{
            card: "text-center bg-purple-secondary text-purple-primary",
          }}
        >
          <div className="bg-purple-primary w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
            <IoBody className="text-purple-secondary" size="30" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Modelagem Corporal</h3>
          <p>
            A massagem modeladora auxilia na definição do contorno corporal e
            redução da celulite.
          </p>
        </Card>

        {/* Benefício 5 */}
        <Card
          classes={{
            card: "text-center bg-purple-secondary text-purple-primary",
          }}
        >
          <div className="bg-purple-primary w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
            <GiFemaleLegs className="text-purple-secondary" size="30" />
          </div>
          <h3 className="text-xl font-semibold mb-2">
            Pele Mais Lisa e Uniforme
          </h3>
          <p>
            Depilações cuidadosas garantem pele lisa, sem irritações, com
            resultados duradouros.
          </p>
        </Card>

        {/* Benefício 6 */}
        <Card
          classes={{
            card: "text-center bg-purple-secondary text-purple-primary",
          }}
        >
          <div className="bg-purple-primary w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-8 h-8 text-purple-secondary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-2">
            Resultados Rápidos e Visíveis
          </h3>
          <p>
            Cada sessão traz melhorias imediatas, seja na aparência da pele, no
            conforto ou na postura.
          </p>
        </Card>
      </div>
    </Container>
  );
}

export default BenefitsSection;
