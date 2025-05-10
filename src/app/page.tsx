import Navbar from "@/app/components/landing/Navbar";
import Hero from "@/app/components/landing/Hero";
import Features from "@/app/components/landing/Features";
import Footer from "@/app/components/landing/Footer";
import Action from "@/app/components/landing/Action";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Action />
      <Footer />
    </main>
  );
}
