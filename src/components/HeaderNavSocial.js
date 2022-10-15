import NetworkIcon from './NetworkIcon'

import '../styles/HeaderNavSocial.css'
import { useState } from 'react'

function HeaderNavSocial() {
    const [toggle, setToggle] = useState(false)
    
    return (
        <div className="homepage-head-nav-socialnetwork">
            <div 
                className="homepage-head-nav-socialnetwork-toggle"
                onClick={() => (
                    toggle ? (
                        setToggle(false),
                        console.log('set to true')
                    )
                    : (
                        console.log('set to false'),
                        setToggle(true)
                    )
                )}
            >
                <NetworkIcon name='Share'/>
            </div>
            <li>
                <a href="https://facebook.com" target='_blank' rel='noreferrer'>
                    <NetworkIcon name='Facebook' />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/" target='_blank' rel='noreferrer'>
                    <NetworkIcon name='Instagram' />
                </a>
            </li>
            <li>
                <a href="https://www.ubereats.com/fr" target='_blank' rel='noreferrer'>
                    <NetworkIcon name='UberEat' className='test' />
                </a>
            </li>
            <li>
                <a href="https://www.google.com/maps/@46.701621,1.7564313,6.13z" target='_blank' rel='noreferrer'>
                    <NetworkIcon name='Map' />
                </a>
            </li>
        </div>
    )
}

export default HeaderNavSocial