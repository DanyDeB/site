import '../styles/HeaderNav.css'

import HeaderNavSocial from './HeaderNavSocial'

function HeaderNav() {

    return (
        <div className="homepage-header-nav">
                <div className="homepage-header-nav-logo">MY BAR</div>
            <ul className="homepage-head-nav-links">
                <li 
                    className="hover-red"
                >
                    MENU</li>
                <li 
                    className="hover-red"
                >
                    RESERVATION</li>
                <li 
                    className="hover-red"
                >
                    COMMANDE</li>
                <li 
                    className="hover-red"
                >
                    À PROPOS DE NOUS</li>
            </ul>
            <HeaderNavSocial />
        </div>
    )
}

export default HeaderNav