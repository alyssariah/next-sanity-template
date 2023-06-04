import Image from 'next/image';
import Link from 'next/link';
import { getBlogPosts } from '@sanity/sanity-utils';

export default async function Blog() {
  const blogPosts = await getBlogPosts();
  return (
    <div className="w-[100%] flex flex-col items-center">
      <div className="max-w-[1440px] w-[100%] min-h-[calc(100vh-60px)] my-8">
        <h1 className="text-lg font-bold">Blog Posts</h1>
        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => {
            return (
              <Link
                href={'/blog/' + post.slug}
                key={post._id}
                className="border border-black-50 rounded-lg shadow-4"
              >
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.name}
                    width={750}
                    height={300}
                    className="object-cover rounded-lg border-gray-500"
                  />
                )}
                <div className="font-extrabold m-2">{post.name}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
