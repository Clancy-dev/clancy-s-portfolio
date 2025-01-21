import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function DashboardContent() {
  return (
    <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Welcome back, Clancy!</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">12</p>
              <p className="text-sm text-gray-500">Total projects</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">24</p>
              <p className="text-sm text-gray-500">Unread messages</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Profile Views</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">1,234</p>
              <p className="text-sm text-gray-500">Last 30 days</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

