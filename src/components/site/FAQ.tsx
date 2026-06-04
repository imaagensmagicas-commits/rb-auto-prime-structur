import { SectionHeading } from "./SectionHeading";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Como funciona o rastreamento?",
    answer: "Utilizamos equipamentos GPS de alta precisão que transmitem a localização do seu veículo via satélite e GPRS. Você acessa essas informações em tempo real através do nosso aplicativo ou plataforma web."
  },
  {
    question: "Posso acompanhar pelo celular?",
    answer: "Sim! Oferecemos um aplicativo intuitivo para Android e iOS onde você pode monitorar a localização, ver históricos de rotas, receber alertas e até realizar o bloqueio remoto do veículo."
  },
  {
    question: "O sistema funciona 24 horas?",
    answer: "Com certeza. Tanto o sistema de rastreamento quanto nossa central de monitoramento operam 24 horas por dia, 7 dias por semana, garantindo proteção ininterrupta."
  },
  {
    question: "Como solicitar a instalação?",
    answer: "É simples: basta clicar em qualquer botão de 'Solicitar Orçamento' ou entrar em contato via WhatsApp. Agendamos a instalação em local e horário de sua preferência com nossa equipe técnica."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Dúvidas Frequentes"
          title="Tire suas dúvidas"
          description="Tire suas dúvidas sobre o serviço de proteção da RB Rastreamento Veicular."
        />
        
        <div className="mt-20 space-y-4 animate-fade-up">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="glass-card rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-display text-lg font-bold text-foreground">{faq.question}</span>
                {openIndex === idx ? (
                  <Minus className="h-5 w-5 text-neon shrink-0" />
                ) : (
                  <Plus className="h-5 w-5 text-neon shrink-0" />
                )}
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
