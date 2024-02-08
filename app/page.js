import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl fond-bold text-center mb-12 mt-8">
        This is Home page
      </h1>
      <div className="flex space-x-4 items-center justify-center h-screen">
        <Link href="/list">
          <button className="bg-gray-300 hover:bg-gray-400 border-2 border-black rounded p-3">
            <h1 className="text-blue-700 hover:text-black  font-bold text-2xl">
              Login page
            </h1>
          </button>
        </Link>
        <Link href="/contacts">
          <button className="bg-gray-300 hover:bg-gray-400 border-2 border-black rounded p-3">
            <h1 className="text-blue-700 hover:text-black font-bold text-2xl">
              Contact page
            </h1>
          </button>
        </Link>
      </div>
    </div>
  );
}
