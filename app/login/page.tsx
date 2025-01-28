import LoginFormm from "@/components/LoginFormm"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 dark:from-gray-950 dark:to-gray-700 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white dark:bg-black dark:border-l-[1px] dark:border-b-[1px] dark:border-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-4">Sign In</h2>
          <LoginFormm />
        </div>
      </div>
    </div>
  )
}

