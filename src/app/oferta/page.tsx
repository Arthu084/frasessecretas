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
          <p className="text-sm md:text-base font-semibold tracking-wider">
            ENVIE ESSAS <span className="text-red-500 font-bold">FRASES DISCRETAS</span> PARA ELE... E ELE FICARÁ OBCECADO POR VOCÊ
          </p>
          <h1 className="text-2xl md:text-3xl font-bold mt-4">
            Sem ter que se humilhar, ficar fazendo ciúmes com outro,
          </h1>
          <h2 className="text-3xl md:text-4xl font-extrabold text-red-500 mt-2">
            Ele não terá olhos pra outras mulheres...
          </h2>
        </header>

        <section className="bg-zinc-900 py-12 px-4 rounded-xl shadow-lg">
            <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold">
                    Confira alguns depoimentos de mulheres que usaram as{' '}
                    <span className="text-cyan-400">Frases Discretas</span>
                </h3>
                <p className="text-lg md:text-xl text-zinc-300 mt-2">
                    Elas conseguiram deixar o homem que tanto desejavam obcecado por elas...
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
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 flex justify-center">
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

        <section className="text-center my-16">
          <h2 className="text-3xl md:text-4xl font-bold">
            VOCÊ JÁ SE PERGUNTOU POR QUE OS HOMENS <span className="text-red-500">SÓ</span>
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-red-500">PENSAM EM SEXO?</h2>

          <p className="mt-8 text-lg md:text-xl max-w-xl mx-auto">
            O Sexo libera um neurotransmissor no cérebro masculino chamado de <span className="text-red-400 font-bold">Dopamina</span>
          </p>
          <p className="mt-4 text-lg md:text-xl max-w-xl mx-auto">
            Na maioria das vezes, a única fonte de dopamina do relacionamento é o sexo
          </p>
        </section>
        
        <section className="my-16">
          <Card className="bg-gradient-to-br from-red-800 via-red-600 to-rose-700 border-rose-500 border-2 shadow-2xl shadow-red-500/30">
            <CardContent className="p-6 md:p-10 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">O SEGREDO DAS FRASES DISCRETAS</h2>
              <p className="mt-4 text-lg md:text-xl font-medium">Acesso Imediato a Todas as Frases Secretas</p>
              
              <div className="my-8">
                <span className="text-sm line-through text-rose-200">DE R$97,00</span>
                <p className="text-5xl md:text-6xl font-black">POR APENAS R$9,90</p>
                <p className="text-base font-medium text-rose-100">(Pagamento único)</p>
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
