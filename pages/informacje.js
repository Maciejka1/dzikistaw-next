import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Footer from '../components/footer'

function info(){
    return(
<>
    <Nav/>
    <Head>
        <link rel="icon" href="/logo-mini.png" />
        <meta name="description" content="Kto z nas nie uwielbia odprężyć się w saunie czy jacuzzi? Specjalnie dla was wkomponowaliśmy te dwie atrakcje w przepiękne otoczenie natury!" />
        <meta name="keywords" content="Dziki staw, sauna, olkusz, wypoczynek, jacuzzi olkusz, sauna olkusz"/>
        <title>Dziki staw - Informacje</title>
    </Head>
    <main className="max-w-7xl mx-auto p-2">
        <section className="mt-40">
            <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-green-300">Dodatkowe </span>informacje
            </h1>

            <div className="bg-white rounded-2xl p-5 max-w-2xl mt-10 mb-3">
                <p className="text-4xl font-bold "><span class="text-green-300">Kiedy </span>sauna jest otworzona?</p>
                <p className="text-xl max-w-xl">
                    Sauna jest otworzona w okresie od września do maja w poniedziałki i środy od godziny 18:00 do 20:00, w razie zmian opublikujemy post na facebooku. 
                </p>
            </div>

            <div className="bg-white rounded-2xl p-5 max-w-2xl mt-10 mb-3">
                <p className="text-4xl font-bold "><span className="text-green-300">Karnet </span>na wejścia</p>
                <p className="text-xl max-w-xl">
                    Karnet sześciu lub trzech wejść jest ważny przez <span className="font-bold">nieograniczony</span> czas. 
                    Aby zakupić karnet prosimy napisać na <a href="https://www.facebook.com/Dzikistawolkusz">facebooku</a>.
                </p>
            </div>
            <div className="bg-white rounded-2xl p-5 max-w-2xl mt-10 mb-3">
                <p className="text-4xl font-bold"><span className="text-green-300 ">Wynajem </span>na wyłączność</p>
                <p className="text-xl max-w-xl">
                    Na wyłączność można wynająć samą saunę, samo jacuzzi lub saunę i jacuzzi.Zapraszamy do kontaktu na facebooku lub numer telefonu 793 201 154.
                </p>
            </div>
            <div className="bg-white rounded-2xl p-5 max-w-2xl mt-10 mb-3">
                <p className="text-4xl font-bold"><span className="text-green-300">Przeciwskazania </span> korzystania z sauny</p>
                <p className="text-xl">Nie zaleca się korzystania z sauny podczas:</p>
                <ul className="list-disc ml-5 text-xl">
                    <li>Infekcji</li>
                    <li>Ostrych stanów astmy</li>
                    <li>Chorób serca i krążenia</li>
                    <li>Ostrych stanów zapalnych narządów wewnętrznych</li>
                    <li>Zakażenia</li>
                    <li>Nadczynności tarczycy</li>
                    <li>Guzów złośliwych</li>
                    <li>Chorób wenerycznych</li>
                    <li>Ciąży</li>
                    <li>Miesiączki</li>
                    <li>Epilepsji</li>
                    <li>Nie należy korzystać z sauny z pełnym żołądkiem</li>
                    <li>Nie należy korzystać z sauny gdy ma się podwyższoną temperaturą ciała</li>
                </ul>
            </div>
            </section>
    </main>
    <Footer/>
</>
   )   
}
export default info