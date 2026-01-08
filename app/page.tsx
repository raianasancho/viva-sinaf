"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import styles from "./page.module.css";
import EmblaCarousel from "./components/Slider";

export default function Home() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const navigationRef = useRef<HTMLDivElement>(null);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [showContactText, setShowContactText] = useState(false);

  useEffect(() => {
    // Smooth scroll to section when clicking navigation dots or menu links
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const sectionId = target.getAttribute("data-section");
      if (sectionId) {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Add FAQ animation handlers
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        const details = e.currentTarget as HTMLDetailsElement;
        const content = details.querySelector("p");

        if (!content) return;

        // If closing
        if (details.open) {
          e.preventDefault();
          content.style.maxHeight = "0";
          content.style.opacity = "0";
          content.style.padding = "1rem 2rem 0 0";

          setTimeout(() => {
            details.open = false;
          }, 300); // Match transition duration
        }
        // If opening
        else {
          content.style.maxHeight = "500px";
          content.style.opacity = "1";
          content.style.padding = "1rem 2rem 1rem 0";
        }
      });
    });

    // createNavigation();
    return () => {
      // observer.disconnect();
      navigationRef.current?.removeEventListener("click", handleNavClick);

      // Cleanup FAQ listeners
      faqItems.forEach((item) => {
        item.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <>
      <main className={styles.main}>
        <Header />

        {/* Hero Section */}
        <section
          id="inicio"
          className={styles.hero_section}
          ref={(el) => (sectionsRef.current[0] = el)}
        >
          <EmblaCarousel />
        </section>

        {/* Steps Section */}
        <section
          id="como-funciona"
          className={styles.steps_section}
          ref={(el) => (sectionsRef.current[1] = el)}
        >
          <div className={`container-viva ${styles.steps_section_container}`}>
            <h2 className={styles.title_blue_before_white}>
              Olha como é fácil fazer parte do Viva!
            </h2>
            <p className="text-viva text-[--text-dark]">
              Siga o passo a passo e comece a aproveitar os seus benefícios. É
              muito simples de usar!
            </p>
            <p className="text-viva text-[--text-dark]">
              Faça o download clicando no botão Google play para celulares
              Android ou na Apple para celulares iPhone.
            </p>
            <div className={styles.store_badges}>
              <Link
                href={process.env.NEXT_PUBLIC_PLAY_STORE_URL as string}
                className="hover:opacity-90 transition-opacity"
                target="_blank"
              >
                <Image
                  src="/google-play-badge.png"
                  alt="Disponível no Google Play"
                  width={180}
                  height={53}
                  className="h-auto"
                />
              </Link>
              <Link
                href={process.env.NEXT_PUBLIC_APP_STORE_URL as string}
                className="hover:opacity-90 transition-opacity"
                target="_blank"
              >
                <Image
                  src="/app-store-badge.png"
                  alt="Baixar na App Store"
                  width={180}
                  height={53}
                  className="h-auto"
                />
              </Link>

              <Link
                href={process.env.NEXT_PUBLIC_SITE_URL as string}
                target="_blank"
              >
                <Image
                  src="/entrar-pelo-site.png"
                  alt="Entrar pelo site"
                  width={180}
                  height={53}
                />
              </Link>
              <Link
                href={process.env.NEXT_PUBLIC_WHATSAPP_URL as string}
                target="_blank"
              >
                <Image
                  src="/fale-com-a-vivi.png"
                  alt="Fale com a Vivi no WhatsApp"
                  width={180}
                  height={53}
                />
              </Link>
            </div>
            <p className="text-viva text-[--text-dark]">
              Caso ao entrar na sua loja de aplicativo, você receba a informação
              que seu aparelho não é compatível com o App,{" "}
              <Link
                className="underline"
                href={process.env.NEXT_PUBLIC_SITE_URL as string}
                target="_blank"
              >
                clique aqui
              </Link>{" "}
              e use nossa versão web.
            </p>

            <div className={styles.app_steps}>
              <div className={styles.step_item}>
                <Image
                  src="/step-1.png"
                  alt="Passo 1"
                  width={204}
                  height={494}
                  className={styles.step_image}
                />
                <p className="text-viva text-[--text-dark]">
                  Preencha seus dados para acessar e siga o passo a passo.
                </p>
              </div>

              <div className={styles.step_item}>
                <Image
                  src="/step-2.png"
                  alt="Passo 2"
                  width={204}
                  height={494}
                  className={styles.step_image}
                />
                <p className="text-viva text-[--text-dark]">
                  Caso não tenha cadastro, informe sua data de nascimento.
                </p>
              </div>

              <div className={styles.step_item}>
                <Image
                  src="/step-3.png"
                  alt="Passo 3"
                  width={204}
                  height={494}
                  className={styles.step_image}
                />
                <p className="text-viva text-[--text-dark]">
                  Confirme se o telefone está correto para recebimento do Código
                  de Acesso.
                </p>
              </div>

              <div className={styles.step_item}>
                <Image
                  src="/step-4.png"
                  alt="Passo 4"
                  width={204}
                  height={494}
                  className={styles.step_image}
                />
                <p className="text-viva text-[--text-dark]">
                  Para sua segurança, valide o Código de Acesso e continue para
                  senha.
                </p>
              </div>

              <div className={styles.step_item}>
                <Image
                  src="/step-5.png"
                  alt="Passo 5"
                  width={204}
                  height={494}
                  className={styles.step_image}
                />
                <p className="text-viva text-[--text-dark]">
                  Crie sua senha, finalize o cadastro na plataforma e aproveite
                  os benefícios.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Alô Doutor Section */}
        <section
          id="alo-doutor"
          className={styles.alo_doutor_section}
          ref={(el) => (sectionsRef.current[2] = el)}
        >
          <div
            className={`container-viva ${styles.alo_doutor_section_container}`}
          >
            <div className="w-full xl:w-[45%] relative">
              <Image
                src="/doctor.png"
                alt="Médico sorrindo"
                width={536}
                height={536}
                className="alo-doutor-image w-full"
              />
              <div className="absolute xl:hidden left-[20px] bottom-[10px] w-[calc(100%-40px)] ">
                <div className={styles.title_white_before_yellow}>
                  <h2>Alô Doutor Teleatendimento Viva Sinaf</h2>
                </div>
              </div>
            </div>
            <div className="xl:w-[55%]">
              <div
                className={`${styles.title_blue_before_yellow} hidden xl:block`}
              >
                <h2>Alô Doutor Teleatendimento Viva Sinaf</h2>
              </div>

              <p className="text-viva text-[--text-dark] mb-4">
                O serviço de teleatendimento do Viva Sinaf é uma ferramenta
                importante para os clientes que precisam de orientação médica do
                dia-a-dia.
              </p>

              <p className="text-viva text-[--text-dark] mb-4">
                Funciona 24 horas por dia, 7 dias da semana e é oferecido. No
                teleatendimento do Viva Sinaf você é atendido por médicos
                especializados que poderão melhor orientar o que deve ser feito.
                Você pode usar nas seguintes situações:
              </p>

              <ul className="list-viva mb-4">
                <li>
                  Sempre que tiver dúvidas relacionadas a doenças e sintomas
                </li>
                <li>
                  Em caso de dúvidas sobre medicamentos, dosagens e reações
                  adversas
                </li>
                <li>Dúvidas sobre gravidez</li>
                <li>
                  Orientações sobre a médico de que especialidade procurar
                </li>
                <li>Informações sobre doenças crônicas</li>
                <li>Instruções em casos de urgência ou emergência médica</li>
              </ul>

              <Link
                href={process.env.NEXT_PUBLIC_QUERO_FAZER_PARTE_URL as string}
                target="_blank"
                className="button-viva-fill"
              >
                Quero fazer parte
              </Link>
            </div>
          </div>
        </section>

        {/* Pharmacies Section */}
        <section
          id="farmacias"
          className={styles.farmacias_section}
          ref={(el) => (sectionsRef.current[3] = el)}
        >
          <div className="container-viva">
            <div className={styles.title_blue_before_yellow}>
              <h2>Descontos em Medicamentos Genéricos</h2>
            </div>

            <p className="text-viva text-[--text-dark] mb-4">
              O Viva Sinaf tem parceria com redes de farmácias de todo o Brasil.
              São descontos de até 80% em mais de 35 mil farmácias.
              <br />
              Essa é uma ótima solução para quem precisa economizar em
              medicamentos sem abrir mão da qualidade.
            </p>

            <div className={styles.pharmacy_grid_xl}>
              <div className={styles.pharmacy_card}>
                <Image
                  src="/pharmacies/venancio.png"
                  alt="Venâncio"
                  width={227}
                  height={139}
                />
              </div>
              <div className={styles.pharmacy_card}>
                <Image
                  src="/pharmacies/pacheco.png"
                  alt="Drogarias Pacheco"
                  width={227}
                  height={139}
                />
              </div>
              <div className={styles.pharmacy_card}>
                <Image
                  src="/pharmacies/max.png"
                  alt="Drogarias Max"
                  width={227}
                  height={139}
                />
              </div>
              <div className={styles.pharmacy_card}>
                <Image
                  src="/pharmacies/cristal.png"
                  alt="Drogaria Cristal"
                  width={227}
                  height={139}
                />
              </div>
              <div className={styles.pharmacy_card}>
                <Image
                  src="/pharmacies/tamoio.png"
                  alt="Drogarias Tamoio"
                  width={227}
                  height={139}
                />
              </div>
              <div className={styles.pharmacy_card}>
                <Image
                  src="/pharmacies/atual.png"
                  alt="Drogaria Atual"
                  width={227}
                  height={139}
                />
              </div>
              <div className={styles.pharmacy_card}>
                <Image
                  src="/pharmacies/boa-saude.png"
                  alt="Drogaria Boa Saúde"
                  width={227}
                  height={139}
                />
              </div>
              <div className={styles.pharmacy_card}>
                <Image
                  src="/pharmacies/economize.png"
                  alt="Drogaria Economize"
                  width={227}
                  height={139}
                />
              </div>
              <div className={styles.pharmacy_card}>
                <Image
                  src="/pharmacies/pague-menos.png"
                  alt="Drogaria Pague Menos"
                  width={227}
                  height={139}
                />
              </div>
              <div className={styles.pharmacy_card}>
                <Image
                  src="/pharmacies/ofertao.png"
                  alt="Drogarias Ofertão"
                  width={227}
                  height={139}
                />
              </div>
            </div>

            <div className={styles.pharmacy_grid_lg}>
              <div className={styles.pharmacy_card}>
                <Image
                  src="/pharmacies/venancio.png"
                  alt="Venâncio"
                  width={227}
                  height={139}
                />
              </div>
              <div className={styles.pharmacy_card}>
                <Image
                  src="/pharmacies/pacheco.png"
                  alt="Drogarias Pacheco"
                  width={227}
                  height={139}
                />
              </div>
              <div className={styles.pharmacy_card}>
                <Image
                  src="/pharmacies/max.png"
                  alt="Drogarias Max"
                  width={227}
                  height={139}
                />
              </div>
              <div className={styles.pharmacy_card}>
                <Image
                  src="/pharmacies/cristal.png"
                  alt="Drogaria Cristal"
                  width={227}
                  height={139}
                />
              </div>
              <div className={styles.pharmacy_card}>
                <Image
                  src="/pharmacies/tamoio.png"
                  alt="Drogarias Tamoio"
                  width={227}
                  height={139}
                />
              </div>
              <div className={styles.pharmacy_card}>
                <Image
                  src="/pharmacies/atual.png"
                  alt="Drogaria Atual"
                  width={227}
                  height={139}
                />
              </div>
              <div className={styles.pharmacy_card}>
                <Image
                  src="/pharmacies/boa-saude.png"
                  alt="Drogaria Boa Saúde"
                  width={227}
                  height={139}
                />
              </div>
              <div className={styles.pharmacy_card}>
                <Image
                  src="/pharmacies/economize.png"
                  alt="Drogaria Economize"
                  width={227}
                  height={139}
                />
              </div>
            </div>

            <div className={styles.pharmacy_grid_md}>
              <div className={styles.pharmacy_card}>
                <Image
                  src="/pharmacies/venancio.png"
                  alt="Venâncio"
                  width={227}
                  height={139}
                />
              </div>
              <div className={styles.pharmacy_card}>
                <Image
                  src="/pharmacies/pacheco.png"
                  alt="Drogarias Pacheco"
                  width={227}
                  height={139}
                />
              </div>
              <div className={styles.pharmacy_card}>
                <Image
                  src="/pharmacies/max.png"
                  alt="Drogarias Max"
                  width={227}
                  height={139}
                />
              </div>
              <div className={styles.pharmacy_card}>
                <Image
                  src="/pharmacies/cristal.png"
                  alt="Drogaria Cristal"
                  width={227}
                  height={139}
                />
              </div>
              <div className={styles.pharmacy_card}>
                <Image
                  src="/pharmacies/tamoio.png"
                  alt="Drogarias Tamoio"
                  width={227}
                  height={139}
                />
              </div>
              <div className={styles.pharmacy_card}>
                <Image
                  src="/pharmacies/atual.png"
                  alt="Drogaria Atual"
                  width={227}
                  height={139}
                />
              </div>
            </div>

            <div className={styles.pharmacy_grid_sm}>
              <div className={styles.pharmacy_card}>
                <Image
                  src="/pharmacies/venancio.png"
                  alt="Venâncio"
                  width={227}
                  height={139}
                />
              </div>
              <div className={styles.pharmacy_card}>
                <Image
                  src="/pharmacies/pacheco.png"
                  alt="Drogarias Pacheco"
                  width={227}
                  height={139}
                />
              </div>
              <div className={styles.pharmacy_card}>
                <Image
                  src="/pharmacies/max.png"
                  alt="Drogarias Max"
                  width={227}
                  height={139}
                />
              </div>
              <div className={styles.pharmacy_card}>
                <Image
                  src="/pharmacies/cristal.png"
                  alt="Drogaria Cristal"
                  width={227}
                  height={139}
                />
              </div>
            </div>

            <Accordion
              type="single"
              collapsible
              className="w-full"
              onValueChange={(value) =>
                setIsAccordionOpen(value === "more-pharmacies")
              }
            >
              <AccordionItem value="more-pharmacies" className="border-none">
                <AccordionContent>
                  <div className={`${styles.pharmacy_grid_xl} mb-0`}>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/ultrafarma.png"
                        alt="Drogarias Ultrafarma"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/ultra-popular.png"
                        alt="Drogarias Ultra Popular"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/mundial.png"
                        alt="Drogarias Mundial"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/preco-popular.png"
                        alt="Farmácia Preço Popular"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/farmelhor.png"
                        alt="Drogarias Farmelhor"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/retiro.png"
                        alt="Drogaria Retiro"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/viva-mais.png"
                        alt="Viva Mais Drogarias"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/city-farma.png"
                        alt="City Farma"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/ocean-farma.png"
                        alt="Ocean Farma"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/legitima.png"
                        alt="Drogarias Legítima"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/brasileiras.png"
                        alt="Drogarias Brasileiras"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/droga-news.png"
                        alt="Droga News"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/mais-barato.png"
                        alt="Drogarias Mais Barato"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/farmahall.png"
                        alt="FarmaHall"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/m2.png"
                        alt="M2"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/nova-rede.png"
                        alt="Nova Rede Drogarias"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/carioca.png"
                        alt="Drogarias Carioca"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/cesar.png"
                        alt="Drogaria César"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/expresso.png"
                        alt="Expressa"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/farma-unica.png"
                        alt="Farma Única"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/povao.png"
                        alt="Drogarias Povão"
                        width={227}
                        height={139}
                      />
                    </div>
                  </div>

                  <div className={`${styles.pharmacy_grid_lg} mb-0`}>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/pague-menos.png"
                        alt="Drogaria Pague Menos"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/ofertao.png"
                        alt="Drogarias Ofertão"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/ultrafarma.png"
                        alt="Drogarias Ultrafarma"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/ultra-popular.png"
                        alt="Drogarias Ultra Popular"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/mundial.png"
                        alt="Drogarias Mundial"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/preco-popular.png"
                        alt="Farmácia Preço Popular"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/farmelhor.png"
                        alt="Drogarias Farmelhor"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/retiro.png"
                        alt="Drogaria Retiro"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/viva-mais.png"
                        alt="Viva Mais Drogarias"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/city-farma.png"
                        alt="City Farma"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/ocean-farma.png"
                        alt="Ocean Farma"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/legitima.png"
                        alt="Drogarias Legítima"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/brasileiras.png"
                        alt="Drogarias Brasileiras"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/droga-news.png"
                        alt="Droga News"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/mais-barato.png"
                        alt="Drogarias Mais Barato"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/farmahall.png"
                        alt="FarmaHall"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/m2.png"
                        alt="M2"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/nova-rede.png"
                        alt="Nova Rede Drogarias"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/carioca.png"
                        alt="Drogarias Carioca"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/cesar.png"
                        alt="Drogaria César"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/expresso.png"
                        alt="Expressa"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/farma-unica.png"
                        alt="Farma Única"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/povao.png"
                        alt="Drogarias Povão"
                        width={227}
                        height={139}
                      />
                    </div>
                  </div>

                  <div className={`${styles.pharmacy_grid_md} mb-0`}>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/boa-saude.png"
                        alt="Drogaria Boa Saúde"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/economize.png"
                        alt="Drogaria Economize"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/pague-menos.png"
                        alt="Drogaria Pague Menos"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/ofertao.png"
                        alt="Drogarias Ofertão"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/ultrafarma.png"
                        alt="Drogarias Ultrafarma"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/ultra-popular.png"
                        alt="Drogarias Ultra Popular"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/mundial.png"
                        alt="Drogarias Mundial"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/preco-popular.png"
                        alt="Farmácia Preço Popular"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/farmelhor.png"
                        alt="Drogarias Farmelhor"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/retiro.png"
                        alt="Drogaria Retiro"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/viva-mais.png"
                        alt="Viva Mais Drogarias"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/city-farma.png"
                        alt="City Farma"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/ocean-farma.png"
                        alt="Ocean Farma"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/legitima.png"
                        alt="Drogarias Legítima"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/brasileiras.png"
                        alt="Drogarias Brasileiras"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/droga-news.png"
                        alt="Droga News"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/mais-barato.png"
                        alt="Drogarias Mais Barato"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/farmahall.png"
                        alt="FarmaHall"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/m2.png"
                        alt="M2"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/nova-rede.png"
                        alt="Nova Rede Drogarias"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/carioca.png"
                        alt="Drogarias Carioca"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/cesar.png"
                        alt="Drogaria César"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/expresso.png"
                        alt="Expressa"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/farma-unica.png"
                        alt="Farma Única"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/povao.png"
                        alt="Drogarias Povão"
                        width={227}
                        height={139}
                      />
                    </div>
                  </div>

                  <div className={`${styles.pharmacy_grid_sm} mb-0`}>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/tamoio.png"
                        alt="Drogarias Tamoio"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/atual.png"
                        alt="Drogaria Atual"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/boa-saude.png"
                        alt="Drogaria Boa Saúde"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/economize.png"
                        alt="Drogaria Economize"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/pague-menos.png"
                        alt="Drogaria Pague Menos"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/ofertao.png"
                        alt="Drogarias Ofertão"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/ultrafarma.png"
                        alt="Drogarias Ultrafarma"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/ultra-popular.png"
                        alt="Drogarias Ultra Popular"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/mundial.png"
                        alt="Drogarias Mundial"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/preco-popular.png"
                        alt="Farmácia Preço Popular"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/farmelhor.png"
                        alt="Drogarias Farmelhor"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/retiro.png"
                        alt="Drogaria Retiro"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/viva-mais.png"
                        alt="Viva Mais Drogarias"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/city-farma.png"
                        alt="City Farma"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/ocean-farma.png"
                        alt="Ocean Farma"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/legitima.png"
                        alt="Drogarias Legítima"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/brasileiras.png"
                        alt="Drogarias Brasileiras"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/droga-news.png"
                        alt="Droga News"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/mais-barato.png"
                        alt="Drogarias Mais Barato"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/farmahall.png"
                        alt="FarmaHall"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/m2.png"
                        alt="M2"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/nova-rede.png"
                        alt="Nova Rede Drogarias"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/carioca.png"
                        alt="Drogarias Carioca"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/cesar.png"
                        alt="Drogaria César"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/expresso.png"
                        alt="Expressa"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/farma-unica.png"
                        alt="Farma Única"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className={styles.pharmacy_card}>
                      <Image
                        src="/pharmacies/povao.png"
                        alt="Drogarias Povão"
                        width={227}
                        height={139}
                      />
                    </div>
                  </div>
                </AccordionContent>
                <div className={styles.farmacias_buttons}>
                  <AccordionTrigger
                    className={`button-viva-outline ${styles.pharmacy_accordion_trigger}`}
                  >
                    {isAccordionOpen ? "Ver menos" : "Ver mais"}
                  </AccordionTrigger>
                  <Link
                    href={
                      process.env.NEXT_PUBLIC_QUERO_FAZER_PARTE_URL as string
                    }
                    target="_blank"
                    className="button-viva-fill"
                  >
                    Quero fazer parte
                  </Link>
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Lab Tests Section */}
        <section
          id="exames"
          className={styles.exames_section}
          ref={(el) => (sectionsRef.current[4] = el)}
        >
          <div className={`container-viva ${styles.exames_container}`}>
            <div className="w-full xl:w-[55%]">
              <div className={styles.exames_content}>
                <div
                  className={`${styles.title_blue_before_yellow} hidden xl:block`}
                >
                  <h2>Desconto em exames Laboratoriais e de Imagem</h2>
                </div>

                <p className="text-viva text-[--text-dark] mb-4">
                  O Viva Sinaf, em parceria com a rede Bronstein, oferece
                  descontos de até 50% em toda a rede de laboratórios da marca.
                </p>

                <p className="text-viva text-[--text-dark] mb-4">
                  A parceria com laboratórios de todo o Brasil permite que os
                  beneficiários do Viva Sinaf tenham acesso a exames de alta
                  qualidade com preços acessíveis.
                </p>

                <Link
                  href={process.env.NEXT_PUBLIC_QUERO_FAZER_PARTE_URL as string}
                  target="_blank"
                  className="button-viva-fill"
                >
                  Quero fazer parte
                </Link>
              </div>
            </div>

            <div className="w-full xl:w-[45%] relative">
              <div className={styles.exames_image_container}>
                <Image
                  src="/lab-exam.png"
                  alt="Exame laboratorial"
                  width={536}
                  height={536}
                  className={styles.exames_image}
                />
              </div>
              <div className="absolute xl:hidden left-[20px] bottom-[30%] w-[calc(100%-40px)] ">
                <div className={styles.title_white_before_yellow}>
                  <h2>Desconto em exames Laboratoriais e de Imagem</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          ref={(el) => (sectionsRef.current[5] = el)}
          className={styles.faq_section}
        >
          <div className="container-viva py-16">
            <div className={styles.title_blue_before_yellow}>
              <h2>Perguntas Frequentes</h2>
            </div>

            <div className={styles.faq_list}>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className={styles.faq_item}>
                  <AccordionTrigger
                    className={`text-viva-xl ${styles.faq_title}`}
                  >
                    Para quem é o Viva Sinaf?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-viva text-[--text-dark]">
                      O Viva Sinaf é destinado aos segurados e dependentes da
                      Sinaf Seguros.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className={styles.faq_item}>
                  <AccordionTrigger
                    className={`text-viva-xl ${styles.faq_title}`}
                  >
                    O que é uma Plataforma de serviços em saúde e qualidade de
                    vida?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-viva text-[--text-dark]">
                      A Plataforma de serviços em saúde e qualidade de vida,
                      como o Viva Sinaf, é um programa que oferece diversos
                      benefícios exclusivos para seus membros.
                    </p>
                    <p className="text-viva text-[--text-dark]">
                      Esses benefícios podem ser usufruídos a qualquer momento
                      com a utilização do aplicativo Viva Sinaf.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className={styles.faq_item}>
                  <AccordionTrigger
                    className={`text-viva-xl ${styles.faq_title}`}
                  >
                    Como envio convite para os meus dependentes?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-viva text-[--text-dark]">
                      Ao se cadastrar no aplicativo, o titular pode enviar o
                      convite aos seus dependentes acessando a área “minha
                      conta” e clicando em “dependentes”.
                    </p>
                    <p className="text-viva text-[--text-dark]">
                      Os dependentes recebem o convite por whatsapp e já podem
                      se cadastrar e acessar o aplicativo.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className={styles.faq_item}>
                  <AccordionTrigger
                    className={`text-viva-xl ${styles.faq_title}`}
                  >
                    Quais benefícios já estão disponíveis no Viva Sinaf?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-viva text-[--text-dark]">
                      Desconto em medicamentos genéricos de até 80% em mais de
                      35 mil farmácias;
                    </p>
                    <p className="text-viva text-[--text-dark]">
                      Desconto em exames laboratoriais e de Imagem de até 50% em
                      toda rede Bronstein;
                    </p>
                    <p className="text-viva text-[--text-dark]">
                      Aconselhamento médico 24h por dia, sete dias por semana,
                      para orientações e dúvidas por médicos especializados sem
                      precisar sair de casa.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className={styles.faq_item}>
                  <AccordionTrigger
                    className={`text-viva-xl ${styles.faq_title}`}
                  >
                    O que é um aconselhamento médico por telefone?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-viva text-[--text-dark]">
                      É uma primeira orientação médica que pode ser realizada
                      nos seguintes casos:
                    </p>
                    <ul className="list-viva">
                      <li>
                        Sempre que tiver dúvidas relacionadas a doenças e
                        sintomas;
                      </li>
                      <li>
                        Quando tiver dúvidas sobre medicações, dosagens e
                        reações adversas;
                      </li>
                      <li>Gestantes podem tirar dúvidas sobre gravidez;</li>
                      <li>
                        Para sanar dúvidas sobre qual especialidade de médico
                        procurar;
                      </li>
                      <li>Quando tiver dúvidas sobre doenças crônicas;</li>
                      <li>
                        Para buscar orientações sobre situações de urgência e
                        emergência médica.
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className={styles.faq_item}>
                  <AccordionTrigger
                    className={`text-viva-xl ${styles.faq_title}`}
                  >
                    Como uso o Viva Sinaf pelo WhatsApp?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-viva text-[--text-dark]">
                      Basta você dar um oi para a Vivi no número{" "}
                      <Link
                        href={process.env.NEXT_PUBLIC_WHATSAPP_URL as string}
                        target="_blank"
                        className="underline"
                      >
                        21 98193 3223
                      </Link>
                      , lembre-se que os serviços do Viva Sinaf através do
                      WhatsApp da Vivi têm funcionalidades limitadas.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className={styles.faq_item}>
                  <AccordionTrigger
                    className={`text-viva-xl ${styles.faq_title}`}
                  >
                    Quem é a Vivi?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-viva text-[--text-dark]">
                      Vivi é nossa agente virtual no WhatsApp que permite que
                      você possa usar alguns dos serviços do Viva Sinaf através
                      deste canal, sem precisar do aplicativo.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className={styles.faq_item}>
                  <AccordionTrigger
                    className={`text-viva-xl ${styles.faq_title}`}
                  >
                    Tive dificuldade em baixar o aplicativo Viva Benefícios. O
                    que posso fazer Como uso os serviços caso meu telefone não
                    seja compatível?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-viva text-[--text-dark]">
                      Regularmente as lojas de aplicativos promovem atualizações
                      nas configurações mínimas dos telefones. Caso quando você
                      for baixar o App, receba a notificação que seu equipamento
                      não é compatível, você poderá usar os serviços acessando a
                      plataforma do Viva Sinaf diretamente da web através do
                      site:{" "}
                      <a href="https://app.vivasinaf.com.br">
                        https://app.vivasinaf.com.br
                      </a>
                      , o site vai se comportar como o aplicativo e você terá
                      acesso a todos os serviços como se estivesse usando o App.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9" className={styles.faq_item}>
                  <AccordionTrigger
                    className={`text-viva-xl ${styles.faq_title}`}
                  >
                    Tentei realizar o primeiro acesso e não consegui, o que
                    posso fazer?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-viva text-[--text-dark]">
                      Pode ser algum problema nos seus dados cadastrais e nesse
                      caso, você pode realizar as devidas correções através da
                      central de atendimento do Viva Sinaf.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-10" className={styles.faq_item}>
                  <AccordionTrigger
                    className={`text-viva-xl ${styles.faq_title}`}
                  >
                    Posso usar os descontos em qualquer farmácia?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-viva text-[--text-dark]">
                      Não em todas. O Viva Sinaf tem uma rede credenciada de
                      mais de 35 mil farmácias. No app ou pela Vivi, nossa
                      assistente virtual, você encontra a lista das farmácias
                      mais perto de você.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-11" className={styles.faq_item}>
                  <AccordionTrigger
                    className={`text-viva-xl ${styles.faq_title}`}
                  >
                    Haverá Carência?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-viva text-[--text-dark]">
                      Não haverá carência. Os dependentes novos podem ser
                      incluídos a qualquer momento, mas só terão cobertura e
                      acesso ao Viva Sinaf no início da vigência do mês
                      seguinte.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-12" className={styles.faq_item}>
                  <AccordionTrigger
                    className={`text-viva-xl ${styles.faq_title}`}
                  >
                    Preciso atualizar meu cadastro, como faço?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-viva text-[--text-dark]">
                      Entre em contato através da nossa central de
                      Relacionamento 0800 704 2190, atendimento de segunda a
                      sexta-feira, das 08h às 19h.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <div className="flex justify-center">
              <Link
                href={process.env.NEXT_PUBLIC_QUERO_FAZER_PARTE_URL as string}
                target="_blank"
                className="button-viva-fill"
              >
                Quero fazer parte
              </Link>
            </div>
          </div>

          {/* Contato */}
          <div className={styles.contato_wrapper}>
            <div className="container-viva">
              <h2 className={styles.contato_title_center}>
                Ficou alguma dúvida?
              </h2>
              <p className={`text-viva ${styles.contato_text_center}`}>
                Se você ainda tem alguma dúvida, fale com nosso suporte.
              </p>
              <div className={styles.contato_buttons}>
                <Link
                  href="#"
                  className="button-viva-outline"
                  onClick={(e) => {
                    if (window.innerWidth < 1280) {
                      // xl breakpoint
                      e.preventDefault();
                      window.location.href = "tel:08007042190";
                    } else {
                      e.preventDefault();
                      setShowContactText(!showContactText);
                    }
                  }}
                >
                  Falar com o Atendimento
                </Link>
                <Link
                  href={process.env.NEXT_PUBLIC_QUERO_FAZER_PARTE_URL as string}
                  target="_blank"
                  className="button-viva-fill"
                >
                  Quero fazer parte
                </Link>
              </div>
              <p
                className={`${styles.contato_info} ${
                  showContactText ? "" : "hidden"
                } font-bold`}
              >
                0800 704 2190
              </p>
              <p
                className={`${styles.contato_info} ${
                  showContactText ? "" : "hidden"
                }`}
              >
                Atendimento disponível de segunda a sexta-feira das 8h às 19h -
                exceto feriados
              </p>
            </div>
          </div>

          {/* Footer */}
          <footer className={styles.footer_wrapper}>
            <div className="container-viva">
              <p className="text-viva text-center">
                VIVA SINAF SISTEMAS DE BENEFÍCIOS S.A. - CNPJ/ME
                17.073.568/0001-35
              </p>
              <div className={styles.footer_links}>
                <a
                  href={process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL as string}
                  className="text-viva underline"
                  target="_blank"
                >
                  Política de Privacidade
                </a>
                <a
                  href={process.env.NEXT_PUBLIC_TERMS_URL as string}
                  className="text-viva underline"
                  target="_blank"
                >
                  Termo de Consentimento para Tratamento de Dados Pessoais
                </a>
              </div>
            </div>
          </footer>
        </section>
      </main>
    </>
  );
}
