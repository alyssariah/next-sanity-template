import { groq } from 'next-sanity';
import { client } from './lib/client';
import { BlogPost } from '@/types/BlogPost';

export async function getBlogPosts(): Promise<Array<BlogPost>> {
  return client.fetch(
    groq`*[_type=="blog"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  );
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
  return client.fetch(
    groq`*[_type=="blog" && slug.current==$slug][0] {
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug }
  );
}
