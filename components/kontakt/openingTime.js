import { FaTimes } from "react-icons/fa"

export default function OpeningTime(props){
    let daysOfTheWeek = [
        {day: "Poniedziałek: ", isOpened: true},
        {day: "Wtorek: "},
        {day: "Środa: ", isOpened: true},
        {day: "Czwartek: "},
        {day: "Piątek: "},
        {day: "Sobota: "},
        {day: "Niedziela: "}
    ]
    return(
    <ul className={props.ulStyle}>
        <p className={props.pStyle}>Dni otwarcia</p>
        {daysOfTheWeek.map(dayProps => {
            return(
                <li className="flex items-center">
                    <span className="font-bold">{dayProps.day}</span>
                    {dayProps.isOpened ? "18:00 - 20:00" : <FaTimes />}
                </li>
            )
        })}
    </ul>
    )
}