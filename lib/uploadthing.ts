// Mock upload function for v0 environment
export const useUploadThing = (endpoint: string, options: any) => {
  return {
    startUpload: async (files: File[]) => {
      // Simulate upload delay
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Create blob URL for the uploaded file
      const file = files[0]
      const blobUrl = URL.createObjectURL(file)

      // Call the success callback
      if (options.onClientUploadComplete) {
        options.onClientUploadComplete([{ url: blobUrl }])
      }

      return [{ url: blobUrl }]
    },
    permittedFileInfo: {
      config: {
        image: {
          maxFileSize: "4MB",
        },
      },
    },
  }
}
