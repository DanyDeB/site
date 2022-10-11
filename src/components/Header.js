import background from '../assets/img/homepage-background.jpg'

import HeaderNav from './HeaderNav'

import '../styles/Header.css'

function Header() {

    return (
        <div className="homepage-header">
            <img id='homepage-header-bg' src={background} alt="fond" />
            <div className="homepage-header-gradient"></div>
            <HeaderNav />
            <div className="homepage-header-content">
                <p className="homepage-header-content-title">
                    My Bar
                </p>
                <p className="homepage-header-content-headline">
                    Pour les groumands, les fines bouches et les bouches groumandes
                </p>
            </div>
        </div>
    )
}

export default Header