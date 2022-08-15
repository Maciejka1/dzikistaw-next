import OpeningTime from "./kontakt/openingTime";

function Footer(){
return (
<footer className="p-2 text-center text-gray-400 flex justify-center bg-[#f4f4f4]">
    <div>
        <div className="flex flex-wrap gap-5 max-w-xl text-left">
            <ul>
                <p className="font-bold text-2xl text-black">Kontakt</p>
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
        <ul>

            <OpeningTime pStyle="font-bold text-2xl text-black" />
        </ul>
        </div>
        <div className="mt-5">
            <p className="font-bold">
                Copyright  Paweł Babiuch 2021
            </p>
            <p>Design and project by <a href="https://maciejka.netlify.app">Maciejka</a></p>
        </div>
    </div>
</footer>
);
}
export default Footer