import client from './sanity'

const blogField = `
  title,
  subTitle,
  'slug': slug.current
`

export const getAllBlogs = async (): Promise<any> => {
  const results = await client.fetch(`*[_type == "blog"]{${blogField}}`)
  return results
}
