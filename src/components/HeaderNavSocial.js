import NetworkIcon from './NetworkIcon'

import '../styles/HeaderNavSocial.css'

function HeaderNavSocial() {
    const menu = document.getElementsByClassName('.homepage-head-nav-socialnetwork');
    
    return (
        <div className="homepage-head-nav-socialnetwork">
            <div className='homepage-head-nav-socialnetwork-button' 
            onClick={() => (menu.classList.toggle('active'),
            console.log("ca marche"))
            
            }
        >
                <NetworkIcon name='Share' />
            </div>
            <li>
                <a href="https://instagram.com" target='_blank' rel='noreferrer'>
                    <NetworkIcon name='Instagram' />
                </a>
            </li>
            <li>
                <a href="https://www.facebook.com/" target='_blank' rel='noreferrer'>
                    <NetworkIcon name='Facebook' />
                </a>
            </li>
            <li>
                <a href="https://www.ubereats.com" target='_blank' rel='noreferrer'>
                    <NetworkIcon name='UberEat' />
                </a>
            </li>
            <li>
                <a href="https://www.google.fr/maps/@46.4433156,2.3644762,6.08z" target='_blank' rel='noreferrer'>
                    <NetworkIcon name='Map'/>
                </a>
            </li>
        </div>
    )
}

export default HeaderNavSocial