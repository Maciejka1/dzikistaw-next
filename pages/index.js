import Head from 'next/head'
import Gallery from '../components/index/gallery'
import Landing from '../components/index/landing'
import ReviewSection from '../components/index/reviewSection'
import Nav from '../components/nav'
import Footer from '../components/footer'
export default function Home() {
  return (
<>
  <Head>
    <link rel="icon" href="/logo-mini.png" />
    <meta name="description" content="Kto z nas nie uwielbia odprężyć się w saunie czy jacuzzi? Specjalnie dla was wkomponowaliśmy te dwie atrakcje w przepiękne otoczenie natury!" />
    <meta name="keywords" content="Dziki staw, sauna, olkusz, wypoczynek, jacuzzi olkusz, sauna olkusz"/>
    <title>Dziki staw - Sauna w Olkuszu</title>
  </Head>
  <Nav/>
  <div className="bg-[#f4f4f4]">
    <main className="max-w-7xl mx-auto p-2">
      <Landing/>
      <ReviewSection/>
      <Gallery/>
    </main>
  </div>
  <Footer/>
</>
  )
}
