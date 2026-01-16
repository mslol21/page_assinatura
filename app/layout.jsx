import './globals.css'

export const metadata = {
  title: 'Assinatura Digital - Holerite Digital',
  description: 'Modernize a gestão de holerites com assinatura digital válida juridicamente. Segurança, praticidade e conformidade com a legislação trabalhista.',
  keywords: 'assinatura digital, holerite digital, gestão de folha de pagamento, RH digital, assinatura eletrônica',
  authors: [{ name: 'Holerite Digital' }],
  openGraph: {
    title: 'Assinatura Digital - Holerite Digital',
    description: 'Modernize a gestão de holerites com assinatura digital válida juridicamente.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  )
}
