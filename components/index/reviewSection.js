import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Review from './review'
export default function ReviewSection() {
  return (
    <section className="pt-20 relative" id="gallery">
      <p className="font-bold text-5xl mb-5" >
          <span className="text-green-300" >Opinie </span>klientów
      </p>
      <div className='flex flex-wrap justify-between gap-2'>
      <Review
          desc="Niesamowite miejsce do spędzenia wieczoru z przyjaciółmi. Jestem saunowiczem od zawsze jednak jeszcze nigdy nie spotkałem się z takim czymś, mianowicie sauna jest na dworze co daje niesamowite orzeźwienie. Zdecydowanie polecam chociaż przyjść raz dla próby."
          img="/user-maciek.webp"
          name="Maciek"
          date="17 październik 2021"
      />
      <Review
          desc="Wspaniałe miejsce do odpoczynku, takiego totalnego relaksu. Na uboczu Olkusza przy lesie, w saunie zmieści się 10 osób, jest również jacuzzi lub prysznic balia do schładzania. Jest możliwość usmażyć kiełbaskę przy ognisku, las i jeziorko na widoku za płotem."
          img="/user-maniek.webp"
          name="Maniek"
          date="16 lipiec 2021"
      />
      </div>
      <a href="https://www.google.pl/maps/place/Dziki+Staw+Sauna&Jacuzzi/@50.2909234,19.5373074,17z/data=!4m7!3m6!1s0x4716e346b36125e3:0x12b76741264740a!8m2!3d50.2908115!4d19.5395798!9m1!1b1" target="blank" className="absolute right-0 flex items-center gap-2">Zobacz wszystkie opinie <FaArrowRight/></a>
    </section>
  )
}
