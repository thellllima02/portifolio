import styles from "./styles.module.css";
import {Header} from "../components/header";
import {Footer} from "../components/footer";


//As metadas auxilia a ferramenta de busca do google
export const metadata = {
  title: 'Portifolio',
  description: 'Apreendendo e desenvolvendo um portifolio no Next.js', 
  openGraph: {
    title: 'Portifolio',
    description: 'Projeto criado para divulgação de trabalhos, software etc. Apreendendo e desenvolvendo um portifolio no Next.js',
  },
  robots:{
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    }
  }
}

export default function Layout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/img/favicon.ico" type="image/x-icon" />
      </head>
      <body className={styles.body}>
        <div className={styles.container}>
          
          <Header />

          <main>{children}</main>

          <Footer label="© 2025 - Meu Site - Made by Hércules"/>
        </div>
      </body>
    </html>
  );
}
