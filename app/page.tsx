import Hello from "../component/hello";




const Home = () => {

  console.log("What type of component am i? Home Server Component");

  return (
    <main>
      <div>Welcome to next JS</div>
      <Hello />
    </main>
  )
}

export default Home 