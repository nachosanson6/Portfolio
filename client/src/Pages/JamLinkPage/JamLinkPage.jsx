import { Button, Col, Container, Row } from "react-bootstrap"
import './JamLink.css'



const JamLink = () => {
    return (
        <>
            <Container>
                <Row className="projectRow">
                    <Col className='ms-5' md={5}>
                        <h2 className="jamlinkTitle">JamLink</h2>
                        <p className="jamlinkSubTitle">Sept 2023 - Ironhack Madrid</p>
                        <p className="jamlinkText mt-5">Last project developed during the bootcamp. JamLink is a social network for musicians who want to meet other musicians for jamming and organizing jam sessions. In it, you can find a community of users where you can meet new people, see what instruments they play, and add them as friends. </p>
                        <img className='mt-5' style={{ width: '110%' }} src="src\assets\images\Group 22.png" alt="" />
                    </Col>
                    <Col className="ms-5 mt-5" md={6}>
                        <img className='mt-1 ms-5' style={{ width: '90%' }} src="src\assets\images\Group 21.png" alt="" />
                        <p className="jamlinkText jamText mt-5 ms-5">You can also create events that other users can join, view all the events on a Google Map, and leave comments. I developed the application with my colleague Fernando, and we used HTML, CSS, JavaScript, React, Node.js, Express.js, Bootstrap, Google API, and axios. As next steps, we would like to implement a section where users can add videos of the jam sessions and even a chat to facilitate communication among the application's users.</p>
                        <div className="d-flex justify-content-center mt-5">
                            <button onClick={() => {
                                window.open('https://github.com/nachosanson6/JamLink-client', '_blank');
                                setTimeout(() => {
                                    window.open('https://github.com/nachosanson6/JamLink-server', '_blank');
                                }, 1000);
                            }} style={{ background: 'linear-gradient(60deg, #0538FF 13.4%, #70E3F5 86.6%', borderRadius: "1.5625rem", fontWeight: 'bold' }} className='linkButton'>
                                See more in GitHub
                            </button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default JamLink