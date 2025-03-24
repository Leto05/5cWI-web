"use client";
import { Car } from '@/lib/types/types'
import React, { useState } from 'react'

type Props = { car: Car }

export default function Card({ car }: Props) {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className={'shadow bg-green-600 border p-4'} onClick={() => {
            setIsActive(!isActive);
        }
        }>
            <h2 className='font-bold text-3xl'>{car.name}</h2>
            <div>{car.color}</div>
            {isActive ? "active" : "inactive"}
        </div>
    )
}