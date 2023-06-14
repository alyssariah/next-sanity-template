import SanityPortableText from '@/components/portable-text/PortableText';

export default async function AboutPage() {
  const aboutContent = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/about`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());

  return (
    <div className="w-[100%] flex flex-col items-center">
      <div className="max-w-[1440px] w-[100%] min-h-[calc(100vh-60px)] my-4 text-black-500">
        <SanityPortableText content={aboutContent?.content} />
      </div>
    </div>
  );
}
