
"use client"

import React, { useState } from "react";
import Link from "next/link";
import { CodeSnippet } from "@prisma/client";
import CodeSnippetCard from "./CodeSnippet";


export default function CodeLibrary({codeData}: {codeData: CodeSnippet[]}) {
  const [search, setSearch] = useState("");  

  const snippets = [
    {
      title: "Greet Function",
      code: `function greet(name: string): string {
  return \`Hello, \${name}!\`;
}
console.log(greet('World'));`,
      description: "This function takes a name as input and returns a greeting message.",
    },
    {
      title: "Arrow Function Example",
      code: `const add = (a: number, b: number): number => a + b;
console.log(add(5, 3));`,
      description: "This example demonstrates the use of arrow functions in TypeScript to perform addition.",
    },
    {
      title: "Simple CSS Example",
      code: `body {
  margin: 0;
  font-family: Arial, sans-serif;
}`,
      description: "This snippet sets the default styles for the body element in CSS.",
    },
  ];

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
  };

  const filteredSnippets = codeData.filter((snippet) =>
    snippet.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-blue-950 flex flex-col items-center w-full rounded-[5px]">
      <h1 className="lg:text-3xl md:text-2xl sm:text-2xl text-2xl font-bold text-white mb-6 mt-6">My Code Library</h1>
      {/* search bar */}
      <div className="w-full p-[0.5rem] flex items-center justify-center">
      <input
        type="text"
        placeholder="Search Code Snippets..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className=" px-4 py-2 rounded-[20px] w-full max-w-3xl bg-white text-blue-950 font-bold placeholder-gray-500 focus:outline-none focus:ring focus:ring-blue-500"
      />
      </div>

      <div className="w-full p-[0.5rem] flex items-center justify-start">
      <Link href="/create-new-code-snippet" className="bg-blue-900 mb-2 text-white border-white rounded-[10px] border-b-[1px] border-l-[1px] p-2">
      <button>
        <p>Create New Snippet</p>
      </button>
      </Link>
      </div>



      

      

      <div className="code-snippet-container">
        {filteredSnippets.map((snippet, index) => (
          <CodeSnippetCard
            key={index}
            title={snippet.title}
            code={snippet.code}
            description={snippet.description}
            onCopy={() => handleCopy(snippet.code)}
          />
        ))}
        {filteredSnippets.length === 0 && (
          <p className="text-gray-500 text-center">No snippets found.</p>
        )}
      </div>
    </div>
  );
}


