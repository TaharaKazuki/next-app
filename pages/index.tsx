import { useState } from 'react'
import type { NextPage, GetStaticProps } from 'next'
import { Container, Row, Col } from 'react-bootstrap'
import { PageLayout } from '@/components/PageLayout'
import { AuthorInfo } from '@/components/AuthorInfo'
import { CardItem } from '@/components/CardItem'
import { CardListItem } from '@/components/CardListItem'
import { FilteringMenu } from '@/components/FilteringMenu'

import { getAllBlogs } from 'lib/api'

export type blogProps = {
  blogs: {
    title: string
    subTitle: string
    slug: string
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
  }[]
}

const Home: NextPage<blogProps> = ({ blogs }) => {
  const [filter, setFilter] = useState({
    view: { list: 1 },
  })
  return (
    <PageLayout>
      <AuthorInfo />
      <FilteringMenu onChange={() => {}} />
      <hr />
      <Row className="mb-5">
        {/* <Col md="10">
          <CardListItem />
        </Col> */}
        {blogs.map((blog) =>
          filter.view.list ? (
            <Col md="9">
              <CardListItem />
            </Col>
          ) : (
            <Col key={blog.slug} md="4">
              <CardItem
                {...blog}
                link={{
                  href: `/blogs/[slug]`,
                  as: `/blogs/${blog.slug}`,
                }}
              />
            </Col>
          )
        )}
      </Row>
    </PageLayout>
  )
}

export default Home

export const getStaticProps: GetStaticProps<blogProps> = async () => {
  const blogs = await getAllBlogs()
  return {
    props: {
      blogs,
    },
  }
}
