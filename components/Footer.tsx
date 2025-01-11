import Link from 'next/link'
import { GitlabIcon as GitHub, Linkedin, Mail, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Clancy Ssekisambu</h3>
            <p className="text-sm">Full Stack Developer specializing in building high-performance websites and web applications.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
              <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
              <li><Link href="/projects" className="hover:text-gray-300">Projects</Link></li>
              <li><Link href="/skills" className="hover:text-gray-300">Skills</Link></li>
              <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
              <li><Link href="/docs" className="hover:text-gray-300">Docs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href="mailto:clancy@example.com" className="hover:text-gray-300">clancy@example.com</a>
              </li>
              <li className="flex items-center">
                <GitHub size={16} className="mr-2" />
                <a href="https://github.com/clancyssekisambu" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">GitHub</a>
              </li>
              <li className="flex items-center">
                <Linkedin size={16} className="mr-2" />
                <a href="https://linkedin.com/in/clancyssekisambu" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">LinkedIn</a>
              </li>
              <li className="flex items-center">
                <Twitter size={16} className="mr-2" />
                <a href="https://twitter.com/clancyssekisambu" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">Twitter</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Stay updated with my latest projects and tech insights.</p>
            {/* <form className="flex">
              <input type="email" placeholder="Your email" className="px-3 py-2 bg-gray-700 text-white rounded-l-md focus:outline-none" />
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-r-md">Subscribe</button>
            </form> */}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} Clancy Ssekisambu. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

