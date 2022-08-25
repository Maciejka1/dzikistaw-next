import React from 'react'
import {FaStar} from 'react-icons/fa'
export default function Review(props) {
    return (
    <div className="flex flex-col gap-5 md:flex-row justify-between">
        <div className="xl:max-w-xl bg-white p-5 rounded-xl">
            <div className="flex gap-2 items-center">
                <img src={props.img} className="w-16 h-16" alt="user"/>
                <div>
                    <p>{props.name}</p>
                    <p className="text-sm text-gray-600">Lokalny przewodnik · {props.date}</p>
                </div>
            </div>
            <span className="text-yellow-300 text-2xl flex gap-1">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
            </span>
            <p className='max-w-5xl'>
                {props.desc}
            </p>
        </div>

    </div>
  )
}