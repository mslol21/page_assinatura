# Página de Assinatura Digital - Holerite Digital

Este pacote contém todos os arquivos necessários para a página de Assinatura Digital.

## Estrutura de Arquivos

```
export-assinatura/
├── page.jsx                          # Página principal de assinatura
├── components/
│   ├── assinatura/
│   │   ├── HeroAssinatura.jsx       # Hero section
│   │   ├── AssinaturaFold1.jsx      # Seção de benefícios
│   │   ├── AssinaturaFold2.jsx      # Como funciona
│   │   ├── AssinaturaFold3.jsx      # Comparativo
│   │   ├── AssinaturaFold4.jsx      # Depoimentos
│   │   ├── AssinaturaFold5.jsx      # Investimento/Pricing
│   │   ├── AssinaturaFold6.jsx      # FAQ
│   │   └── AssinaturaFold7.jsx      # CTA Final
│   ├── layout/
│   │   ├── Header.jsx               # Cabeçalho
│   │   └── Footer.jsx               # Rodapé
│   └── ui/
│       └── ScrollAnimation.jsx      # Componente de animação
└── public/
    ├── logo.png                     # Logo principal
    ├── logo-footer.png              # Logo do footer
    ├── hero-assinatura.png          # Imagem do hero
    ├── assinatura-rubrica.png       # Ícone de rubrica
    ├── mockup-importacao.png        # Step 1 - Dashboard
    ├── step1-toggle.png             # Step 1 - Toggle
    ├── step2-whatsapp.png           # Step 2 - WhatsApp
    ├── step2-assinar.png            # Step 2 - Modal
    ├── step3-auditoria.png          # Step 3 - Auditoria
    ├── step3-obrigado.png           # Step 3 - Confirmação
    ├── mao-smartphone-assinatura.png # CTA - Mão com celular
    ├── watermark-holerite.png       # Marca d'água "Holerite"
    └── watermark-digital.png        # Marca d'água "digital"
```

## Componentes da Página

### 1. **HeroAssinatura**
- Hero section com título, descrição e CTA
- Imagem de destaque

### 2. **AssinaturaFold1** - Benefícios
- Cards de benefícios da assinatura digital
- Layout em grid responsivo

### 3. **AssinaturaFold2** - Como Funciona
- 3 passos do processo
- Imagens ilustrativas de cada etapa
- Layout sticky com texto à direita

### 4. **AssinaturaFold3** - Comparativo
- Comparação entre métodos tradicionais e digital
- Tabela de comparação

### 5. **AssinaturaFold4** - Depoimentos
- Cards de depoimentos de clientes
- Fundo escuro com efeito de glow azul

### 6. **AssinaturaFold5** - Investimento
- 3 planos de preços (Start, Profissional, Empresarial)
- Cards com destaque para o plano mais vendido

### 7. **AssinaturaFold6** - FAQ
- Accordion com perguntas frequentes
- Hover para expandir respostas
- Texto sticky à esquerda

### 8. **AssinaturaFold7** - CTA Final
- Call-to-action final
- Botão de agendamento de demonstração
- Imagem de mão com smartphone

## Dependências

### Componentes Compartilhados
- **Header**: Cabeçalho com navegação
- **Footer**: Rodapé com links e informações de contato
- **ScrollAnimation**: Componente de animação (removido da maioria das seções)

### Tecnologias
- Next.js (App Router)
- React
- Tailwind CSS
- Framer Motion (para ScrollAnimation)

## Integração

Para integrar esta página em um projeto Next.js:

1. Copie a pasta `components` para o diretório `components` do seu projeto
2. Copie as imagens da pasta `public` para o diretório `public` do seu projeto
3. Copie o arquivo `page.jsx` para `app/assinatura/page.jsx`
4. Certifique-se de que o Tailwind CSS está configurado
5. Instale as dependências necessárias:
   ```bash
   npm install framer-motion
   ```

## Notas Importantes

- **Animações de Scroll**: Foram removidas da maioria das seções conforme solicitado
- **Responsividade**: Todos os componentes são totalmente responsivos
- **Imagens**: Todas as imagens necessárias estão incluídas na pasta `public`
- **Cores**: Paleta de cores consistente com #004DFF (azul principal)
- **Tipografia**: Usa a fonte padrão do sistema com pesos variados

## Customização

### Cores Principais
- Azul Principal: `#004DFF`
- Fundo Claro: `#F8F8FE`
- Fundo Escuro: `#262626`
- Texto: `#1a1a1a`

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Contato

Para dúvidas ou suporte:
- WhatsApp: (48) 3199-6818
- Instagram: @holerite.digital

---

© 2025 Holerite Digital. Todos os direitos reservados.
