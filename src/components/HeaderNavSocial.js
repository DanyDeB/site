import NetworkIcon from './NetworkIcon'

import '../styles/HeaderNavSocial.css'
import { useState } from 'react'

function HeaderNavSocial() {
    const [toggle, setToggle] = useState(false)
    
    return (
        <div className={`homepage-head-nav-socialnetwork ${toggle ? "active" : ""}`}>
            <div 
                className="homepage-head-nav-socialnetwork-toggle"
                onClick={() => (
                    toggle ? (
                        setToggle(false),
                        console.log('---set to true---')
                    )
                    : (
                        console.log('---set to false---'),
                        setToggle(true)
                    )
                )}
            >
                <NetworkIcon name='Share'/>
            </div>
            <li>
                <a href="https://facebook.com" target='_blank' rel='noreferrer'>
                    <NetworkIcon name='Facebook' className="homepage-head-nav-socialnetwork-facebook-logo" />
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/" target='_blank' rel='noreferrer'>
                    <NetworkIcon name='Instagram' className="homepage-head-nav-socialnetwork-instagram-logo" />
                </a>
            </li>
            <li>
                <a href="https://www.ubereats.com/fr" target='_blank' rel='noreferrer'>
                    <NetworkIcon name='UberEat' className="homepage-head-nav-socialnetwork-ubereat-logo" />
                </a>
            </li>
            <li>
                <a href="https://www.google.com/maps/@46.701621,1.7564313,6.13z" target='_blank' rel='noreferrer'>
                    <NetworkIcon name='Map' className="homepage-head-nav-socialnetwork-map-logo" />
                </a>
            </li>
        </div>
    )
}

export default HeaderNavSocial