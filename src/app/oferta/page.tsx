
'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { CheckCircle, Gift, X } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function OfferPage() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const testimonials = [
    'https://i.imgur.com/26lE51Q.png',
    'https://i.imgur.com/b9g9DgY.png',
    'https://i.imgur.com/Q3v8IMb.png',
    'https://i.imgur.com/w4T8DCl.png',
    'https://i.imgur.com/mtW4h1x.png',
  ];

  const ofertaLink =
    'https://pay.kirvano.com/e8a75e38-406a-4d2b-9e48-e8a4a589a80e';

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const problems = [
    { title: 'Medo de ser rejeitada' },
    { title: 'Dificuldade em entender o comportamento masculino' },
    { title: 'Desconhece a comunicação sedutora' },
  ];

  const benefits = [
    'Técnicas de comunicação secreta',
    'Frases para usar no WhatsApp',
    'Como se tornar uma mulher magnética',
    'Bônus: Guia de Confiança Inabalável',
  ];

  const faqItems = [
    {
      question: 'Isso vai funcionar pra mim?',
      answer:
        'Sim! As Frases Discretas foram desenvolvidas com base em estudos de comportamento e funcionam para qualquer mulher, independentemente da idade ou tipo de relacionamento que você busca.',
    },
    {
      question: 'O que vou receber?',
      answer:
        'Você receberá acesso imediato e vitalício a um guia completo com todas as Frases Discretas, exemplos práticos de como e quando usá-las, além de bônus exclusivos para acelerar seus resultados.',
    },
    {
      question: 'O que acontece depois que eu fizer a minha inscrição?',
      answer:
        'Após a confirmação do pagamento, você receberá um e-mail com os dados de acesso à nossa área de membros exclusiva, onde todo o material estará disponível para você acessar quando e onde quiser.',
    },
    {
      question: 'Quais as formas de pagamento?',
      answer:
        'Aceitamos as principais formas de pagamento, como Cartão de Crédito em até 12x, PIX e Boleto Bancário. Pagamentos com PIX e Cartão de Crédito têm liberação imediata.',
    },
    {
      question: 'Tem garantia?',
      answer:
        'Sim! Oferecemos uma garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeita, basta solicitar o reembolso e devolveremos 100% do seu dinheiro, sem perguntas.',
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black text-white font-sans">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold leading-tight">
            Envie essas <span className="text-red-500">Frases</span>
            <br />
            <span className="text-red-500">Discretas</span> e ele ficará
            <br />
            obcecado por você!
          </h1>
          <h2 className="text-lg md:text-xl font-normal text-zinc-300 mt-4 max-w-2xl mx-auto">
            Sem ter que se humilhar, fazer ciúmes com outros, ou implorar por
            atenção. Ele simplesmente não terá olhos para mais ninguém.
          </h2>
        </header>

        <section className="bg-zinc-900 py-8 px-4 rounded-xl shadow-lg my-8">
          <div className="text-center mb-4">
            <h3 className="text-3xl font-bold">
              Confira o que dizem as mulheres que usaram as{' '}
              <span className="text-red-500">Frases Discretas</span>
            </h3>
            <p className="text-lg md:text-xl text-zinc-300 mt-2">
              Elas conseguiram o homem que tanto desejavam...
            </p>
          </div>

          <Carousel
            setApi={setApi}
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full max-w-xs sm:max-w-sm md:max-w-xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((src, index) => (
                <CarouselItem key={index} className="flex justify-center">
                  <div className="p-1">
                    <Image
                      src={src}
                      alt={`Depoimento ${index + 1}`}
                      width={300}
                      height={500}
                      className="rounded-lg object-contain"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-white hidden sm:flex" />
            <CarouselNext className="text-white hidden sm:flex" />
          </Carousel>
          <div className="py-4 text-center text-sm text-muted-foreground">
            <div className="flex items-center justify-center gap-2 mb-2">
              {Array.from({ length: count }).map((_, i) => (
                <span
                  key={i}
                  className={`block h-2 w-2 rounded-full ${
                    current - 1 === i ? 'bg-white' : 'bg-zinc-600'
                  }`}
                />
              ))}
            </div>
            Arraste para o lado
          </div>
        </section>

        <section className="text-center my-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Você já se perguntou por que os homens só{' '}
            <span className="text-red-500">pensam em sexo</span>?
          </h2>
          <div className="mt-4 text-lg md:text-xl max-w-2xl mx-auto space-y-6 text-zinc-200 text-center">
            <p>
              O sexo libera um neurotransmissor no cérebro masculino chamado de{' '}
              <span className="font-bold text-red-400">dopamina</span>. Na
              maioria das vezes, a única fonte de dopamina do relacionamento é o
              sexo.
            </p>
          </div>
        </section>

        <section className="my-8">
          <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-left text-zinc-300 mb-6">
              Baseado nas suas respostas, você não consegue atrair o homem que deseja por causa desses problemas:
            </p>
            <hr className="border-t border-zinc-700 mb-6" />
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex flex-col">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-600 rounded-full p-2 flex-shrink-0 mt-1">
                      <X className="text-white h-6 w-6" />
                    </div>
                    <div className="text-left">
                      <span className="font-bold text-lg">
                        {problem.title}
                      </span>
                    </div>
                  </div>
                  {index < problems.length - 1 && (
                    <hr className="border-t border-zinc-700 mt-4 w-full" />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="my-8">
          <Card className="bg-gradient-to-br from-red-800 via-red-600 to-rose-700 border-rose-500 border-2 shadow-2xl shadow-red-500/30">
            <CardContent className="p-6 md:p-8 text-center text-white">
              <CardTitle className="text-2xl md:text-3xl font-extrabold tracking-tight">
                O SEGREDO DAS
                <br />
                FRASES DISCRETAS
              </CardTitle>
              <p className="mt-3 text-base md:text-lg font-medium">
                Acesso Imediato a<br />
                Todas as Frases Secretas
              </p>

              <div className="my-6">
                <span className="text-2xl line-through text-rose-200">
                  DE R$97,00
                </span>
                <p className="text-3xl md:text-3xl font-extrabold my-1">
                  POR APENAS
                  <br />
                  R$17,00
                </p>
                <p className="text-sm font-medium text-rose-100">
                  (Pagamento único e acesso vitalício)
                </p>
              </div>

              <div className="my-8 text-left max-w-sm mx-auto">
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      {benefit.startsWith('Bônus:') ? (
                        <Gift className="h-6 w-6 text-yellow-400 mt-0.5 flex-shrink-0" />
                      ) : (
                        <CheckCircle className="h-6 w-6 text-green-400 mt-0.5 flex-shrink-0" />
                      )}
                      <span className="text-base font-medium">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a href={ofertaLink} className="inline-block w-full max-w-md">
                <Button
                  size="lg"
                  className="w-full h-auto text-base font-bold py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105 animate-pulse-slow"
                >
                  SIM, QUERO ACESSO IMEDIATO
                </Button>
              </a>
              <p className="text-xs mt-4 text-rose-200 font-bold">
                Compra 100% segura.
              </p>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-white mb-4">
            Dúvidas Frequentes
          </h2>
          <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto bg-zinc-900 rounded-lg p-2">
            {faqItems.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index} className="border-b-zinc-700">
                <AccordionTrigger className="text-left text-sm font-semibold hover:no-underline p-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="p-4 pt-0 text-zinc-300 text-sm">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      </div>
      <footer className="w-full bg-zinc-900 py-8 mt-4">
          <div className="container mx-auto px-4 text-center text-zinc-400 text-sm">
              <p>Copyright © 2025. <br /> Todos os direitos reservados</p>
              <div className="flex justify-center items-center mt-4">
                  <Image src="https://i.imgur.com/5FVeChe.png" alt="Selo de Garantia" width={220} height={78} />
              </div>
          </div>
      </footer>
    </div>
  );
}
