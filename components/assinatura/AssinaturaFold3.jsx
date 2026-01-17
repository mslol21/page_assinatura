'use client';

import Link from 'next/link';

export default function AssinaturaFold4() {
  return (
    <section 
      /* z-index baixo para não sobrepor o conteúdo da próxima seção */
      className="flex justify-center w-full min-h-[800px] relative overflow-hidden pt-[80px] pb-0 z-0"
      style={{
        background: 'radial-gradient(90.16% 76.4% at 50% 63.14%, #FFFFFF 0%, #B2C9FF 100%)'
      }}
    >
      <div className="max-w-[1400px] w-full px-[48px] md:px-[142px] flex flex-col items-center">
        
        {/* Frame 158: Bloco de Texto */}
        <div className="max-w-[648px] w-full flex flex-col items-center text-center gap-5 z-10 mb-16">
          <div className="flex items-center justify-center gap-2 text-[#004DFF] mb-2 font-semibold text-[16px]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            Chega de burocracia
          </div>

          <h2 className="text-[44px] md:text-[52px] font-bold text-[#1a1a1a] leading-[1.1] tracking-[-0.03em] mb-4">
            Transforme seus processos hoje mesmo
          </h2>
          
          <p className="text-[#1a1a1a] opacity-70 text-[18px] md:text-[20px] font-medium leading-[150%] mb-8 max-w-[580px]">
            Não perca mais tempo com processos manuais. Experimente grátis e veja a diferença já no primeiro envio.
          </p>

          <Link
            href="#contato"
            className="inline-flex items-center justify-center bg-[#004DFF] text-[#F8F8FE] h-[56px] px-[32px] rounded-[90px] font-medium text-[16px] gap-[10px] hover:opacity-90 transition-all shadow-xl shadow-blue-200"
          >
            Fale Conosco
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </Link>
        </div>

        {/* Imagem dos Smartphones - Cortada para mostrar apenas os dispositivos */}
        <div className="relative w-full max-w-[750px] h-[400px] mt-auto overflow-hidden">
          <img 
            src="/ativo-smartphones.png" 
            alt="Visualização do Holerite Digital em smartphones" 
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}