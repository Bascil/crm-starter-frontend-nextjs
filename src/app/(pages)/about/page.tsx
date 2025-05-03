import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";

export default function About() {
  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">About</span>
              <span className="block text-blue-600">CRM Pro</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              We're on a mission to make customer relationship management simple
              and effective for businesses of all sizes.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Story
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                CRM Pro was founded in 2020 with a simple idea: customer
                relationship management shouldn't be complicated. Our founders,
                experienced sales professionals themselves, were frustrated with
                existing CRM solutions that were either too complex or too
                limited.
              </p>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Starting with a small team of developers and sales experts, we
                built a CRM that focuses on what matters most: helping
                businesses build and maintain strong relationships with their
                customers.
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="aspect-w-5 aspect-h-3 rounded-lg overflow-hidden sm:aspect-w-16 sm:aspect-h-9">
                <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                  <svg
                    className="h-24 w-24 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Values Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              What drives us every day
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-blue-600 mb-4">
                <svg
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Simplicity</h3>
              <p className="mt-2 text-base text-gray-500">
                We believe software should be intuitive. CRM Pro is designed to
                be easy to use from day one, with no steep learning curve.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-blue-600 mb-4">
                <svg
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Efficiency</h3>
              <p className="mt-2 text-base text-gray-500">
                Your time is valuable. Our platform is built to streamline
                workflows and eliminate busywork so you can focus on what
                matters.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-blue-600 mb-4">
                <svg
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">
                Customer Success
              </h3>
              <p className="mt-2 text-base text-gray-500">
                Your success is our success. We provide exceptional support and
                continuously improve our platform based on your feedback.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Meet the people behind CRM Pro
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto h-40 w-40 rounded-full bg-gray-200 flex items-center justify-center">
                <svg
                  className="h-24 w-24 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Sarah Chen
                </h3>
                <p className="text-base text-blue-600">CEO & Co-Founder</p>
                <p className="mt-2 text-base text-gray-500">
                  Former sales leader with 15+ years of experience in building
                  customer relationships.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="mx-auto h-40 w-40 rounded-full bg-gray-200 flex items-center justify-center">
                <svg
                  className="h-24 w-24 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Michael Rodriguez
                </h3>
                <p className="text-base text-blue-600">CTO & Co-Founder</p>
                <p className="mt-2 text-base text-gray-500">
                  Software architect with a passion for building intuitive,
                  user-friendly applications.
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="mx-auto h-40 w-40 rounded-full bg-gray-200 flex items-center justify-center">
                <svg
                  className="h-24 w-24 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-medium text-gray-900">
                  Alex Johnson
                </h3>
                <p className="text-base text-blue-600">
                  Head of Customer Success
                </p>
                <p className="mt-2 text-base text-gray-500">
                  Dedicated to ensuring every customer gets maximum value from
                  our platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-700">
        <div className="max-w-2xl mx-auto py-16 px-4 text-center sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to get started?</span>
            <span className="block">Start your free trial today.</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-200">
            No credit card required. Try CRM Pro free for 14 days.
          </p>
          <a
            href="#"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto"
          >
            Sign up for free
          </a>
        </div>
      </div>

      <Footer />
    </main>
  );
}
