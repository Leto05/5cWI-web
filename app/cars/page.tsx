import React from 'react'
import { Car } from '@/lib/types/types'
import CarList from '../compnents/ui/cars/CarList';

type Props = {}


const cars: Car[] = [
    {
        name: "Super Car",
        type: "BMW",
        color: "green",
        motor: {
            serialNumber: 12345,
            hp: 200,
        },
    },
    {
        name: "Speedster",
        type: "Audi",
        color: "red",
        motor: {
            serialNumber: 67890,
            hp: 250,
        },
    },
    {
        name: "Road King",
        type: "Mercedes",
        color: "black",
        motor: {
            serialNumber: 54321,
            hp: 300,
        },
    },
    {
        name: "Thunderbolt",
        type: "Tesla",
        color: "blue",
        motor: {
            serialNumber: 98765,
            hp: 350,
        },
    },
    {
        name: "Beast Mode",
        type: "Ford",
        color: "yellow",
        motor: {
            serialNumber: 13579,
            hp: 400,
        },
    }
];

export default function page({ }: Props) {
    return (
        <div>
            <h1>cars</h1>
            <CarList cars={cars}></CarList>
        </div>
    );
}