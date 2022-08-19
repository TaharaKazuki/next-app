import client from './sanity'

const blogField = `
  title,
  subTitle,
  'slug': slug.current,
  date,
  'author': author->{name, 'avatar': avatar.asset->url},
  'coverImage': coverImage.asset->url 
`

export const getAllBlogs = async (): Promise<any> => {
  const results = await client.fetch(`*[_type == "blog"]{${blogField}}`)
  return results
}

export const getBlogBySlug = async (slug: string) => {
  const result = await client
    .fetch(`*[_type == "blog" && slug.current == $slug] {${blogField}}`, {
      slug,
    })
    .then((res) => res?.[0])

  return result
}
