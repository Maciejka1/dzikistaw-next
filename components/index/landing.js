import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
export default function Landing() {
  return (
    <section>
        <div className="mt-20 md:mt-48 lg:flex justify-evenly">
            <div className="mb-5">
                <h1 className="text-5xl md:text-8xl font-bold animate">
                    <span className="text-green-300 ">Najbardziej</span><br/>unikatowe<br/> miejsce w <span className="text-green-300">Olkuszu</span>
                </h1>
                <p className="text-xl md:text-xl my-5 font-light delay">Sauna na zewnątrz<br/> wprowadza niezwykłą atmosferę.</p>
                <a href="/#gallery" className="flex items-center font-semibold text-lg w-60">
                    <p className="z-10 no-underline">Dowiedz się więcej</p>
                    <div className="w-20 h-20 rounded-full bg-white -ml-5 flex justify-center items-center">
                        <p className='bounce-animation'><FaArrowRight/></p>
                    </div>
                </a>
            </div>
            <div className="relative max-w-2xl">
                <img src="/landingImage.webp" className="w-full rounded" alt="dziki staw outside"/>
            </div>
        </div>
    </section>
  )
}
