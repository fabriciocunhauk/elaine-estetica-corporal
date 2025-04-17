"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import { useInView } from "framer-motion";
import Container from "./Container";

interface Review {
  title: string;
  body: string;
  author: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

const reviews: Array<Review> = [
  {
    title: "Resultados Incríveis",
    body: "Fiz 5 sessões de drenagem com a Elaine e os resultados foram visíveis já na primeira semana. Perdi medidas e meu inchaço reduziu drasticamente. Profissional super atenciosa e competente!",
    author: "Camila R.",
    rating: 5,
  },
  {
    title: "Melhor Massagem da Minha Vida",
    body: "A Elaine tem mãos de fada! Nunca tinha feito uma massagem tão relaxante e ao mesmo tempo eficaz. Saí da sessão renovada e sem aquelas dores nas costas que me acompanhavam há meses.",
    author: "Fernanda S.",
    rating: 5,
  },
  {
    title: "Drenagem que Funciona",
    body: "Já fiz drenagem em vários lugares, mas só com a Elaine vi resultados de verdade. Nota 10 pelo profissionalismo e pelo carinho com que trata cada cliente.",
    author: "Juliana M.",
    rating: 5,
  },
  {
    title: "Atendimento Perfeito",
    body: "A Elaine veio até minha casa com todo o equipamento, foi super pontual e fez uma sessão maravilhosa. Minha pele ficou super macia e meu corpo muito mais leve!",
    author: "Patrícia L.",
    rating: 5,
  },
  {
    title: "Transformação no Pós-Parto",
    body: "A Elaine salvou meu pós-parto! As sessões de drenagem reduziram muito meu inchaço e me ajudaram a recuperar a autoestima. Super indico para todas as mamães!",
    author: "Tatiane C.",
    rating: 5,
  },
  {
    title: "Profissional Dedicada",
    body: "Nota-se que a Elaine ama o que faz. Explica cada passo do procedimento, é extremamente cuidadosa e os resultados são incríveis. Já estou agendando minhas próximas sessões!",
    author: "Ana Paula V.",
    rating: 5,
  },
  {
    title: "Drenagem Facial Maravilhosa",
    body: "Minha pele mudou completamente depois das sessões com a Elaine. Reduziu meu inchaço facial e as olheiras melhoraram muito. O atendimento em casa é um diferencial e tanto!",
    author: "Roberta F.",
    rating: 5,
  },
  {
    title: "Mãos Abençoadas",
    body: "A Elaine descobriu pontos de tensão que nem sabia que tinha. Depois da massagem, parecia que tinha trocado de corpo! Já indiquei para todas minhas amigas.",
    author: "Gabriela O.",
    rating: 5,
  },
  {
    title: "Comprometimento Total",
    body: "Impressionante como a Elaine se dedica a cada cliente. Percebeu que eu tinha retenção líquida e adaptou a técnica. Resultado: 2kg a menos em líquido na primeira semana!",
    author: "Marina G.",
    rating: 5,
  },
  {
    title: "Além do Esperado",
    body: "Além de fazer uma drenagem perfeita, a Elaine me deu dicas de alimentação e autocuidado que mudaram minha rotina. Superou todas minhas expectativas!",
    author: "Isabela T.",
    rating: 5,
  },
  {
    title: "Solução para Minhas Dores",
    body: "Sofro de fibromialgia e as massagens da Elaine são a única coisa que realmente alivia minhas crises. Sou grata por ter encontrado uma profissional tão competente e humana.",
    author: "Renata P.",
    rating: 5,
  },
  {
    title: "Resultado Imediato",
    body: "Depois de uma sessão de drenagem facial com a Elaine, meu rosto ficou visivelmente mais delineado. Até meu namorado comentou a diferença!",
    author: "Amanda K.",
    rating: 5,
  },
  {
    title: "Conforto e Resultados",
    body: "Adoro receber a Elaine em casa. É tão mais confortável do que ir a clínicas, e os resultados são melhores! Ela traz todo o equipamento e transforma meu espaço num spa.",
    author: "Beatriz N.",
    rating: 5,
  },
  {
    title: "Tratamento Completo",
    body: "Fiz o pacote VIP com drenagem + massagem + facial e foi a melhor decisão. A Elaine é detalhista e faz cada minuto valer a pena. Saí me sentindo uma nova pessoa!",
    author: "Carolina S.",
    rating: 5,
  },
];

function StarIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function StarRating({ rating }: { rating: Review["rating"] }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            "h-5 w-5",
            rating > index ? "fill-cyan-500" : "fill-gray-300"
          )}
        />
      ))}
    </div>
  );
}

function Review({
  title,
  body,
  author,
  rating,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<"figure">, keyof Review> & Review) {
  const animationDelay = useMemo(() => {
    const possibleAnimationDelays = [
      "0s",
      "0.1s",
      "0.2s",
      "0.3s",
      "0.4s",
      "0.5s",
    ];
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ];
  }, []);

  return (
    <figure
      className={clsx(
        "animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5",
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-purple-primary">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg/6 font-semibold before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base/7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-purple-primary before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  );
}

function splitArray<T>(array: Array<T>, numParts: number) {
  const result: Array<Array<T>> = [];
  for (let i = 0; i < array.length; i++) {
    const index = i % numParts;
    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }
  return result;
}

function ReviewColumn({
  reviews,
  className,
  reviewClassName,
  msPerPixel = 0,
}: {
  reviews: Array<Review>;
  className?: string;
  reviewClassName?: (reviewIndex: number) => string;
  msPerPixel?: number;
}) {
  const columnRef = useRef<React.ElementRef<"div">>(null);
  const [columnHeight, setColumnHeight] = useState(0);
  const duration = `${columnHeight * msPerPixel}ms`;

  useEffect(() => {
    if (!columnRef.current) {
      return;
    }

    const resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0);
    });

    resizeObserver.observe(columnRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={columnRef}
      className={clsx("animate-marquee space-y-8 py-4", className)}
      style={{ "--marquee-duration": duration } as React.CSSProperties}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName?.(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  );
}

function ReviewGrid() {
  const containerRef = useRef<React.ElementRef<"div">>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });
  const columns = splitArray(reviews, 3);
  const column1 = columns[0];
  const column2 = columns[1];
  const column3 = splitArray(columns[2], 2);

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...column1, ...column3.flat(), ...column2]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= column1.length + column3[0].length &&
                  "md:hidden",
                reviewIndex >= column1.length && "lg:hidden"
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...column2, ...column3[1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= column2.length ? "lg:hidden" : ""
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={column3.flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-linear-to-b from-white" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-white" />
    </div>
  );
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="flex flex-col items-center space-y-20 pt-20 pb-16 sm:pt-32 sm:pb-24"
    >
      <Container>
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
        <ReviewGrid />
      </Container>
    </section>
  );
}
