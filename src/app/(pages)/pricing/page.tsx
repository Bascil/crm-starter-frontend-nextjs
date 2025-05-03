import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";

export default function Pricing() {
  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      frequency: "/month",
      description: "Perfect for small businesses and startups",
      features: [
        "Up to 1,000 contacts",
        "Basic contact management",
        "Email integration",
        "5 team members",
        "Standard reporting",
      ],
      cta: "Get started",
      popular: false,
    },
    {
      name: "Professional",
      price: "$79",
      frequency: "/month",
      description: "For growing teams and businesses",
      features: [
        "Up to 10,000 contacts",
        "Advanced pipeline management",
        "Full email & calendar sync",
        "15 team members",
        "Advanced analytics",
        "API access",
      ],
      cta: "Start free trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      frequency: "/month",
      description: "For large organizations with complex needs",
      features: [
        "Unlimited contacts",
        "Custom workflows",
        "Dedicated account manager",
        "Unlimited team members",
        "Custom reporting",
        "Premium support",
        "White labeling",
      ],
      cta: "Contact sales",
      popular: false,
    },
  ];

  return (
    <main>
      <Navigation />

      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Simple, transparent</span>
              <span className="block text-blue-600">pricing</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Choose a plan that works for your business
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="bg-gray-50 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-12 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative p-8 bg-white border rounded-lg shadow-sm flex flex-col ${
                  plan.popular
                    ? "border-2 border-blue-500 ring-2 ring-blue-500 ring-opacity-50"
                    : "border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="inline-flex px-4 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-500 text-white">
                      Most popular
                    </span>
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {plan.name}
                  </h3>
                  <p className="mt-4 flex items-baseline text-gray-900">
                    <span className="text-5xl font-extrabold tracking-tight">
                      {plan.price}
                    </span>
                    <span className="ml-1 text-xl font-semibold">
                      {plan.frequency}
                    </span>
                  </p>
                  <p className="mt-2 text-gray-500">{plan.description}</p>

                  <ul role="list" className="mt-6 space-y-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex">
                        <svg
                          className="flex-shrink-0 w-6 h-6 text-green-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="ml-3 text-gray-500">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#"
                  className={`mt-8 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-blue-50 text-blue-700 hover:bg-blue-100"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            Frequently asked questions
          </h2>
          <div className="mt-12">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:grid-cols-3">
              <div>
                <dt className="text-lg font-medium text-gray-900">
                  Can I cancel at any time?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Yes, you can cancel your subscription at any time. Your
                  service will continue until the end of your billing period.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-medium text-gray-900">
                  Is there a free trial?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Yes, all plans come with a 14-day free trial, no credit card
                  required.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-medium text-gray-900">
                  Can I change plans later?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Absolutely! You can upgrade or downgrade your plan at any time
                  from your account settings.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-medium text-gray-900">
                  Do you offer discounts for annual billing?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Yes, we offer a 20% discount when you choose annual billing on
                  any of our plans.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-medium text-gray-900">
                  What payment methods do you accept?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  We accept all major credit cards, PayPal, and for Enterprise
                  customers, we can arrange invoicing.
                </dd>
              </div>
              <div>
                <dt className="text-lg font-medium text-gray-900">
                  Can I get a custom plan?
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Yes, for larger organizations we offer custom plans. Please
                  contact our sales team to discuss your needs.
                </dd>
              </div>
            </dl>
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
