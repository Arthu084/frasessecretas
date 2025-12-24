'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

export default function OfferPage() {
  const testimonials = [
    'https://i.imgur.com/G2T1aIu.png',
    'https://i.imgur.com/g89ZRv6.png',
    'https://i.imgur.com/6X9mY9d.png',
  ];
  
  const ofertaLink = "https://pay.kirvano.com/e8a75e38-406a-4d2b-9e48-e8a4a589a80e";

  return (
    <div className="min-h-screen w-full bg-black text-white font-sans">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <header className="text-center mb-12">
          <p className="text-base md:text-lg font-semibold tracking-wider uppercase">
            Envie essas <span className="text-red-500 font-bold">Frases Discretas</span>
          </p>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-4 leading-tight">
            E ele ficará <span className="text-cyan-400">obcecado</span> por você
          </h1>
          <h2 className="text-lg md:text-xl font-normal text-zinc-300 mt-4 max-w-2xl mx-auto">
            Sem ter que se humilhar, fazer ciúmes com outros, ou implorar por atenção. Ele simplesmente não terá olhos para mais ninguém.
          </h2>
        </header>

        <section className="bg-zinc-900 py-12 px-4 rounded-xl shadow-lg my-16">
            <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold">
                    Confira o que dizem as mulheres que usaram as <span className="text-cyan-400">Frases Discretas</span>
                </h3>
                <p className="text-lg md:text-xl text-zinc-300 mt-2">
                    Elas conseguiram o homem que tanto desejavam...
                </p>
            </div>

            <Carousel
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
        </section>

        <section className="text-center my-20">
            <h2 className="text-3xl md:text-4xl font-bold">
                Você já se perguntou por que os homens <span className="text-red-500">só pensam em sexo?</span>
            </h2>
            <div className="mt-8 text-lg md:text-xl max-w-2xl mx-auto space-y-4 text-zinc-300">
                <p>
                    A resposta está na <span className="text-red-400 font-bold">dopamina</span>, um neurotransmissor liberado no cérebro masculino que causa uma intensa sensação de prazer e recompensa.
                </p>
                <p>
                    Na maioria das vezes, a única fonte de dopamina em um relacionamento acaba sendo o sexo. Mas e se você pudesse se tornar a principal fonte de dopamina para ele, muito além da intimidade?
                </p>
            </div>
        </section>
        
        <section className="my-16">
          <Card className="bg-gradient-to-br from-red-800 via-red-600 to-rose-700 border-rose-500 border-2 shadow-2xl shadow-red-500/30">
            <CardContent className="p-6 md:p-10 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">O SEGREDO DAS FRASES DISCRETAS</h2>
              <p className="mt-4 text-lg md:text-xl font-medium">Acesso Imediato a Todas as Frases Secretas</p>
              
              <div className="my-8">
                <span className="text-lg line-through text-rose-200">DE R$97,00</span>
                <p className="text-6xl md:text-7xl font-black my-2">POR APENAS R$9,90</p>
                <p className="text-base font-medium text-rose-100">(Pagamento único e acesso vitalício)</p>
              </div>

              <a href={ofertaLink} className="inline-block w-full max-w-md">
                <Button size="lg" className="w-full h-auto text-xl md:text-2xl font-bold py-4 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
                  SIM, QUERO ACESSO IMEDIATO!
                </Button>
              </a>
              <p className="text-xs mt-4 text-rose-200">Compra 100% segura. Acesso liberado imediatamente após a confirmação do pagamento.</p>

            </CardContent>
          </Card>
        </section>

      </div>
    </div>
  );
}
