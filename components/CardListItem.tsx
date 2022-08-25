import { FC } from 'react'
import Link from 'next/link'
import { Card, Image } from 'react-bootstrap'

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

export const CardListItem: FC<Props> = ({ title, subTitle, author, link, date }) => {
  return (
    <Card className={`fj-card fj-card-list`}>
      <div className="card-body-wrapper">
        <Card.Header className="d-flex flex-row">
          <Image
            src={author.avatar}
            className="rounded-circle me-3"
            height="50px"
            width="50px"
            alt="avatar"
          />
          <div>
            <Card.Title className="font-weight-bold mb-1">{author.name}</Card.Title>
            <Card.Text className="card-date">{date}</Card.Text>
          </div>
        </Card.Header>
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
