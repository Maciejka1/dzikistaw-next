import { AnimatePresence } from 'framer-motion'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Head>
        <link rel="icon" href="/logo-mini.png" />
        <meta name="description" content="Kto z nas nie uwielbia odprężyć się w saunie czy jacuzzi? Specjalnie dla was wkomponowaliśmy te dwie atrakcje w przepiękne otoczenie natury!" />
        <meta name="keywords" content="Dziki staw, sauna, olkusz, wypoczynek, jacuzzi olkusz, sauna olkusz"/>
        <title>Dziki staw - Informacje</title>
      </Head>
      <Nav/>
        <Component {...pageProps} />  
      <Footer/>
    </AnimatePresence>
  )
}

export default MyApp
