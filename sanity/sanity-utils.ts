import { groq } from 'next-sanity';
import { client } from './lib/client';
import { BlogPost } from '@/types/BlogPost';
import { Page } from '@/types/Page';

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

export async function getPages(): Promise<Array<Page>> {
  return client.fetch(
    groq`*[_type=="page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
    }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  return client.fetch(
    groq`*[_type=="page" && slug.current==$slug][0] {
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug }
  );
}
