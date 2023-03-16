import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import About from "@/components/Sections/About/About";
import Chef from "@/components/Sections/Chef/Chef";
import Contact from "@/components/Sections/Contact/Contact";
import Menu from "@/components/Sections/Menu/Menu";
import Newsletter from "@/components/Sections/Newsletter/Newsletter";

export default function Home() {
  return (
    <div className="bg-primary-dark font-openSans text-primary-light">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Chef />
      <Contact />
      <Newsletter />
      <Footer />
    </div>
  )
}
