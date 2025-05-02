"use client";
import React, { useState } from "react";
import Container from "./Container";
import { IoIosArrowDown } from "react-icons/io";
import clsx from "clsx";

interface ImageAttributes {
  data: {
    attributes: {
      alternativeText: string;
      width: number;
      height: number;
      url?: string;
      src?: string;
    };
  };
}

interface AccordionProps {
  sections?: {
    id: number;
    title?: string;
    description?: string;
    icon?: ImageAttributes; // Optional icon
  }[];
  classes?: { container?: string; wrapper?: string };
}

const faqSections = [
  {
    id: 1,
    title: "Quantas sessões são recomendadas?",
    description:
      "Para melhores resultados, recomendo um pacote inicial de 5 sessões de drenagem linfática, com intervalo de 48-72h entre elas. Para manutenção, 1 sessão semanal ou quinzenal. Já para massagens relaxantes e depilações, o número de sessões varia conforme a necessidade individual.",
  },
  {
    id: 2,
    title: "Há contraindicações?",
    description:
      "A drenagem não é indicada em casos de infecções agudas, trombose ou problemas cardíacos graves. A massagem modeladora também possui restrições específicas. Sempre realizo uma anamnese completa antes da primeira sessão para garantir sua segurança.",
  },
  {
    id: 3,
    title: "Preciso me preparar em casa antes da sessão?",
    description:
      "Trago toda a estrutura necessária (como macarrão, óleos e toalhas). Você só precisa providenciar um ambiente tranquilo, limpo e com acesso a uma tomada próxima à área onde será feito o atendimento.",
  },
  {
    id: 4,
    title: "O serviço é realizado em domicílio? Como funciona?",
    description:
      "Sim! Ofereço atendimento em domicílio para maior conforto e praticidade. Após agendar, combino todos os detalhes como local exato, horário e tipo de vestimenta ideal para cada tratamento.",
  },
  {
    id: 5,
    title: "Os resultados são imediatos?",
    description:
      "Sim! Cada sessão traz melhorias perceptíveis — seja na redução do inchaço, no relaxamento muscular ou na suavidade da pele após depilação. Resultados contínuos dependem do protocolo e da frequência das sessões.",
  },
  {
    id: 6,
    title: "Qual o valor dos serviços?",
    description:
      "Os valores variam por serviço e duração. Por exemplo: drenagem facial custa R$150,00 e depilação biquíni R$35,00. Confira todos os preços na aba de “Serviços” ou entre em contato direto para tirar dúvidas.",
  },
];

function Accordion({ classes }: AccordionProps) {
  const [selected, setSelected] = useState<number | null>(null);

  const toggleAccordion = (index: number | null) => {
    if (selected === index) {
      return setSelected(null);
    }

    setSelected(index);
  };

  return (
    <div
      className={clsx(
        "py-20 pb-40 bg-white text-purple-primary",
        classes?.wrapper
      )}
    >
      <Container size="md">
        <div className="py-10">
          <h2 className="text-4xl font-bold text-center  font-serif ">
            Perguntas Frequentes
          </h2>
          <p className="mt-2 text-lg text-purple-primary sm:text-center">
            Aqui você encontra respostas para as dúvidas mais comuns sobre os
            tratamentos de drenagem linfática, massagem relaxante e estética
            facial. Se precisar de mais informações, entre em contato pelo
            WhatsApp ou agende sua sessão personalizada!
          </p>
        </div>
        {faqSections?.map(({ id, title, description }, index) => {
          return (
            <div key={id} className="mx-auto">
              <button
                className="flex items-center justify-between py-4 cursor-pointer w-full"
                onClick={() => toggleAccordion(index)}
                aria-expanded={selected === index}
                aria-controls={`accordion-header-${index}`}
                id={`accordion-header-${index}`}
              >
                <h3 className="max-w-[260px] sm:max-w-[480px] flex items-center gap-4 text-left font-bold">
                  {title}
                </h3>

                <IoIosArrowDown
                  className={clsx(
                    "transition duration-200 ease-in-out text-lg",
                    selected === index && "rotate-180"
                  )}
                />
              </button>

              <div
                className={clsx(
                  "w-full border-b border-gray-200 transition-all duration-200 ease-in-out overflow-y-auto",
                  selected === index ? "h-40" : "h-0"
                )}
                id={`accordion-content-${index}`}
                role="region"
                aria-labelledby={`accordion-header-${index}`}
              >
                <p className="p-4">{description}</p>
              </div>
            </div>
          );
        })}
      </Container>
    </div>
  );
}

export default Accordion;
