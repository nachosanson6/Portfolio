import { Row, Col, Container } from "react-bootstrap"
import './FloorIsLavaPage.css'

const FloorIsLava = () => {
    return (
        <>
            <Container>
                <Row className="projectRow">
                    <Col className='ms-5' md={6}>
                        <h2 className="projectTitle">Floor is lava</h2>
                        <p className="projectSubTitle">Jul 2023 - Ironhack Madrid</p>
                        <p className="projectText">This was the first complete project I developed during the bootcamp. Together with my partner Rodrigo, we created this video game using HTML, CSS, JavaScript, and the DOM. It was a team effort in which we had to brainstorm, design, and build the video game from scratch.</p>
                    </Col>
                    <Col className="projectImg" md={3}>
                        <img src="src\assets\images\MOCKUPS FLOORISLAVA 1.png" alt="" />
                    </Col>
                    <div className="d-flex justify-content-center mt-5"> {/* Agrega estas clases */}
                        <a href="https://github.com/nachosanson6/Floor_is_lava" target="_blank" rel="noopener noreferrer">
                            <button style={{ background: 'linear-gradient(60deg, #0538FF 13.4%, #70E3F5 86.6%', borderRadius: "1.5625rem", fontWeight: 'bold' }} className='linkButton'>
                                See more in GitHub
                            </button>
                        </a>
                    </div>
                </Row>
            </Container>
        </>
    )
}
export default FloorIsLava