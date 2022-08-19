import { FC } from 'react'
import { Card, Image } from 'react-bootstrap'

type Props = {
  title: string
  subTitle: string
  date: string
  coverImage: string
}

export const CardItem: FC<Props> = ({ title, subTitle, date, coverImage: image }) => {
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
            <Card.Title className="font-weight-bold mb-1">Placeholder Author</Card.Title>
            <Card.Text className="card-date">{date}</Card.Text>
          </div>
        </Card.Header>
        <div className="view overlay">
          <Card.Img src={image} alt="Card image cap" />
        </div>
        <Card.Body>
          <Card.Title className="card-main-title">{title}</Card.Title>
          <Card.Text>{subTitle}</Card.Text>
        </Card.Body>
      </div>
      <a className="card-button">Read More</a>
    </Card>
  )
}
