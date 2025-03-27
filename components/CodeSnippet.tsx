"use client"

import { deleteCode } from "@/actions/CodeSnippet"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Pencil } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import type React from "react"
import { useState } from "react"
import toast from "react-hot-toast"

interface CodeSnippetProps {
  id: string
  title: string
  code: string
  slug: string
  description: string
  onCopy: () => void
}

const CodeSnippetCard: React.FC<CodeSnippetProps> = ({ title, id, slug, code, description, onCopy }) => {
  const [isCopied, setIsCopied] = useState(false)
  const router = useRouter()

  const handleCopy = () => {
    onCopy()
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  async function handleDelete(id: string) {
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
    <Card className="code-editor-card">
      <div className="editor-header">
        <div className="editor-header-content">
          <h3 className="editor-title">{title}</h3>
          <div className="editor-actions">
            <Link href={`/edit/${slug}`}>
              <Button size="sm" variant="ghost" className="editor-button">
                <Pencil className="h-3.5 w-3.5 text-green-500" />
                <span className="ml-2">Edit</span>
              </Button>
            </Link>
            <Button
              size="sm"
              variant="ghost"
              onClick={handleCopy}
              className={`editor-button ${isCopied ? "text-green-500" : "text-blue-500"}`}
            >
              {isCopied ? "Copied ✓" : "Copy"}
            </Button>
          </div>
        </div>
      </div>

      <div className="code-scroll-wrapper">
        <pre className="editor-code">
          <code>{code}</code>
        </pre>
      </div>

      <div className="editor-footer">
        <p className="editor-description">{description}</p>
      </div>
    </Card>
  )
}

export default CodeSnippetCard

