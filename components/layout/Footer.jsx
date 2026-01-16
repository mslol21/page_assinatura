'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer 
      className="w-full relative overflow-hidden isolate"
      style={{ 
        minHeight: '603px',
        // Gradiente e cor de fundo exatos do Figma
        background: 'linear-gradient(0deg, rgb(0, 0, 0), rgba(0, 0, 0, 0.2)), #262626',
        borderRadius: '40px 40px 0px 0px'
      }}
    >
      {/* Container Mestre para alinhamento vertical com o Header (1400px) */}
      <div className="max-w-[1400px] mx-auto w-full px-[48px] h-full relative min-h-[603px]">
        
        {/* Lado Esquerdo superior: Logo (Top: 57px, Left: 48px) */}
        <div className="absolute top-[57px] left-[48px] z-10">
          <Link href="/" className="flex items-center gap-[10px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/logo-footer.png" 
              alt="Holerite Digital" 
              className="h-[42px] w-auto"
            />
          </Link>
        </div>

        {/* Bloco de Links (Top: 157px, Left: 48px, Gap: 42px) */}
        <div className="absolute top-[157px] left-[48px] flex flex-row gap-[42px] z-10">
          <div className="flex flex-col gap-[14px]">
            {['Home', 'Como Funciona', 'Benefícios', 'Preços', 'FAQ', 'Páginas'].map((item) => (
              <Link key={item} href={`#${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-[#F8F8FE] opacity-70 text-[16px] font-semibold tracking-[-0.03em] hover:opacity-100 transition-opacity">
                {item}
              </Link>
            ))}
          </div>

          <div className="flex flex-col">
            <span className="text-[#F8F8FE] text-[16px] font-semibold tracking-[-0.03em] mb-[18px]">Comparação de tempo</span>
            <div className="flex flex-col gap-[14px] opacity-70">
              {['Tempo', 'Como Funciona', 'Benefícios', 'Preços', 'FAQ'].map((item) => (
                <Link key={item} href="#" className="text-[#F8F8FE] text-[16px] font-semibold tracking-[-0.03em] hover:text-white transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <span className="text-[#F8F8FE] text-[16px] font-semibold tracking-[-0.03em] mb-[18px]">Assinatura Eletrônica</span>
            <div className="flex flex-col gap-[14px] opacity-70">
              {['Tempo', 'Como Funciona', 'Benefícios', 'Preços', 'FAQ'].map((item) => (
                <Link key={item} href="#" className="text-[#F8F8FE] text-[16px] font-semibold tracking-[-0.03em] hover:text-white transition-colors">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Lado Direito superior: Contato (Top: 157px, Right: 48px) */}
        <div className="absolute top-[157px] right-[48px] flex flex-col gap-[20px] items-end text-right z-10">
          <div className="flex flex-col gap-[10px]">
            <span className="text-[#F8F8FE] text-[16px] font-semibold tracking-[-0.03em]">Nos mande uma mensagem:</span>
            <span className="text-[#F8F8FE] text-[16px] font-semibold tracking-[-0.03em] opacity-70">Whatsapp : (48) 3199-6818</span>
          </div>
          <div className="flex flex-col gap-[10px]">
            <span className="text-[#F8F8FE] text-[16px] font-semibold tracking-[-0.03em]">Visite nosso instagram:</span>
            <span className="text-[#F8F8FE] text-[16px] font-semibold tracking-[-0.03em] opacity-70">@holerite.digital</span>
          </div>
        </div>

        {/* Copyright (Top: 403px, Right: 48px) */}
        <div className="absolute top-[403px] right-[48px] z-10">
          <p className="text-[#F8F8FE] text-[16px] font-semibold tracking-[-0.03em]">
            © 2025 Holerite Digital. Todos os direitos reservados.
          </p>
        </div>

        {/* MARCA D'ÁGUA - Group 25 (Texto gigante ao fundo) */}
        {/* Usamos o posicionamento absolute para ocupar toda a largura */}
        <div 
          className="absolute top-[443px] left-0 w-full pointer-events-none select-none z-0 flex"
          style={{ height: '160.43px' }}
        >
          <span 
            className="text-[170px] font-bold leading-none tracking-tighter whitespace-nowrap w-full text-center"
            style={{ 
              color: '#1F1F1F', // Cor do vetor (mais escura que o fundo #262626)
              fontFamily: 'Standerd, sans-serif',
              fontSize: 'clamp(100px, 14vw, 170px)', // Ajusta o tamanho conforme a tela
              transform: 'scaleX(1.1)', // Estica levemente para ocupar as bordas como no Figma
              transformOrigin: 'center'
            }}
          >
            Holerite digital
          </span>
        </div>
        
      </div>
    </footer>
  );
}