import { getBlogPost } from '@sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';

type Props = {
  params: {
    post: string;
  };
};

export default async function Post({ params }: Props) {
  const slug = params.post;
  const post = await getBlogPost(slug);
  return (
    <div className="w-[100%] flex flex-col items-center">
      <div className="max-w-[1440px] w-[100%] min-h-[calc(100vh-60px)] my-8">
        <h1>{post.name}</h1>

        <Image
          src={post.image}
          alt={post.name}
          width={1440}
          height={600}
          className="mt-8 object-cover rounded-lg overflow-hidden"
        />

        <div className="mt-8 text-black-500">
          <PortableText value={post.content} />
        </div>
      </div>
    </div>
  );
}
