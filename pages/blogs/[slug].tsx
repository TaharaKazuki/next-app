import type { NextPage, GetServerSideProps } from 'next'
import { PageLayout } from '@/components/PageLayout'
import { getBlogBySlug } from 'lib/api'

type Props = {
  blog: {
    slug: string
  }
}

const BlogDetail: NextPage<Props> = ({ blog }) => {
  return (
    <PageLayout>
      <h1>Hello Detail Page - {blog?.slug}</h1>
    </PageLayout>
  )
}

export default BlogDetail

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const { params } = context
  const blog = await getBlogBySlug(params!.slug as string)
  return {
    props: { blog },
  }
}
