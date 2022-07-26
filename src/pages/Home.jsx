import { Container, Row, Col } from "react-bootstrap";

function Home() {
    return (
        <>
            <section className="bannerPrincipal">
                <img src="https://images.unsplash.com/photo-1517976384346-3136801d605d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1112&q=80" />
            </section>
            <Container className="position-relative mt-5 pt-5">
                <h2 className="titleEntrySection">
                    ROCKETS
                </h2>
                <Row>
                    <Col md={4}>
                        <div className="boxRockets">
                            <img width="421" height="420" src="https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" />
                            <div className="boxTitle">
                                <h3>
                                    Title
                                </h3>
                            </div>
                        </div>
                    </Col>

                    <Col md={4}>
                        <div className="boxRockets">
                            <img width="421" height="420" src="https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" />
                            <div className="boxTitle">
                                <h3>
                                    Title
                                </h3>
                            </div>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="boxRockets">
                            <img width="421" height="420" src="https://images.unsplash.com/photo-1518364538800-6bae3c2ea0f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" />
                            <div className="boxTitle">
                                <h3>
                                    Title
                                </h3>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </>
    );
}

export default Home;
