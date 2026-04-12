import Link from "next/link";


const Home = () => {

  console.log("What type of component am i? Home Server Component");

  return (
    <div>
      <div>Welcome to next JS</div>
      <Link href="/blog">Blog </Link>
      <h1>
      <Link href="/dashboard">Dashboard </Link>
      </h1>
    </div>
  )
}

export default Home 