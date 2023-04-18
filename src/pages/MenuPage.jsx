import React from 'react'
import Menu from '../components/UI/menu/Menu'
import Navbar from '../components/UI/navbar/Navbar'

export default function MenuPage() {
    return (
        <div>
            <Navbar/>
            <Menu style={{animation: 'extension 1s'}} />
        </div>
    )
}
