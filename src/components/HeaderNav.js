import '../styles/HeaderNav.css'

function HeaderNav() {
    return (
        <div className="homepage-header-nav">
            <div className="homepage-header-nav-logo"></div>
            <ul className="homepage-head-nav-links">
                <li>Menu</li>
                <li>Réservation</li>
                <li>Commande</li>
                <li>À propos de nous</li>
            </ul>
            <ul className="homepage-head-nav-socialnetwork">
                <li><div className="homepage-head-nav-socialnetwork-instagram"></div></li>
                <li><div className="homepage-head-nav-socialnetwork-facebook"></div></li>
                <li><div className="homepage-head-nav-socialnetwork-maps"></div></li>
            </ul>
        </div>
    )
}

export default HeaderNav