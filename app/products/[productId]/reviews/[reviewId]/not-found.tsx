"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'


export default function NotFound() {

  const pathname = usePathname()


  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h2 className="text-4xl font-bold">ওহ! Review Not Found</h2>
      <h3 className='text-lg text-gray-600'>Path not exist : {pathname}</h3>
      <Link 
        href="/" 
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        হোম পেজে ফিরে যান
      </Link>
    </div> 
  )
}