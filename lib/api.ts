import client from './sanity'

const blogField = `
  title,
  subTitle,
  'slug': slug.current,
  date,
  'coverImage': coverImage.asset->url 
`

export const getAllBlogs = async (): Promise<any> => {
  const results = await client.fetch(`*[_type == "blog"]{${blogField}}`)
  return results
}
