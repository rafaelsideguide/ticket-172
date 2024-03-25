export default function Home() {
  return (
    <main className="flex items-center p-24">
      
      <a href="/blog" className="flex flex-col items-center justify-center p-2 border border-gray-300 rounded-lg shadow-md m-1">
        <span className="font-bold">Blog</span>
      </a>
      <a href="/about" className="flex flex-col items-center justify-center p-2 border border-gray-300 rounded-lg shadow-md m-1">
        <span className="font-bold">About</span>
      </a>
    </main>
  );
}
