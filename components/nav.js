import Link from 'next/link';
import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'
function Nav() {
    let resizeNavOnClick
    const [navControl, setNavControl] = React.useState()
    const [width, setWidth] = React.useState()
    React.useEffect(()=>{
        setWidth(window.screen.availWidth)
    }, [])
    let shouldResize = width <= 768 ? () => setNavControl('-100%') : undefined

    return (
    <>
        <div onClick={() => setNavControl('0')}>
            <div className="open-menu fixed m-5 text-4xl top-0 right-0 md:hidden" >
                <FaBars/>
            </div>
        </div>
        <nav className="pr-2 flex flex-col top-0 items-center -right-60 w-40 h-screen bg-white fixed md:justify-between md:w-full md:h-12  md:right-0 md:left-0
        md:my-2 md:flex-row" style={{right: navControl}}> 
        <div className="md:h-full md:flex items-center">
            <img src="/logo-mini.png" alt="logo" className=" h-20 mt-8 rounded-full md:m-0 md:h-full md:rounded-none"/>
            <h1 className="md:ml-2 text-lg">Dziki staw</h1>
        </div>
            <ul className="flex flex-col mb-10 text-black gap-5 font-semibold text-lg md:mb-0 md:flex-row md:text-black">
                <Link href="/">
                    <a onClick={shouldResize}>
                        <li>Strona główna</li>
                    </a>
                </Link>
                <Link href="/cennik">
                    <a onClick={shouldResize}>
                        <li>Cennik</li>
                    </a>
                </Link>
                <Link href="/kontakt">
                    <a onClick={shouldResize}>
                        <li>Kontakt</li>
                    </a>
                </Link>
                <Link href="/informacje">
                    <a onClick={shouldResize}>
                        <li>Informacje</li>
                    </a>
                </Link>
            </ul>
            <div className="text-4xl md:hidden" onClick={() => setNavControl('-100%')}>
                <FaTimes/>
            </div>
        </nav>
    </>
  );

}

export default Nav;