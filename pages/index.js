import Center from "@/components/Center";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import NavBar from "@/components/NavBar";

export default function LandingPage() {
  return (
    <>
      <Center>
        <NavBar />
        <Hero />
        <div id='Features'>
          <Features />
        </div>
        <div id='Info'>
          <Info />
        </div>
      </Center>
      <Footer />
    </>    
  )
}
