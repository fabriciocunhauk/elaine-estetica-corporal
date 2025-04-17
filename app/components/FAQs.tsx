import React from "react";
import Container from "./Container";

function FAQs() {
  return (
    <Container element="section">
      <h2 className="text-3xl font-bold text-center text-purple-primary my-20">
        Perguntas Frequentes
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
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
