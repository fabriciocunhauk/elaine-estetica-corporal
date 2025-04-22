import React from "react";
import Container from "./Container";

function FAQs() {
  return (
    <Container element="section" classes={{ container: "py-20" }}>
      <div className="mb-10">
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-purple-primary sm:text-center"
        >
          Perguntas Frequentes
        </h2>
        <p className="mt-2 text-lg text-purple-primary sm:text-center">
          Aqui você encontra respostas para as dúvidas mais comuns sobre os
          tratamentos de drenagem linfática, massagem relaxante e estética
          facial. Se precisar de mais informações, entre em contato pelo
          WhatsApp ou agende sua sessão personalizada!
        </p>
      </div>
      <div className="flex flex-col items-center justify-center gap-10 max-w-3xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-purple-primary mb-2">
            Quantas sessões são recomendadas?
          </h3>
          <p className="text-gray-600">
            Para melhores resultados, recomendo um pacote inicial de 5 sessões
            de drenagem linfática, com intervalo de 48-72h entre elas. Para
            manutenção, 1 sessão semanal ou quinzenal.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-purple-primary mb-2">
            Há contraindicações?
          </h3>
          <p className="text-gray-600">
            A drenagem não é indicada em casos de infecções agudas, trombose ou
            problemas cardíacos graves. Sempre realizo uma anamnese completa
            antes da primeira sessão.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-purple-primary mb-2">
            Preciso preparar algo em casa?
          </h3>
          <p className="text-gray-600">
            Trago toda a estrutura necessária (macarrão, óleos, etc). Você só
            precisa providenciar uma espaço tranquilo e uma tomada próxima.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default FAQs;
