'use client';

import Link from 'next/link';

export default function AssinaturaFold8() {
  return (
    <section className="bg-[#F8F8FE] py-[60px] flex justify-center w-full overflow-hidden" id="cta-final">
      {/* Container externo padrão de 1400px */}
      <div className="max-w-[1400px] w-full px-6 lg:px-[48px] flex justify-center">
        
        {/* Frame 6: Container do Card com Degradê (1104px x 439px) */}
        <div 
          className="w-full max-w-[1104px] h-auto rounded-[20px] relative isolate flex flex-col md:flex-row items-center overflow-hidden md:overflow-visible"
          style={{ background: 'linear-gradient(180deg, #E1E9FE 0%, #F8F8FE 100%)' }}
        >
          
          {/* LADO ESQUERDO: Frame 3 (Texto e Botão) */}
          <div className="flex flex-col justify-center items-start gap-4 px-8 py-12 md:px-[60px] md:py-[50px] max-w-full md:max-w-[550px] z-10 w-full">
            <div>
              {/* Badge Recursos (Frame 6) */}
              <div className="flex items-center gap-[10px] text-[#004DFF] mb-3">
                <div className="w-[18px] h-[18px] border-2 border-[#004DFF] rounded-full flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                    <path d="M20 6L9 17 4 12"/>
                  </svg>
                </div>
                <span className="text-[16px] font-medium tracking-[-0.03em]">Recursos</span>
              </div>

              {/* Título e Descrição (Frame 4) */}
              <div className="flex flex-col gap-4">
                <h2 className="text-[28px] md:text-[36px] font-bold text-[#1a1a1a] leading-[1.15] tracking-[-0.03em] max-w-[420px]">
                  Pronto para transformar o RH da sua empresa?
                </h2>
                <p className="text-[#1a1a1a] opacity-70 text-[16px] font-medium leading-[150%] max-w-[420px]">
                  Agende uma demonstração gratuita e veja como o Holerite Digital pode revolucionar seus processos.
                </p>
              </div>

              {/* Botão (Frame 2) */}
              <Link
                href="#contato"
                className="inline-flex items-center justify-center bg-[#004DFF] text-[#F8F8FE] h-[56px] px-[32px] rounded-[90px] font-medium text-[16px] gap-[10px] tracking-[-0.03em] hover:opacity-90 transition-all shadow-xl shadow-blue-200 mt-6"
              >
                Agendar demonstração
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </Link>
            </div>
          </div>

          {/* LADO DIREITO: Imagem (Camada_1) */}
          {/* Ajustada para ficar proporcional à referência */}
          <div className="relative md:absolute right-0 bottom-0 w-full md:w-[550px] h-[280px] md:h-[440px] z-0 pointer-events-none">
            <img 
              src="/mao-smartphone-assinatura.png" 
              alt="Mão segurando smartphone" 
              className="w-full h-full object-contain object-right-bottom drop-shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
}