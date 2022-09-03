import { AnimatePresence } from 'framer-motion'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Nav />
      <Head>
        <link rel="icon" href="/logo-mini.png" />
        <meta name="description" content="Kto z nas nie uwielbia odprężyć się w saunie czy jacuzzi? Specjalnie dla was wkomponowaliśmy te dwie atrakcje w przepiękne otoczenie natury!" />
        <meta name="keywords" content="Dziki staw, sauna, olkusz, wypoczynek, jacuzzi olkusz, sauna olkusz"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap" rel="stylesheet"/> 
      </Head>
      <AnimatePresence mode="wait">
          <Component {...pageProps} key={router.route} />  
      </AnimatePresence>
      <Footer/>
    </>
  )
}

export default MyApp
