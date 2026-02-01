import React from "react"
import { Link, Outlet } from "react-router-dom"

export default function HostLayout() {
  return (
    <>
      <ul>
        <li><Link to="/host">Host</Link></li>
        <li><Link to="/host/income">Income</Link></li>
        <li><Link to="/host/reviews">Reviews</Link></li>
      </ul>
     <Outlet />
   </>
  )
}

