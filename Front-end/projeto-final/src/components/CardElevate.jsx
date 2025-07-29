import React from 'react'
import './CardElevate.css'
import { IoPersonSharp } from "react-icons/io5";

function CardElevate() {
    return (
        <div className='card-body'>
            <div className='card-colum'>
                <div className='card-row'>
                    <span className='ciclo-elevate'><IoPersonSharp /></span>
                    <p className='p-numb'>01</p>
                </div>
                <h1>Diving and Snorkeling</h1>
                <p className='elevate-p2'>The travel package includes <br /> lending services for diving and <br /> snorkeling equipment</p>
            </div>
        </div>
    )
}

export default CardElevate