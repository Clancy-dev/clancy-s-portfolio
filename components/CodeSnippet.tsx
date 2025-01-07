import React, { useState } from "react";

interface CodeSnippetProps {
  title: string;
  code: string;
  description: string;
  onCopy: () => void;
}

const CodeSnippetCard: React.FC<CodeSnippetProps> = ({ title, code, description, onCopy }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    onCopy();
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset button text after 2 seconds
  };

  return (
    <div className="bg-black text-white p-4 rounded-lg shadow-md mb-6 overflow-auto overall-cards">
      <div className="w-full flex justify-end button-container">
      <button
        onClick={handleCopy}
        className={` px-3 py-1 rounded text-sm ${
          isCopied ? "bg-green-600" : "bg-blue-600"
        } hover:${isCopied ? "bg-green-700" : "bg-blue-700"} text-white`}
      >
        {isCopied ? "Copied ✓" : "Copy"}
      </button>
      </div>
      {/* title */}
      <div className="w-full pt-[0.5rem] border-b-[1px] border-gray-500">
      <h3 className="text-lg text-amber-400 font-semibold mb-2">{title}</h3>
      </div>
      {/* code */}
      <div className="scroll-container p-[0.5rem] px-[1rem] mt-[0.5rem] rounded-[5px]">
        <pre className="whitespace-pre-wrap text-lg text-gray-400">
        <code>{code}</code>
        </pre>
      </div>
      {/* details */}
     <div className="w-full p-[0.5rem]">
     <p className="text-green-500 text-sm mt-4">{description}</p>
     </div>
     
      
     
    </div>
  );
};

export default CodeSnippetCard;
