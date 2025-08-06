"use client";

import { UploadButton } from '@/utils/uploadthing';
import { Upload } from 'lucide-react';

interface UploadButtonSectionProps {
  onUploadComplete: (url: string) => void;
}

export function UploadButtonSection({ onUploadComplete }: UploadButtonSectionProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          if (res && res[0]) {
            onUploadComplete(res[0].url);
          }
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          console.error("Upload error:", error);
          alert(`ERROR! ${error.message}`);
        }}
        appearance={{
          button: "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-4 py-2 rounded-lg transition-all duration-200 ut-ready:bg-gradient-to-r ut-ready:from-purple-500 ut-ready:to-pink-500 ut-uploading:bg-gradient-to-r ut-uploading:from-purple-600 ut-uploading:to-pink-600 ut-uploading:after:bg-purple-400",
          allowedContent: "text-purple-600 dark:text-purple-400 text-sm",
        }}
        content={{
          button({ ready }) {
            if (ready) return (
              <div className="flex items-center gap-2">
                <Upload className="h-4 w-4" />
                Choose Image
              </div>
            );
            return "Getting ready...";
          },
          allowedContent({ ready, fileTypes, isUploading }) {
            if (!ready) return "Checking what you allow";
            if (isUploading) return "Uploading...";
            return `Allowed: ${fileTypes.join(", ")}`;
          },
        }}
      />
    </div>
  );
}
