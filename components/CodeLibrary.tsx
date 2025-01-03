"use client";
import React, { useState } from "react";

const CodeSnippetsSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [snippets] = useState([
    {
      id: 1,
      title: "Responsive Navbar",
      description: "A fully responsive navigation bar using Flexbox.",
      code: `<nav class="flex justify-between p-4 bg-blue-600 text-white">...</nav>`,
      keywords: ["navbar", "responsive", "flexbox"],
    },
    {
      id: 2,
      title: "Dark Mode Toggle",
      description: "A simple dark mode toggle using CSS and JavaScript.",
      code: `function toggleDarkMode() { document.body.classList.toggle('dark'); }`,
      keywords: ["dark mode", "toggle", "javascript"],
    },
    {
      id: 3,
      title: "Fetch API Example",
      description: "Using the Fetch API to get data from a REST API.",
      code: `fetch('https://api.example.com/data').then(res => res.json()).then(data => console.log(data));`,
      keywords: ["fetch", "api", "javascript"],
    },
  ]);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const handleCopy = async (id: number, code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000); // Revert after 2 seconds
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  const filteredSnippets = snippets.filter(
    (snippet) =>
      snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      snippet.keywords.some((keyword) =>
        keyword.toLowerCase().includes(searchQuery.toLowerCase())
      )
  );

  return (
    <section className="p-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Code Snippets</h2>

        {/* Search Bar */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Search by title or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
          />
        </div>

        {/* Snippets List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSnippets.length > 0 ? (
            filteredSnippets.map((snippet) => (
              <div
                key={snippet.id}
                className="p-4 bg-white shadow rounded-lg hover:shadow-lg transition relative flex flex-col"
              >
                <h3 className="text-xl font-bold mb-2">{snippet.title}</h3>
                <p className="mb-4 text-gray-600">{snippet.description}</p>
                
                {/* Code Block with Black Background and White Text */}
                <pre className="bg-black text-white p-3 rounded text-sm overflow-x-auto mb-6">
                  {snippet.code}
                </pre>

                <div className="mt-2 text-sm text-gray-500">
                  Keywords: {snippet.keywords.join(", ")}
                </div>

                {/* Copy Button */}
                <button
                  onClick={() => handleCopy(snippet.id, snippet.code)}
                  className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-3 py-1 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                  {copiedId === snippet.id ? "✓" : "Copy"}
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-600">No snippets found for your search.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CodeSnippetsSection;
