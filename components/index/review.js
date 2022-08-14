import React from 'react'
import {FaStar} from 'react-icons/fa'
export default function Review(props) {
    return (
    <div className="flex flex-col gap-5 md:flex-row justify-between">
        <div className="max-w-xl bg-white p-5 rounded-xl">
            <div className="flex gap-2 items-center">
                <img src={props.img} className="w-16 h-16" alt="user"/>
                <h2 className="text-xl">
                    <p>{props.name}</p>
                    <p className="text-sm text-gray-600">Lokalny przewodnik · {props.date}</p>
                </h2>
            </div>
            <span className="text-yellow-300 text-2xl flex gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </span>
            <p>
                {props.desc}
            </p>
        </div>

    </div>
  )
}