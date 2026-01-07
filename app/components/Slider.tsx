import styles from "./Slider.module.css";
import theme from "../page.module.css";
import React, { useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import AutoHeight from "embla-carousel-auto-height";

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000 }),
    //AutoHeight(),
  ]);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={styles.embla}>
      <div className="embla__viewport" ref={emblaRef}>
        <div className={styles.embla__container}>
          <div
            className={`${styles.embla__slide} bg-[--primary-blue] text-white py-16`}
          >
            <div className={`container-viva ${theme.hero_container}`}>
              <div className="md:w-2/4 px-8 xl:px-0">
                <h1 className={theme.title_white_before_yellow}>
                  O Viva Sinaf chegou!
                </h1>
                <p className="text-viva-bg text-white mb-4">
                  Sua plataforma de saúde e bem-estar com benefícios que
                  facilitam o dia a dia:
                </p>
                <p className="flex items-baseline text-viva-bg text-white mb-2">
                  <Image
                    src="/checkmark-square-2-outline 1.png"
                    alt="Checkmark"
                    width={16}
                    height={16}
                    className="w-[16px] h-[16px] mr-2"
                  />
                  Aconselhamento médico por telefone
                </p>
                <p className="flex items-baseline text-viva-bg  text-white mb-2">
                  <Image
                    src="/checkmark-square-2-outline 1.png"
                    alt="Checkmark"
                    width={16}
                    height={16}
                    className="w-[16px] h-[16px] mr-2"
                  />
                  Descontos em exames
                </p>
                <p className="flex items-baseline text-viva-bg text-white mb-2">
                  <Image
                    src="/checkmark-square-2-outline 1.png"
                    alt="Checkmark"
                    width={16}
                    height={16}
                    className="w-[16px] h-[16px] mr-2"
                  />
                  Descontos em medicamentos
                </p>
                <p className="text-viva-bg text-white mb-2">
                  E tem muito mais vindo ai.
                </p>
                <p className="text-viva-bg text-white mb-4">
                  Clique no botão da loja compatível com seu celular e baixe o
                  app!*
                </p>
                <div className="flex-base mb-2">
                  <Link
                    href={process.env.NEXT_PUBLIC_PLAY_STORE_URL as string}
                    target="_blank"
                  >
                    <Image
                      src="/google-play.png"
                      alt="Disponível no Google Play"
                      width={170}
                      height={50}
                    />
                  </Link>
                  <Link
                    href={process.env.NEXT_PUBLIC_APP_STORE_URL as string}
                    target="_blank"
                  >
                    <Image
                      src="/app-store.png"
                      alt="Baixar na App Store"
                      width={170}
                      height={50}
                    />
                  </Link>
                </div>
                <p className="text-viva-sm text-white">
                  *Produto exclusivo para segurados da Sinaf Seguros
                </p>
              </div>
              <div className="md:w-2/4">
                <Image
                  src="/banner-cel.svg"
                  alt="Preview do aplicativo"
                  width={489}
                  height={450}
                  className="w-[100%]"
                />
              </div>
            </div>
          </div>

          <div
            className={`${styles.embla__slide} bg-[--primary-gray] text-dark pt-[40px]`}
          >
            <div className={`container-viva ${theme.hero_container}`}>
              <div className="md:w-2/4 px-8 xl:px-0">
                <h1 className={theme.title_dark_before_yellow}>
                  O Viva também está no WhatsApp
                </h1>
                <p className="text-viva-bg xl:text-[16px] text-dark mb-2">
                  Fale com a Vivi, a assitente virtual do Viva Sinaf, sempre
                  pronta para te ajudar no WhatsApp.
                </p>
                <p className="text-viva-bg xl:text-[16px] text-dark mb-2">
                  Agora ficou ainda mais simples acessar seus benefícios:
                </p>
                <p className="flex items-baseline text-viva-bg text-dark mb-2">
                  <Image
                    src="/checkmark-square-2-outline 1.png"
                    alt="Checkmark"
                    width={16}
                    height={16}
                    className="w-[16px] h-[16px] mr-2"
                  />
                  Carteirinha digital
                </p>
                <p className="flex items-baseline text-viva-bg text-dark mb-2">
                  <Image
                    src="/checkmark-square-2-outline 1.png"
                    alt="Checkmark"
                    width={16}
                    height={16}
                    className="w-[16px] h-[16px] mr-2"
                  />
                  Clínicas com exames e descontos perto de você
                </p>
                <p className="flex items-baseline text-viva-bg text-dark mb-2">
                  <Image
                    src="/checkmark-square-2-outline 1.png"
                    alt="Checkmark"
                    width={16}
                    height={16}
                    className="w-[16px] h-[16px] mr-2"
                  />
                  Farmácias com descontos mais próximas
                </p>
                <div className="flex-base mb-2">
                  <Link href="#" target="_blank">
                    <Image
                      src="/fale-com-a-vivi.png"
                      alt="Fale com a Vivi no WhatsApp"
                      width={170}
                      height={50}
                    />
                  </Link>
                </div>

                <p className="text-viva-sm text-dark">
                  *Produto exclusivo para segurados da Sinaf Seguros
                </p>
              </div>
              <div className="md:w-2/4 flex self-end">
                <Image
                  src="/banner-senhor.svg"
                  alt="Preview do aplicativo"
                  className="w-[100%]"
                  width={564}
                  height={600}
                />
              </div>
            </div>
          </div>

          <div
            className={`${styles.embla__slide} bg-[--primary-yellow] imagem-coracao text-dark py-[100px] md:py-[100px]`}
          >
            <div className={`container-viva ${theme.hero_container} `}>
              <div className="md:w-2/4 px-8 xl:px-0">
                <h1 className={theme.title_dark_before_blue}>
                  Acesse o Viva Sinaf pela web
                </h1>
                <p className="text-viva-bg text-dark mb-2">
                  As mesmas funcionalidades do app também estão disponíveis em
                  um site exclusivo.
                </p>
                <p className="text-viva-bg text-dark mb-2">
                  Acesse pelo celular ou computador, do jeito que for melhor
                  para você,{" "}
                  <b className="text-[--primary-blue]">
                    sem precisar baixar o aplicativo.
                  </b>
                </p>
                <div className="flex-base mb-2">
                  <Link
                    href={process.env.NEXT_PUBLIC_SITE_URL as string}
                    target="_blank"
                  >
                    <Image
                      src="/entrar-pelo-site.png"
                      alt="Entrar pelo site"
                      width={170}
                      height={50}
                    />
                  </Link>
                </div>
                <p className="text-viva-sm text-dark">
                  *Produto exclusivo para segurados da Sinaf Seguros
                </p>
                <p className="text-viva-sm text-dark">
                  **Acesso recomendado para celulares não compatíveis com as
                  versões do app disponibilizadas nas lojas Google e Apple.
                </p>
              </div>
              <div className="md:w-2/4">
                <Image
                  src="/banner-web.svg"
                  alt="Preview do aplicativo web"
                  width={489}
                  height={450}
                  className="w-[100%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className={styles.embla__prev} onClick={scrollPrev}>
        <b>{"<"}</b>
      </button>
      <button className={styles.embla__next} onClick={scrollNext}>
        <b>{">"}</b>
      </button>
    </div>
  );
}
