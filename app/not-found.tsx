import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h2 className="text-4xl font-bold">ওহ! পেজটি পাওয়া যায়নি</h2>
      <p className="my-4 text-gray-600">আমরা দুঃখিত, আপনি যে ইউআরএলটি খুঁজছেন তা আমাদের কাছে নেই।</p>
      <Link 
        href="/" 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        হোম পেজে ফিরে যান
      </Link>
    </div>
  )
}