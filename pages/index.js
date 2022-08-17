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
    <title>Dziki staw - Sauna w Olkuszu</title>
  </Head>

  <div className="bg-[#f4f4f4]">
    <main className="max-w-7xl mx-auto p-2">
      <Landing/>
      <ReviewSection/>
      <Gallery/>
    </main>
  </div>
</>
  )
}
