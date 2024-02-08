import React from "react";

function Home() {
  return (
    <div>
      <h1 className="text-4xl fond-bold text-center mb-12 mt-8">
        This is Home page
      </h1>

      <div className="flex space-x-4 items-center justify-center h-screen">
        <button className="bg-gray-300 hover:bg-gray-400 border-2 border-black rounded p-3">
          <h1 className="text-blue-700 hover:text-black  font-bold text-2xl">Login page</h1>
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 border-2 border-black rounded p-3">
          <h1 className="text-blue-700 hover:text-black font-bold text-2xl">List page</h1>
        </button>
      </div>
    </div>
  );
}

export default Home;
