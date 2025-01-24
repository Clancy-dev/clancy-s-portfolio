import { Phone } from "lucide-react"

const TelephoneNumbers = () => {
  const phoneNumbers = ["+256 770983239", "+256 707013121"]

  return (
    <div className="w-full max-w-md mx-auto p-6 rounded-lg shadow-md">

      <div className="space-y-4">
        {phoneNumbers.map((number, index) => (
          <div key={index} className="flex items-center justify-center space-x-2 group">
            <Phone className="w-6 h-6 text-blue-500 group-hover:text-blue-600 transition-colors duration-200" />
            <a
              href={`tel:${number.replace(/\s+/g, "")}`}
              className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700 hover:text-blue-500 transition-colors duration-200"
              style={{ fontFamily: "'Roboto', sans-serif" }}
            >
              {number}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TelephoneNumbers

