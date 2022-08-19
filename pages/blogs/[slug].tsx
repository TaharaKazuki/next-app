import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { PageLayout } from '@/components/PageLayout'
import { BlogHeader } from '@/components/BlogHeader'
import { getBlogBySlug, getAllBlogs } from 'lib/api'
import { Row, Col } from 'react-bootstrap'

type Props = {
  blog: {
    title: string
    subTitle: string
    slug: string
    coverImage: string
    author: {
      avatar: string
      name: string
    }
    date: string
  }
}

const BlogDetail: NextPage<Props> = ({ blog }) => {
  const { title, subTitle, coverImage, author, date } = blog
  return (
    <PageLayout>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <BlogHeader
            title={title}
            subTitle={subTitle}
            coverImage={coverImage}
            author={author}
            date={date}
          />
          <hr />
          {/* Blog Content Here */}
          It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using Content here, content
          here, making it look like readable English. Many desktop publishing packages and web page
          editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will
          uncover many web sites still in their infancy. Various versions have evolved over the
          years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </Col>
      </Row>
    </PageLayout>
  )
}

export default BlogDetail

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { params } = context
  const blog = await getBlogBySlug(params!.slug as string)
  return {
    props: { blog },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogs = await getAllBlogs()
  return {
    paths: blogs?.map((b: any) => ({ params: { slug: b.slug } })),
    fallback: false,
  }
}
