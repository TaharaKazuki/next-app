import { FC } from 'react'
import { Card, Image } from 'react-bootstrap'
import Link from 'next/link'

type Props = {
  title: string
  subTitle: string
  date: string
  coverImage: string
  author: {
    name: string
    avatar: string
  }
  link: {
    href: string
    as: string
  }
}

export const CardItem: FC<Props> = ({ title, subTitle, date, coverImage: image, author, link }) => {
  const { name, avatar } = author
  return (
    <Card className={`fj-card`}>
      <div className="card-body-wrapper">
        <Card.Header className="d-flex flex-row">
          <Image
            src={avatar || 'https://via.placeholder.com/150'}
            className="rounded-circle me-3"
            height="50px"
            width="50px"
            alt="avatar"
          />
          <div>
            <Card.Title className="font-weight-bold mb-1">{name || 'not defined'}</Card.Title>
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
      {link && (
        <Link {...link}>
          <a className="card-button">Read More</a>
        </Link>
      )}
    </Card>
  )
}
