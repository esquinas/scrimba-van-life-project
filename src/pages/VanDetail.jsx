import React from "react"
import { useParams } from "react-router-dom"

export default function VanDetail() {
    const { id } = useParams();

    return <h1>Van detail page goes here {id}</h1>
}
