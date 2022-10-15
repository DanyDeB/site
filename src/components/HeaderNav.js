import '../styles/HeaderNav.css'

import HeaderNavSocial from './HeaderNavSocial'

function HeaderNav() {

    return (
        <div className="homepage-header-nav">
                <div className="homepage-header-nav-logo">MY BAR</div>
            <ul className="homepage-head-nav-links">
                <li>MENU</li>
                <li>RESERVATION</li>
                <li>COMMANDE</li>
                <li>À PROPOS DE NOUS</li>
            </ul>
            <HeaderNavSocial />
        </div>
    )
}

export default HeaderNav