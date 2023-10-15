import { Col, Container, Row, Button } from "react-bootstrap"

const BoardMaster = () => {
    return (
        <>
            <Container>
                <Row className="projectRow">
                    <Col className='ms-5' md={6}>
                        <h2 className="projectTitle">BoardMaster</h2>
                        <p className="projectSubTitle">Aug 2023 - Ironhack Madrid</p>
                        <p className="projectText mt-5">Project I developed during the second module of the bootcamp. It is an application for creating events to play board games. Additionally, when creating an event, you can view the event's location and all previously created events on a map from the Google Maps API. </p>
                        <img className='mt-5' src="src\assets\images\2MOKCUPS BOARDMASTER 1.png" alt="" />
                    </Col>
                    <Col className="ms-5">
                        <img className='mt-5' src="src\assets\images\MOCKUP HOME BOARDMASTER 1.png" alt="" />
                        <p className="projectText mt-5">You also have access to a gallery of all the board games we fetch from an external API. I developed this application with my colleague Isabella, and we used HTML, CSS, JavaScript, Node.js, Express.js, Bootstrap, external APIs, and Axios.</p>
                        <div className="d-flex justify-content-center mt-5"> {/* Agrega estas clases */}
                            <a href="https://github.com/nachosanson6/board-master" target="_blank" rel="noopener noreferrer">
                                <button style={{ background: 'linear-gradient(60deg, #0538FF 13.4%, #70E3F5 86.6%', borderRadius: "1.5625rem", fontWeight: 'bold' }} className='linkButton'>
                                    See more in GitHub
                                </button>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default BoardMaster