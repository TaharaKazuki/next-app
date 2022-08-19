import { Row, Col, Image, Card } from 'react-bootstrap'

export const AuthorInfo = () => {
  return (
    <Row>
      <Col md="8">
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
              My name is Tahara Kazuki and I am an frontend engineer and freelance developer. and
              this is my blog page.
            </p>
          </Card.Body>
        </div>
      </Col>
    </Row>
  )
}
