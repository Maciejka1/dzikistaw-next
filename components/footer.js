import React from "react";
function Footer(){
return (
<footer class="p-2 text-center text-gray-400 flex justify-center bg-[#f4f4f4]">
    <div>
        <div class="flex flex-wrap gap-5 max-w-xl text-left">
            <ul>
                <p class="font-bold text-2xl text-black">Kontakt</p>
                <li>
                    <span class="font-bold">Adres:</span> 32-300 Olkusz ul. Pomorska 22
                </li>
                <li>
                    <span class="font-bold">Telefon:</span> +48 793 201 154
                </li>
                <li>
                    <span class="font-bold">Facebook: </span><a href="https://www.facebook.com/Dzikistawolkusz" target="_blank">Dziki Staw Sauna&Jacuzzi</a>
                </li>
                <li>
                    <span class="font-bold">Instagram:</span> <a href="https://www.instagram.com/dzikistawolkusz/" target="_blank">dzikistawolkusz</a>
                </li>
            </ul>
        <ul>
            <p class="font-bold text-2xl text-black">Dni otwarcia</p>
            <li><span class="font-bold">Poniedziałek:</span> 18:00 - 20:00</li>
            <li><span class="font-bold">Wtorek: </span> <i class="fas fa-times"></i></li>
            <li><span class="font-bold">Środa:</span> 18:00 - 20:00</li>
            <li><span class="font-bold">Czwartek:</span> <i class="fas fa-times"></i></li>
            <li><span class="font-bold">Piątek:</span> <i class="fas fa-times"></i></li>
            <li><span class="font-bold">Sobota:</span> <i class="fas fa-times"></i></li>
            <li><span class="font-bold">Niedziela:</span> <i class="fas fa-times"></i></li>
        </ul>
        </div>
        <div class="mt-5">
            <p class="font-bold">
                Copyright  Paweł Babiuch 2021
            </p>
            <p>Design  project by <a href="maciejka.vercel.app">Maciejka</a></p>
        </div>
    </div>
</footer>
);
}
export default Footer;