"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from './components/Header';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const navigationRef = useRef<HTMLDivElement>(null);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [showContactText, setShowContactText] = useState(false);

  useEffect(() => {
    // Smooth scroll to section when clicking navigation dots or menu links
    const handleNavClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const sectionId = target.getAttribute('data-section');
      if (sectionId) {
        e.preventDefault();
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Add FAQ animation handlers
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
      item.addEventListener('click', (e) => {
        const details = e.currentTarget as HTMLDetailsElement;
        const content = details.querySelector('p');
        
        if (!content) return;

        // If closing
        if (details.open) {
          e.preventDefault();
          content.style.maxHeight = '0';
          content.style.opacity = '0';
          content.style.padding = '1rem 2rem 0 0';
          
          setTimeout(() => {
            details.open = false;
          }, 300); // Match transition duration
        }
        // If opening
        else {
          content.style.maxHeight = '500px';
          content.style.opacity = '1';
          content.style.padding = '1rem 2rem 1rem 0';
        }
      });
    });

    // createNavigation();

    return () => {
      // observer.disconnect();
      navigationRef.current?.removeEventListener('click', handleNavClick);
      
      // Cleanup FAQ listeners
      faqItems.forEach(item => {
        item.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <>
      <main className="snap-y snap-mandatory h-[calc(100vh-var(--header-height))] overflow-y-auto relative mt-[--header-height]">
        <Header />       
        {/* Hero Section */}
        <section
          id="inicio"
          ref={(el) => (sectionsRef.current[0] = el)}
          className="section hero-section"
        >
          <div className="container flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 space-y-6">          
              <h1 className="title-white before-title-yellow">O Viva chegou para você!</h1>
              <p className="description text-white">
                Parabéns! Você foi convidado para fazer parte de um clube de vantagens
                em medicamentos, exames e acompanhamento médico por telefone.
              </p>
              <p className="description text-white">
                Clique no botão de loja compatível com seu celular e baixe o app!*
              </p>
              <div className="flex-base">
                <Link href={process.env.NEXT_PUBLIC_PLAY_STORE_URL as string} target='_blank'>
                  <Image
                    src="/google-play.png"
                    alt="Disponível no Google Play"
                    width={207}
                    height={60}
                  />
                </Link>
                <Link href={process.env.NEXT_PUBLIC_APP_STORE_URL as string} target='_blank'>
                  <Image
                    src="/app-store.png"
                    alt="Baixar na App Store"
                    width={207}
                    height={60}
                  />
                </Link>
              </div>              
              <p className="text-white">
              *Produto exclusivo para segurados da Sinaf Seguros
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/app-preview.png"
                alt="Preview do aplicativo"
                width={489}
                height={450}
              />
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section
          id="como-funciona"
          ref={(el) => (sectionsRef.current[1] = el)}
          className="section steps-section"
        >
          <div className="container">
            <h2 className="title-blue before-title-gray">
              Veja como é fácil fazer parte do Viva!
            </h2>
            <p className="description text-[--text-dark]">
              Siga o passo-a-passo e comece a aproveitar os seus benefícios. É muito simples de usar!
            </p>
            <p className="description text-[--text-dark]">
              Faça o download clicando no botão Google play para celulares Android ou na Apple para celulares Iphone.
            </p>
            <div className="store-badges">
              <Link href={process.env.NEXT_PUBLIC_PLAY_STORE_URL as string} className="hover:opacity-90 transition-opacity" target='_blank'>
                <Image
                  src="/google-play-badge.png"
                  alt="Disponível no Google Play"
                  width={180}
                  height={53}
                  className="h-auto"
                />
              </Link>
              <Link href={process.env.NEXT_PUBLIC_APP_STORE_URL as string} className="hover:opacity-90 transition-opacity" target='_blank' >
                <Image
                  src="/app-store-badge.png"
                  alt="Baixar na App Store"
                  width={180}
                  height={53}
                  className="h-auto"
                />
              </Link>
            </div>
            
            <div className="app-steps">
              <div className="step-item">
                <Image
                  src="/step-1.png"
                  alt="Passo 1"
                  width={204}
                  height={494}
                  className="step-image"
                />
                <p className="description text-[--text-dark]">
                  Preencha seus dados para acessar e siga o passo a passo.
                </p>
              </div>
              
              <div className="step-item">
                <Image
                  src="/step-2.png"
                  alt="Passo 2"
                  width={204}
                  height={494}
                  className="step-image"
                />
                <p className="description text-[--text-dark]">
                  Caso não tenha cadastro, informe sua data de nascimento.
                </p>
              </div>
              
              <div className="step-item">
                <Image
                  src="/step-3.png"
                  alt="Passo 3"
                  width={204}
                  height={494}
                  className="step-image"
                />
                <p className="description text-[--text-dark]">
                  Confirme se o telefone está correto para recebimento do Código de Acesso.
                </p>
              </div>
              
              <div className="step-item">
                <Image
                  src="/step-4.png"
                  alt="Passo 4"
                  width={204}
                  height={494}
                  className="step-image"
                />
                <p className="description text-[--text-dark]">
                  Para sua segurança, valide o Código de Acesso e continue para senha.
                </p>
              </div>
              
              <div className="step-item">
                <Image
                  src="/step-5.png"
                  alt="Passo 5"
                  width={204}
                  height={494}
                  className="step-image"
                />
                <p className="description text-[--text-dark]">  
                  Crie sua senha, finalize o cadastro na plataforma e aproveite os benefícios.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Alô Doutor Section */}
        <section
          id="alo-doutor"
          ref={(el) => (sectionsRef.current[2] = el)}
          className="section alo-doutor-section "
        >
          <div className="container flex flex-col md:flex-row items-start gap-8 xl:gap-16">
            <div className="md:w-[45%]">
              <Image
                src="/doctor.png"
                alt="Médico sorrindo"
                width={536}
                height={536}
                className="alo-doutor-image w-full"
              />
            </div>
            <div className="md:w-[55%]">
              <div className="title-blue before-title-yellow">
                  <h2>Alô Doutor</h2>
                  <h2>Teleatendimento Viva Sinaf</h2>
              </div>
              
              <p className="description text-[--text-dark]">
                O serviço de teleatendimento do Viva Sinaf é uma ferramenta importante para os
                clientes que precisam de orientação médica do dia-a-dia.
              </p>

              <p className="description text-[--text-dark]">
                Funciona 24 horas por dia, 7 dias da semana e é oferecido. No teleatendimento
                do Viva Sinaf você é atendido por médicos especializados que poderão melhor
                orientar o que deve ser feito. Você pode usar nas seguintes situações:
              </p>

              <ul className="alo-doutor-list">
                <li>Sempre que tiver dúvidas relacionadas a doenças e sintomas</li>
                <li>Em caso de dúvidas sobre medicamentos, dosagens e reações adversas</li>
                <li>Dúvidas sobre gravidez</li>
                <li>Orientações sobre a médico de que especialidade procurar</li>
                <li>Informações sobre doenças crônicas</li>
                <li>Instruções em casos de urgência ou emergência médica</li>
              </ul>

              <Link 
                  href="#como-funciona" 
                  className="button-fill">
                  Quero fazer parte
                </Link>
            </div>
          </div>
        </section>

        {/* Pharmacies Section */}
        <section
          id="farmacias"
          ref={(el) => (sectionsRef.current[3] = el)}
          className="section farmacias-section "
        >
          <div className="container">
            <div className="title-blue before-title-yellow">
              <h2>Descontos em Medicamentos Genéricos</h2>
            </div>
            
            <p className="description text-[--text-dark]">
              O Viva Sinaf tem parceria com redes de farmácias de todo o Brasil. São descontos de até 80% em mais de 35 mil farmácias.
            </p>
            <p className="description text-[--text-dark]">
              Essa é uma ótima solução para quem precisa economizar em medicamentos sem abrir mão da qualidade.
            </p>

            <div className="pharmacy-grid initial">
              <div className="pharmacy-card">
                <Image
                  src="/pharmacies/pacheco.png"
                  alt="Drogarias Pacheco"
                  width={227}
                  height={139}
                />
              </div>
              <div className="pharmacy-card">
                <Image
                  src="/pharmacies/max.png"
                  alt="Drogarias Max"
                  width={227}
                  height={139}
                />
              </div>
              <div className="pharmacy-card">
                <Image
                  src="/pharmacies/cristal.png"
                  alt="Drogaria Cristal"
                  width={227}
                  height={139}
                />
              </div>
              <div className="pharmacy-card">
                <Image
                  src="/pharmacies/tamoio.png"
                  alt="Drogarias Tamoio"
                  width={227}
                  height={139}
                />
              </div>


              
              <div className="pharmacy-card-md">
                <Image
                  src="/pharmacies/atual.png"
                  alt="Drogaria Atual"
                  width={227}
                  height={139}
                />
              </div>
              <div className="pharmacy-card-md">
                <Image
                  src="/pharmacies/boa-saude.png"
                  alt="Drogaria Boa Saúde"
                  width={227}
                  height={139}
                />
              </div>
              <div className="pharmacy-card-lg"> 
                <Image
                  src="/pharmacies/economize.png"
                  alt="Drogaria Economize"
                  width={227}
                  height={139}
                />
              </div>
              <div className="pharmacy-card-lg">
                <Image
                  src="/pharmacies/pague-menos.png"
                  alt="Drogaria Pague Menos"
                  width={227}
                  height={139}
                />
              </div>
              <div className="pharmacy-card-xl">
                <Image
                  src="/pharmacies/ofertao.png"
                  alt="Drogarias Ofertão"
                  width={227}
                  height={139}
                />
              </div>
              <div className="pharmacy-card-xl">
                <Image
                  src="/pharmacies/ultrafarma.png"
                  alt="Drogarias Ultrafarma"
                  width={227}
                  height={139}
                />
              </div>
            </div>

            <Accordion 
              type="single" 
              collapsible 
              className="w-full"
              onValueChange={(value) => setIsAccordionOpen(value === "more-pharmacies")}
            >
              <AccordionItem value="more-pharmacies" className="border-none">
                <AccordionContent>
                  <div className="pharmacy-grid additional">  
                  <div className="pharmacy-card-additional-md">
                    <Image
                      src="/pharmacies/atual.png"
                      alt="Drogaria Atual"
                      width={227}
                      height={139}
                    />
                  </div>
                  <div className="pharmacy-card-additional-md">
                    <Image
                      src="/pharmacies/boa-saude.png"
                      alt="Drogaria Boa Saúde"
                      width={227}
                      height={139}
                    />
                  </div>
                  <div className="pharmacy-card-additional-lg"> 
                    <Image
                      src="/pharmacies/economize.png"
                      alt="Drogaria Economize"
                      width={227}
                      height={139}
                    />
                  </div>
                  <div className="pharmacy-card-additional-lg">
                    <Image
                      src="/pharmacies/pague-menos.png"
                      alt="Drogaria Pague Menos"
                      width={227}
                      height={139}
                    />
                  </div>
                  <div className="pharmacy-card-additional-xl">
                    <Image
                      src="/pharmacies/ofertao.png"
                      alt="Drogarias Ofertão"
                      width={227}
                      height={139}
                    />
                  </div>
                  <div className="pharmacy-card-additional-xl">
                    <Image
                      src="/pharmacies/ultrafarma.png"
                      alt="Drogarias Ultrafarma"
                      width={227}
                      height={139}
                    />
                  </div>
                  <div className="pharmacy-card">
                      <Image
                        src="/pharmacies/ultra-popular.png"
                        alt="Drogarias Ultra Popular"
                        width={227}
                        height={139}
                      />
                    </div>           
                    <div className="pharmacy-card">
                      <Image
                        src="/pharmacies/mundial.png"
                        alt="Drogarias Mundial"
                        width={227}
                        height={139}
                      />
                    </div>           
                    <div className="pharmacy-card">
                      <Image
                        src="/pharmacies/preco-popular.png"
                        alt="Farmácia Preço Popular"
                        width={227}
                        height={139}
                      />
                    </div>           
                    <div className="pharmacy-card">
                      <Image
                        src="/pharmacies/farmelhor.png"
                        alt="Drogarias Farmelhor"
                        width={227}
                        height={139}
                      />
                    </div>           
                    <div className="pharmacy-card">
                      <Image
                        src="/pharmacies/retiro.png"
                        alt="Drogaria Retiro"
                        width={227}
                        height={139}
                      />
                    </div>           
                    <div className="pharmacy-card">
                      <Image
                        src="/pharmacies/viva-mais.png"
                        alt="Viva Mais Drogarias"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className="pharmacy-card">
                      <Image
                        src="/pharmacies/city-farma.png"
                        alt="City Farma"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className="pharmacy-card">
                      <Image
                        src="/pharmacies/ocean-farma.png"
                        alt="Ocean Farma"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className="pharmacy-card">
                      <Image
                        src="/pharmacies/legitima.png"
                        alt="Drogarias Legítima"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className="pharmacy-card">
                      <Image
                        src="/pharmacies/brasileiras.png"
                        alt="Drogarias Brasileiras"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className="pharmacy-card">
                      <Image
                        src="/pharmacies/droga-news.png"
                        alt="Droga News"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className="pharmacy-card">
                      <Image
                        src="/pharmacies/mais-barato.png"
                        alt="Drogarias Mais Barato"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className="pharmacy-card">
                      <Image
                        src="/pharmacies/farmahall.png"
                        alt="FarmaHall"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className="pharmacy-card">
                      <Image
                        src="/pharmacies/m2.png"
                        alt="M2"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className="pharmacy-card">
                      <Image
                        src="/pharmacies/nova-rede.png"
                        alt="Nova Rede Drogarias"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className="pharmacy-card">
                      <Image
                        src="/pharmacies/carioca.png"
                        alt="Drogarias Carioca"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className="pharmacy-card">
                      <Image
                        src="/pharmacies/cesar.png"
                        alt="Drogaria César"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className="pharmacy-card">
                      <Image
                        src="/pharmacies/expresso.png"
                        alt="Expressa"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className="pharmacy-card">
                      <Image
                        src="/pharmacies/farma-unica.png"
                        alt="Farma Única"
                        width={227}
                        height={139}
                      />
                    </div>
                    <div className="pharmacy-card">
                      <Image
                        src="/pharmacies/povao.png"
                        alt="Drogarias Povão"
                        width={227}
                        height={139}
                      />
                    </div>
                  </div>
                </AccordionContent>
                <div className="farmacias-buttons">
                  <AccordionTrigger className="button-primary button-outline pharmacy-accordion-trigger">
                    {isAccordionOpen ? "Ver menos" : "Ver mais"}
                  </AccordionTrigger>
                  <Link 
                    href="#como-funciona" 
                    className="button-fill">
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
          ref={(el) => (sectionsRef.current[4] = el)}
          className="section exames-section "
        >
          <div className="container flex flex-col flex-col-reverse md:flex-row items-start gap-1">
            <div className="md:w-[55%]">
              <div className="exames-content">
                <div className="title-blue before-title-yellow">                  
                    <h2>Desconto em exames</h2>
                    <h2>Laboratoriais e de Imagem</h2>                  
                </div>
                
                <p className="description text-[--text-dark]">
                  O Viva Sinaf, em parceria com a rede Bronstein, oferece descontos de até 50% em
                  toda a rede de laboratórios da marca.
                </p>

                <p className="description text-[--text-dark]">
                  A parceria com laboratórios de todo o Brasil permite que os beneficiários do Viva
                  Sinaf tenham acesso a exames de alta qualidade com preços acessíveis.
                </p>

                <Link 
                  href="#como-funciona" 
                  className="button-fill">
                  Quero fazer parte
                </Link>
              </div>
            </div>

            <div className="md:w-[45%]">
              <div className="exames-image-container">
                <Image
                  src="/lab-exam.png"
                  alt="Exame laboratorial"
                  width={536}
                  height={536}
                  className="exames-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          ref={(el) => (sectionsRef.current[5] = el)}
          className="section flex-col faq-section "
        >
          <div className="container">
            <div className="title-blue before-title-yellow">
              <h2>Perguntas Frequentes</h2>
            </div>
            
            <div className="faq-list">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="faq-item">
                  <AccordionTrigger>Para quem é o Viva Sinaf?</AccordionTrigger>
                  <AccordionContent>
                    Adipiscing ac lacus vel sed sed sed tincidunt at. Laoreet consequat donec id fermentum. Metus, tortor tellus ornare mauris, convallis quis. Tristique vulputate enim, vitae sodales nis! enim est. Ut diam volutpat, enim convallis. Pulvinar posuere gravida vitae fringilla eu tellus neque est feugiat.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="faq-item">
                  <AccordionTrigger>
                    Alguma coisa relacionada ao acesso do conjugue e dependente (Tem direito e você pode convidar)
                  </AccordionTrigger>
                  <AccordionContent>
                    Adipiscing ac lacus vel sed sed sed tincidunt at. Laoreet consequat donec id fermentum. Metus, tortor tellus ornare mauris, convallis quis. Tristique vulputate enim, vitae sodales nis! enim est. Ut diam volutpat, enim convallis. Pulvinar posuere gravida vitae fringilla eu tellus neque est feugiat.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="faq-item">
                  <AccordionTrigger>
                    Varius ultricies molestie tellus fermentum, viverra ipsum scelerisque etiam lorem?
                  </AccordionTrigger>
                  <AccordionContent>
                    Adipiscing ac lacus vel sed sed sed tincidunt at. Laoreet consequat donec id fermentum. Metus, tortor tellus ornare mauris, convallis quis.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="faq-item">
                  <AccordionTrigger>
                    Nulla etiam vitae, at sagittis, nibh ultrices mattis feugiat faucibus?
                  </AccordionTrigger>
                  <AccordionContent>
                    Adipiscing ac lacus vel sed sed sed tincidunt at. Laoreet consequat donec id fermentum. Metus, tortor tellus ornare mauris, convallis quis.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="faq-item">
                  <AccordionTrigger>
                    Sagittis consectetur gravida nec turpis eros, id sit et, dictum?
                  </AccordionTrigger>
                  <AccordionContent>
                    Adipiscing ac lacus vel sed sed sed tincidunt at. Laoreet consequat donec id fermentum. Metus, tortor tellus ornare mauris, convallis quis.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <Link 
                  href="#como-funciona" 
                  className="button-fill">
                  Quero fazer parte
                </Link>
          </div>

          {/* Contato */}       
          <div className="contato-wrapper">
            <div className="container">
              <h2 className="title-blue text-center pr-6">Ficou alguma dúvida?</h2>
              <p className="description text-[--text-dark] text-center">Se você ainda tem alguma dúvida, fale com nosso suporte.</p>
              <div className="contato-buttons">
                <Link 
                  href="#" 
                  className="button-outline"
                  onClick={(e) => {
                    if (window.innerWidth < 1280) { // xl breakpoint
                      e.preventDefault();
                      window.location.href = 'tel:08007029930';
                    } else {
                      e.preventDefault();
                      setShowContactText(!showContactText);
                    }
                  }}
                >
                  Falar com o Atendimento
                </Link>
                <Link 
                  href="#como-funciona" 
                  className="button-fill">
                  Quero fazer parte
                </Link>
              </div>
              <p className={`text-xl font-bold text-[--text-dark] text-center mt-4 transition-opacity duration-300 ${showContactText ? '' : 'hidden'}`}>
              0800 702 9930
              </p>
              <p className={`text-[--text-dark] text-center mt-4 transition-opacity duration-300 ${showContactText ? '' : 'hidden'}`}>
                Atendimento disponível de segunda a sexta feira das 8h às 19h - exceto feriados
              </p>
            </div>
          </div>   
          
          {/* Footer */}       
          <footer className="footer-wrapper">
            <div className="container">
              <p className="footer-company">
                VIVA SINAF SISTEMAS DE BENEFÍCIOS S.A. - CNPJ/ME 17.073.568/0001-35
              </p>
              <div className="footer-links">
                <a 
                  href="mailto:atendimento.vivasinaf@vivasinaf.com.br" 
                  className="footer-link">
                  atendimento.vivasinaf@vivasinaf.com.br
                </a>
                <a 
                  href="/politica-de-privacidade" 
                  className="footer-link">
                  Política de Privacidade
                </a>
                <a 
                  href="/termo-de-consentimento" 
                  className="footer-link">
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