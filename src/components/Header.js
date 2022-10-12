import background from '../assets/img/homepage-background.jpg'

import HeaderNav from './HeaderNav'
import HeaderBackground from './HeaderBackground'


import '../styles/Header.css'

function Header() {

    return (
        <div className="homepage-header">
            {/* <img id='homepage-header-bg' src={background} alt="fond" /> */}
            <div className="homepage-header-gradient"></div>
            <HeaderNav />
            <HeaderBackground />
        </div>
    )
}

export default Header