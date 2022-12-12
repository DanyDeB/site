import '../styles/HeaderNav.css'

import HeaderNavSocial from './HeaderNavSocial'

function HeaderNav() {

    return (
        <div className="homepage-header-nav">
                <div className="homepage-header-nav-logo">MY BAR</div>
            <ul className="homepage-head-nav-links">
                <li 
                    className="homepage-head-nav-links-elem"
                >
                    <p
                        className='hover-red'
                    >
                        MENU
                    </p>
                    <ul className='homepage-head-nav-links-elem-list'>
                        <li className='hover-red'>Bières</li>
                        <li className='hover-red'>Coctails</li>
                        <li className='hover-red'>Vins</li>
                        <li className='hover-red'>Sans Alcools</li>
                    </ul>
                </li>
                <li 
                    className="homepage-head-nav-links-elem"
                >
                    <p
                        className='hover-red'
                    >
                        RESERVATION
                    </p>
                </li>
                <li 
                    className="homepage-head-nav-links-elem"
                >
                    <p
                        className='hover-red'
                    >
                        COMMANDE
                    </p>
                </li>
                <li 
                    className="homepage-head-nav-links-elem"
                >
                    <p
                        className='hover-red'
                    >
                        À PROPOS DE NOUS
                    </p>
                </li>
            </ul>
            <HeaderNavSocial />
        </div>
    )
}

export default HeaderNav