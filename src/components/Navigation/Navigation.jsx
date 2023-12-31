import { Nav, Navbar } from 'react-bootstrap'
import './Navigation.css'
import { Link, animateScroll as scroll } from 'react-scroll'
import { useContext } from 'react'
import { LanguageContext } from '../../contexts/language.context'
import logo from './../../assets/images/LOGO.png'
import github from './../../assets/images/Github1.png'
import linkIn from './../../assets/images/LinkIn1.png'
import english from './../../assets/images/Property 1=ENG.png'
import spanish from './../../assets/images/Property 1=ESP.png'



const Navigation = () => {

    const { language, setLanguage } = useContext(LanguageContext)

    const handleScrollToSection = (sectionId) => {
        // Obten la ruta actual
        const currentPath = window.location.pathname;

        // Verifica si estás en la página de inicio
        if (currentPath === '/') {
            // Si estás en la página de inicio, haz el desplazamiento suave
            scroll.scrollTo(sectionId, {
                smooth: true,
                duration: 500,
                offset: -50,
            });
        } else {
            // Si estás en otra página, simplemente haz el desplazamiento
            window.location.href = '/';

        }
    }


    return (
        <div className="navigation">
            <Navbar expand="lg ms-5 fixed-top">
                <Navbar.Brand >
                    <img
                        src={logo}
                        width="80.382px"
                        height="70px"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="sections d-flex justify-content-start w-full gap-5 ms-5">
                        <Link
                            to="home"
                            smooth={true}
                            duration={500}
                            offset={-50}
                            onClick={() => handleScrollToSection('home')}
                        >
                            {language === "english" && (
                                "Home"
                            )}
                            {language === "spanish" && (
                                "Inicio"
                            )}

                        </Link>
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            offset={-50}
                            onClick={() => handleScrollToSection('projects')}
                        >
                            {language === "english" && (
                                "Projects"
                            )}
                            {language === "spanish" && (
                                "Proyectos"
                            )}
                        </Link>
                        <Link
                            to="aboutMe"
                            smooth={true}
                            duration={500}
                            offset={-50}
                            onClick={() => handleScrollToSection('aboutMe')}
                        >
                            {language === "english" && (
                                "About"
                            )}
                            {language === "spanish" && (
                                "Sobre mi"
                            )}
                        </Link>
                    </Nav>

                    <Nav className='social d-flex me-5 ms-auto'>
                        <a href="https://github.com/nachosanson6" target="_blank" rel="noopener noreferrer">
                            <button className="image-button mt-3">
                                <img src={github} alt="Icono del botón" />
                            </button>
                        </a>
                        <a href="https://www.linkedin.com/in/ignacio-sanson/" target="_blank" rel="noopener noreferrer">
                            <button className="image-button">
                                <img src={linkIn} alt="Icono del botón" />
                            </button>
                        </a>
                    </Nav>

                    <Nav className='language me-5'>
                        {language === "english" && (
                            <button className="image-button" onClick={() => setLanguage("spanish")}>
                                <img src={english} alt="Icono del botón" />
                            </button>
                        )}
                        {language === "spanish" && (
                            <button className="image-button" onClick={() => setLanguage("english")}>
                                <img src={spanish} alt="Icono del botón" />
                            </button>
                        )}
                    </Nav>
                    <Nav className='contact d-flex justify-content-end me-5'>
                        <Link to="contact" smooth={true} duration={500} offset={-50} onClick={() => handleScrollToSection('contact')}>
                            <button style={{ boxShadow: '1px 0px 21px 0px #3D73EB', padding: '5px', background: 'linear-gradient(60deg, #0538FF 13.4%, #70E3F5 86.6%', borderRadius: "1.5625rem", fontWeight: 'bold' }}>
                                {language === "english" && (
                                    "Contact"
                                )}
                                {language === "spanish" && (
                                    "Contacto"
                                )}
                            </button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div >
    )
}
export default Navigation