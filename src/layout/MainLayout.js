import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function MainLayout() {
    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <ul>
                <Link to="/category" className = 'mx-3'>Category</Link>
                <Link to="/product" className = 'mx-3'>Product</Link>
                <Link to="/flexbox" className = 'mx-3'>Flexbox</Link>
            </ul>
            <Outlet/>
        </div>
    )
}
