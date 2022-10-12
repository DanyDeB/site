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
        <p className="homepage-header-background-title">
            My Bar
        </p>
        <p className="homepage-header-background-headline">
            Pour les gourmands, les fines bouches et les bouches gourmandes 
        </p>
    </Parallax>
);

export default HeaderBackground