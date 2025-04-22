import Image from "next/image";
import image1 from "@/public/images/elaine.jpeg";
import image2 from "@/public/images/sentada-frente.jpeg";
import image3 from "@/public/images/pose.jpeg";

export default function About() {
  return (
    <div className="overflow-hidden bg-secondary" id="sobre">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:flex lg:p-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-12 sm:gap-x-12 sm:gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          {/* Conteúdo de Texto */}
          <div className="px-4 sm:px-0 lg:col-end-1 lg:w-full lg:max-w-lg">
            <div className="space-y-4 max-w-[700px]">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-purple-primary">
                Sobre a Elaine
              </h2>
              <div className="w-24 h-1 bg-purple-primary my-4 sm:my-6"></div>
            </div>

            <p className="mt-6 text-lg sm:text-xl/8 text-purple-primary">
              Sou especialista em estética corporal e terapias manuais, com
              formação exclusiva no <strong>Método Renata França</strong>. Minha
              jornada na área da beleza e bem-estar começou há mais de X anos,
              quando descobri minha paixão por ajudar pessoas a se reconectarem
              com seus corpos.
            </p>

            <p className="mt-6 text-base/7 text-purple-primary">
              Minha abordagem vai muito além da estética - acredito no{" "}
              <strong>poder transformador</strong> de um atendimento humanizado
              e personalizado. Cada sessão é cuidadosamente planejada para
              atender às necessidades específicas de cada cliente, garantindo
              resultados visíveis e duradouros.
            </p>

            <div className="mt-8 space-y-4">
              <h3 className="font-serif font-semibold text-primary text-lg">
                Minha Filosofia:
              </h3>
              <ul className="space-y-3 text-purple-primary">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Atendimento personalizado e acolhedor</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Técnicas precisas e resultados comprovados</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Compromisso com o bem-estar integral</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>
                    Uso de produtos premium e equipamentos profissionais
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Grid de Imagens */}
          <div className="grid grid-cols-1 gap-6 sm:flex sm:flex-wrap sm:items-start sm:justify-end sm:gap-6 lg:contents">
            {/* Imagem Principal - Elaine profissional */}
            <div className="px-4 sm:px-0 sm:w-0 sm:flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <Image
                alt="Elaine aplicando técnica de drenagem linfática"
                src={image3}
                width={800}
                height={600}
                className="aspect-[7/5] w-full sm:w-[37rem] max-w-none rounded-2xl bg-gray-50 object-top object-cover shadow-lg border-4 border-white"
              />
            </div>

            {/* Imagens Secundárias */}
            <div className="grid grid-cols-1 gap-6 px-4 sm:px-0 sm:contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              {/* Foto da técnica sendo aplicada */}
              <div className="sm:order-first sm:flex sm:w-64 sm:flex-none sm:justify-end sm:self-end lg:w-auto">
                <Image
                  alt="Detalhe da técnica Renata França aplicada"
                  src={image2}
                  width={600}
                  height={500}
                  className="aspect-[4/3] w-full sm:w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-top object-cover shadow-lg border-4 border-white"
                />
              </div>

              {/* Foto dos equipamentos/produtos */}
              <div className="sm:flex sm:w-96 sm:flex-auto sm:justify-end lg:w-auto lg:flex-none">
                <Image
                  alt="Equipamentos e produtos profissionais utilizados"
                  src={image1}
                  width={800}
                  height={600}
                  className="aspect-[7/5] w-full sm:w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-top object-cover shadow-lg border-4 border-white"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
