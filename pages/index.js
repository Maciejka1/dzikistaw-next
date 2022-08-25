import Head from 'next/head'
import Gallery from '../components/index/gallery'
import Landing from '../components/index/landing'
import ReviewSection from '../components/index/reviewSection'
import { motion } from 'framer-motion'
export default function Home() {
  return (
<>
  <Head>
    <title>Dziki staw - Sauna w Olkuszu</title>
  </Head>

  <div className="bg-[#f4f4f4] text-xl">
    <motion.main className="max-w-7xl mx-auto p-2"
        initial={{opacity: 0}}
        animate={{opacity: 1, transition: {duration: 2}}}
        exit={{opacity: 0}}
    >
      <Landing/>
      <ReviewSection/>
      <Gallery/>
    </motion.main>
  </div>
</>
  )
}
