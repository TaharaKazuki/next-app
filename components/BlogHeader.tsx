import { FC } from 'react'
import { Image } from 'react-bootstrap'

type Props = {
  author: {
    avatar: string
    name: string
  }
  date: string
  title: string
  subTitle: string
  coverImage: string
}

export const BlogHeader: FC<Props> = ({ author, date, title, subTitle, coverImage }) => {
  return (
    <div className="blog-detail-header">
      <p className="lead mb-0">
        <Image
          src={author?.avatar}
          className="rounded-circle mr-3"
          height="50px"
          width="50px"
          alt="avatar"
        />
        {author?.name}
        {', '} {date}
      </p>
      <h1 className="font-weight-bold blog-detail-header-title mb-0">{title}</h1>
      <h2 className="blog-detail-header-subtitle mb-3">{subTitle}</h2>
      <Image className="img-fluid rounded" src={coverImage} alt="TODO: provide alt" />
    </div>
  )
}
