import { Container } from "react-bootstrap"
import Presentation from "../../components/Presentation/Presentation"
import Projects from "../../components/Projects/Projects"
import { Element } from 'react-scroll'
import AboutMe from "../../components/AboutMe/AboutMe"
import ContactForm from "../../components/ContactForm/ContactForm"
import ThanksMessage from "../../components/ThanksMessage/ThanksMessage"


const HomePage = () => {



    return (
        <>
            <Container>
                <Element name="home">
                    <Presentation />
                </Element>
                <Element name="projects">
                    <Projects />
                </Element>
                <Element name="aboutMe">
                    <AboutMe />
                </Element>
                <Element name="contact">
                    <ContactForm />
                </Element>
                <ThanksMessage />
            </Container>
        </>
    )
}
export default HomePage