import { Home, Briefcase, Mail, User } from "lucide-react"
import Link from "next/link"

export function Sidebar() {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link href="/dashboard" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700">
              <Home className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/projects" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700">
              <Briefcase className="h-5 w-5" />
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/messages" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700">
              <Mail className="h-5 w-5" />
              <span>Messages</span>
            </Link>
          </li>
          <li>
            <Link href="/dashboard/profile" className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-700">
              <User className="h-5 w-5" />
              <span>Profile</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

