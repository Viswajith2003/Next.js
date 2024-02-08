import React from "react";
import Link from "next/link";

function List() {
  return (
    <div>
      <h1 className="text-4xl fond-bold text-center mb-12 mt-8">
        This is the product lists
      </h1>

      <ul className="flex flex-col items-center justify-center font-bold text-2xl">
        <Link href="/products/1">
          <li>List 1</li>
        </Link>

        <Link href="/products/2">
          <li>List 2</li>
        </Link>

        <Link href="/products/3">
          <li>List 3</li>
        </Link>

        <Link href="/products/4">
          <li>List 4</li>
        </Link>
      </ul>
    </div>
  );
}

export default List;
