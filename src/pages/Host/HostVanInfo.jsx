import React from "react"
import { useOutletContext } from "react-router";

export default function HostVanInfo() {
    const { van } = useOutletContext()

    return(
        <>
        <h2>Info view here</h2>
        <dl>
           <dt>Name:</dt>        <dd>{ van.name }</dd>
           <dt>Category:</dt>    <dd>{ van.type }</dd>
           <dt>Description:</dt> <dd>{ van.description }</dd>
           <dt>Visibility:</dt>  <dd>{ van.visibility || 'public' }</dd>
        </dl>
        </>
    )
}
