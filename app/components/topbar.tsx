import Link from 'next/link'

export default function TopBarMenu() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex-1">
          {/* Empty div for left alignment */}
        </div>
        <div className="flex-1 text-center">
          <Link href="/" className="text-white text-xl font-bold">Generate</Link>
        </div>
        <div className="flex-1 flex justify-end space-x-4">
          <Link href="/" className="text-gray-300 hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
            About
          </Link>
          <Link 
            href="/generate" 
            className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
          >
            Generate
          </Link>
        </div>
      </div>
    </nav>
  )
}