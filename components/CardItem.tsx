import { FC } from 'react'
import { Card, Image } from 'react-bootstrap'

type Props = {
  title: string
  subTitle: string
}

export const CardItem: FC<Props> = ({ title, subTitle }) => {
  return (
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
            <Card.Title className="font-weight-bold mb-1">{title}</Card.Title>
            <Card.Text className="card-date">{subTitle}</Card.Text>
          </div>
        </Card.Header>
        <div className="view overlay">
          <Card.Img src="https://via.placeholder.com/250" alt="Card image cap" />
        </div>
        <Card.Body>
          <Card.Title className="card-main-title">Placeholder Title</Card.Title>
          <Card.Text>Placehodler subTitle</Card.Text>
        </Card.Body>
      </div>
      <a className="card-button">Read More</a>
    </Card>
  )
}
