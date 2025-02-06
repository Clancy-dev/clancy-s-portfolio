import { deleteCode } from "@/actions/CodeSnippet";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface CodeSnippetProps {
  id:string
  title: string;
  code: string;
  slug:string
  description: string;
  onCopy: () => void;
}

const CodeSnippetCard: React.FC<CodeSnippetProps> = ({ title,id,slug, code, description, onCopy }) => {
  const [isCopied, setIsCopied] = useState(false);
  const router = useRouter()

  const handleCopy = () => {
    onCopy();
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset button text after 2 seconds
  };

  async function handleDelete(id:string){
    try {
      await deleteCode(id)
      toast.success("Code Deleted")
      router.refresh()
      } catch (error) {
     console.log(error) 
     toast.error("failed to delete.")
    }
  }

  return (
    <div className="bg-black text-white p-4 rounded-lg shadow-md mb-6 overflow-auto overall-cards">
      <div className="w-full flex justify-end button-container gap-2">
      <Link href={`/edit/${slug}`} className="px-3 py-1 rounded bg-green-600 text-white text-sm">
          Edit
        </Link> 
        {/* <button onClick={()=>handleDelete(id)} className="px-3 py-1 rounded bg-red-600 text-white text-sm ">
          Delete
        </button> */}
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
