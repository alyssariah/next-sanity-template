export default function Blog() {
  return (
    <div className="w-[100%] flex flex-col items-center">
      <div className="w-[100%] max-w-[1440px] mt-8 relative min-h-[100vh] px-8 lg:px-20 markdown-content">
        <p>Blog</p>
      </div>
    </div>
  );
}

export async function generateMetadata() {
  return {
    title: 'Markdown File',
  };
}
