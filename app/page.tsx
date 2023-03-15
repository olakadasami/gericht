import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import About from "@/components/Sections/About/About";
import Chef from "@/components/Sections/Chef/Chef";
import Menu from "@/components/Sections/Menu/Menu";

export default function Home() {
  return (
    <div className="bg-primary-dark font-openSans text-primary-light">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Chef />
    </div>
  )
}
