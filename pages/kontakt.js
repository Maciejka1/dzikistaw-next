import Head from 'next/head'
import React from 'react'
import Nav from '../components/nav'
import Footer from '../components/footer'
import OpeningTime from '../components/kontakt/openingTime'
export default function Cennik() {
return(
<>
    <Head>
        <link rel="icon" href="/logo-mini.png" />
        <meta name="description" content="Kto z nas nie uwielbia odprężyć się w saunie czy jacuzzi? Specjalnie dla was wkomponowaliśmy te dwie atrakcje w przepiękne otoczenie natury!" />
        <meta name="keywords" content="Dziki staw, sauna, olkusz, wypoczynek, jacuzzi olkusz, sauna olkusz"/>
        <title>Dziki staw - Cennik</title>
    </Head>
    <Nav/>
    <main className="max-w-7xl mx-auto p-2">
        <h2 className="font-bold text-5xl md:text-7xl mt-40 mb-10"><span className="text-green-300">
            Skontaktuj</span><br/>się z nami
        </h2>
        <section className="mb-32">
            <div className="bg-white w-full rounded-2xl flex flex-wrap  justify-between">
                <div>
                    <ul className="p-5 text-xl">
                        <p className="font-bold text-3xl text-black">Kontakt</p>
                        <li>
                            <span className="font-bold">Adres:</span> 32-300 Olkusz ul. Pomorska 22
                        </li>
                        <li>
                            <span className="font-bold">Telefon:</span> +48 793 201 154
                        </li>
                        <li>
                            <span className="font-bold">Facebook: </span><a href="https://www.facebook.com/Dzikistawolkusz" target="blank">Dziki Staw Sauna&Jacuzzi</a>
                        </li>
                        <li>
                            <span className="font-bold">Instagram:</span> <a href="https://www.instagram.com/dzikistawolkusz/" target="blank">dzikistawolkusz</a>
                        </li>
                    </ul>
                    <OpeningTime ulStyle = "leading-8 text-xl p-5" pStyle = "font-bold text-3xl text-black" />
                </div>

                <iframe title="google maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2549.0538099346973!2d19.53730741595703!3d50.29092340672746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716e346b36125e3%3A0x12b76741264740a!2sDziki%20Staw%20Sauna%26Jacuzzi!5e0!3m2!1spl!2spl!4v1637155202787!5m2!1spl!2spl" loading="lazy" className="rounded-r-2xl w-full h-96 md:w-1/2 md:h-auto"></iframe>
            </div>
        </section>
    </main>
    <Footer/>
</>
  )
}
