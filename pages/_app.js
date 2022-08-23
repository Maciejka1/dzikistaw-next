import { AnimatePresence } from 'framer-motion'
import Nav from '../components/nav'
import Footer from '../components/footer'
import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence mode="wait">
      <Head>
        <link rel="icon" href="/logo-mini.png" />
        <meta name="description" content="Kto z nas nie uwielbia odprężyć się w saunie czy jacuzzi? Specjalnie dla was wkomponowaliśmy te dwie atrakcje w przepiękne otoczenie natury!" />
        <meta name="keywords" content="Dziki staw, sauna, olkusz, wypoczynek, jacuzzi olkusz, sauna olkusz"/>
      </Head>
      <Nav key={router.route + " nav"}/>
        <Component {...pageProps} key={router.route} />  
      <Footer key={router.route + " footer"} />
    </AnimatePresence>
  )
}

export default MyApp
