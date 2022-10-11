import Header from './Header'

import '../styles/Homepage.css'

function Parallax() {
    return (
        <script>
            let img=getElementByid('homepage-header-bg');

            window.addEventListener('scroll', function() {
                let value = window.ScrollY
            })
        </script>
    )
}

function Homepage() {

    return (
        <div className='homepage'>
            <Header />
            <Parallax />
        </div>
        
    )
}




export default Homepage