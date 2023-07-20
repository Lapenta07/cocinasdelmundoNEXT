import BarraNavegacion from './componentes/BarraNavegacion/BarraNavegacion'
import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Cocinas del mundo',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' />
        <title>Cocinas del mundo</title>
        </head>
      <body className={inter.className}>
     
      <header>  
          <BarraNavegacion />
      </header>  
      
        {children}

      
      </body>
    </html>
  )
}
