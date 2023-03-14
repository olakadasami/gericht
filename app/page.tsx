import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import About from "@/components/Sections/About";
import Menu from "@/components/Sections/Menu";

export default function Home() {
  return (
    <div className="bg-primary-dark text-primary-light">
      <Navbar />
      <Hero />
      <About />
      <Menu />
    </div>
  )
}
