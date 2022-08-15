import Link from "next/link"
export default function PricesTile(props){
    let splitTitle = props.title.split(" ")
    return(
    <div className="md:w-1/3 max-w-sm bg-white p-4 rounded-2xl">
        <h2 className="mb-5 font-bold text-4xl md:text-5xl">
            <span className="text-green-300">{`${splitTitle[0]} `}</span>
            {splitTitle.slice(1).join(" ")}
        </h2>
            <ul class="text-2xl">
                {props.prices.map(prop => {
                    return(
                        <li>
                            {prop.title} - <span className="font-semibold">{prop.price}</span>
                        </li>
                    )
                })}
            </ul>
        <div className="flex flex-col">
            <Link href="/kontakt">
                <a className="mt-20 bg-green-300 text-white text-xl p-2 rounded-full w-full transition-all hover:bg-green-400 no-underline text-center">
                    Kontakt
                </a>
            </Link>
            <Link href="/informacje">
                <a className="text-gray-500">
                    Dowiedz się więcej
                </a>
            </Link>
        </div>
    </div>
    )
}