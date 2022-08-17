import React from 'react'
import Link from 'next/link'
export default function Gallery() {
  return (
    <div className="max-w-7xl mx-auto p-2">
        <h2 className="font-bold text-5xl md:text-7xl mt-40 mb-10">
            <span className="text-green-300">Galeria </span>obiektu
        </h2>
        <section className="mt-10">
            <div className="sm:grid">
                <div className="vertical">
                    <img src="/sauna-inside-gallery.webp" alt="sauna inside " />
                </div>
                <div className="vertical">
                    <img src="/sauna-lobby-gallery.webp" alt="sauna outside" />
                </div>
                <div className="horizontal">
                    <img src="/sauna-outside-gallery.webp" alt="dziki staw outside" />
                </div>
            </div>
            <p className="text-5xl max-w-2xl mt-10 mb-5 font-bold">
                <span className="text-green-300">Gotowy</span> na relaks? Zobacz cennik lub skontaktuj się z nami!
            </p>
            <div className="flex flex-wrap gap-2">
            <Link href="/kontakt">
                <a>
                <button className="w-40 bg-green-300 text-white text-xl p-2 rounded-full transition-all hover:bg-green-400">
                    Kontakt
                </button>
                </a>
            </Link>
            <Link href="/cennik">
                <a>
                <button className="w-40 border-green-300 border-2 text-xl p-2 rounded-full transition-all hover:border-green-400 hover:bg-green-400 mb-40">
                    Cennik
                </button>
                </a>
            </Link>
            </div>
        </section>
    </div>
  )
}
