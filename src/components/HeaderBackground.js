import { Parallax } from 'react-parallax';
import '../styles/HeaderBackground.css'
import Background from '../assets/img/homepage-background.jpg'

const HeaderBackground = () => (
    <Parallax 
        className='homepage-header-background' 
        blur={{ min: -12, max: 10 }} 
        bgImage={Background} 
        bgImageAlt="background" 
        strength={300}
    >
        <div className="homepage-header-background-title">
            MY BAR
        </div>
        <div className="homepage-header-background-headline">
            Gourmand, fin et rafiné
        </div>
    </Parallax>
);

export default HeaderBackground