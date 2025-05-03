import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Features />
      <div className="bg-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Ready to transform your customer relationships?
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Start your free 14-day trial. No credit card required.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Sign up for free
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
