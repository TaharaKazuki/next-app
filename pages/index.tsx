import type { NextPage } from 'next'
import { Container, Row, Col, Image, Card } from 'react-bootstrap'
import { BlogNavbar as Navbar } from 'components/Navbar'

const Home: NextPage = () => {
  return (
    <Container>
      <Navbar />
      <div className="blog-detail-page">
        <Row>
          <Col md="8">
            {/* AUTHOR INTRO STARTS */}
            <div className="mb-4 admin-intro d-flex p-2">
              <Image
                roundedCircle={true}
                width={64}
                height={64}
                className="me-3"
                src="https://avatars.githubusercontent.com/u/15259879?v=4"
                alt="Generic placeholder"
              />
              <Card.Body>
                <h5 className="font-weight-bold mb-0">Hello Friends,</h5>
                <p className="welcome-text">
                  My name is Tahara Kazuki and I am an frontend engineer and freelance developer.
                  and this is my blog page.
                </p>
              </Card.Body>
            </div>
            {/* AUTHOR INTRO ENDS */}
          </Col>
        </Row>
        <hr />
        {/* className from props */}
        <div className={`page-wrapper`}>
          <Row className="mb-5">
            <Col md="10">
              {/* CardListItem STARTS */}
              <Card className={`fj-card fj-card-list`}>
                <div className="card-body-wrapper">
                  <Card.Header className="d-flex flex-row">
                    <Image
                      src={'https://via.placeholder.com/150'}
                      className="rounded-circle me-3"
                      height="50px"
                      width="50px"
                      alt="avatar"
                    />
                    <div>
                      <Card.Title className="font-weight-bold mb-1">Placeholder Author</Card.Title>
                      <Card.Text className="card-date">Placeholder Date</Card.Text>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <Card.Title className="card-main-title">Placeholder Title</Card.Title>
                    <Card.Text>Placehodler Subtitle</Card.Text>
                  </Card.Body>
                </div>
                <a href="#" className="card-button">
                  Read More
                </a>
              </Card>
              {/* CardListItem ENDS */}
            </Col>

            <Col md="4">
              <Card className={`fj-card`}>
                <div className="card-body-wrapper">
                  <Card.Header className="d-flex flex-row">
                    <Image
                      src={'https://via.placeholder.com/150'}
                      className="rounded-circle me-3"
                      height="50px"
                      width="50px"
                      alt="avatar"
                    />
                    <div>
                      <Card.Title className="font-weight-bold mb-1">Placeholder Author</Card.Title>
                      <Card.Text className="card-date">Placeholder Date</Card.Text>
                    </div>
                  </Card.Header>
                  <div className="view overlay">
                    <Card.Img src="https://via.placeholder.com/250" alt="Card image cap" />
                  </div>
                  <Card.Body>
                    <Card.Title className="card-main-title">Placeholder Title</Card.Title>
                    <Card.Text>Placehodler Subtitle</Card.Text>
                  </Card.Body>
                </div>
                <a className="card-button">Read More</a>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
      <footer className="page-footer">
        <div>
          <a href="#">courses</a>
          {' | '}
          <a href="#">github</a>
          {' | '}
          <a href="#">facebook</a>
        </div>
      </footer>
    </Container>
  )
}

export default Home
