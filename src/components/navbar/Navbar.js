import './style.css'
import { XCircle } from 'phosphor-react'

export function  Navbar() {
    return(
        <div className='navbar'>
            <div className='headerNavbar'>
                <p>cores</p>
                <XCircle size={20} className='x' />
            </div>
        </div>    
    )
}