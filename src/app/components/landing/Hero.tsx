// app/components/Hero.tsx
export default function Hero() {
  return (
    <div className="bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="mx-auto max-w-md sm:max-w-2xl sm:text-center lg:text-left lg:flex lg:items-center">
            <div>
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Manage your</span>
                <span className="block text-blue-600">customers easily</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Elevate your customer relationships with our intuitive CRM
                solution. Track leads, manage deals, and grow your business all
                in one place.
              </p>
              <div className="mt-8 sm:mt-12">
                <div className="sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <div className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
                <div className="h-64 sm:h-80 lg:h-96 p-4 flex items-center justify-center relative">
                  {/* Dashboard-style CRM visualization */}
                  <div className="absolute top-4 left-4 right-4 h-12 bg-white rounded-lg shadow-sm flex items-center px-4">
                    <div className="w-3 h-3 rounded-full bg-red-400 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></div>
                    <div className="w-3 h-3 rounded-full bg-green-400 mr-2"></div>
                    <div className="h-6 w-40 bg-gray-200 rounded-md ml-auto"></div>
                  </div>

                  {/* Main content area */}
                  <div className="w-full max-w-md flex flex-col">
                    {/* Navigation sidebar */}
                    <div className="flex h-64 sm:h-72">
                      <div className="w-16 bg-blue-600 rounded-lg mr-4 p-2 flex flex-col items-center">
                        <div className="w-10 h-10 rounded-lg bg-white bg-opacity-20 mb-4 flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                            />
                          </svg>
                        </div>
                        <div className="w-10 h-10 rounded-lg bg-white bg-opacity-90 mb-4 flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-blue-600"
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
                        <div className="w-10 h-10 rounded-lg bg-white bg-opacity-20 mb-4 flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div className="w-10 h-10 rounded-lg bg-white bg-opacity-20 mb-4 flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                            />
                          </svg>
                        </div>
                      </div>

                      {/* Main dashboard content */}
                      <div className="flex-1 flex flex-col">
                        <div className="bg-white rounded-lg shadow-lg p-4 mb-4 flex-1">
                          <div className="flex justify-between items-center mb-4">
                            <div className="text-lg font-semibold text-gray-800">
                              Customers
                            </div>
                            <div className="w-24 h-8 bg-blue-100 rounded-md flex items-center justify-center text-blue-800 text-sm font-medium">
                              View All
                            </div>
                          </div>

                          {/* Customer list */}
                          <div className="space-y-3">
                            <div className="flex items-center p-2 rounded-lg hover:bg-gray-50 border border-gray-100">
                              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium mr-3">
                                AC
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-800">
                                  Acme Corp
                                </div>
                                <div className="text-xs text-gray-500">
                                  Enterprise Plan
                                </div>
                              </div>
                              <div className="ml-auto flex space-x-2">
                                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                                  <svg
                                    className="w-3 h-3 text-green-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center p-2 rounded-lg bg-blue-50 border border-blue-200">
                              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-medium mr-3">
                                TS
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-800">
                                  TechStart Inc
                                </div>
                                <div className="text-xs text-gray-500">
                                  Professional Plan
                                </div>
                              </div>
                              <div className="ml-auto flex space-x-2">
                                <div className="w-6 h-6 rounded-full bg-yellow-100 flex items-center justify-center">
                                  <svg
                                    className="w-3 h-3 text-yellow-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center p-2 rounded-lg hover:bg-gray-50 border border-gray-100">
                              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-medium mr-3">
                                GS
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-800">
                                  Green Solutions
                                </div>
                                <div className="text-xs text-gray-500">
                                  Starter Plan
                                </div>
                              </div>
                              <div className="ml-auto flex space-x-2">
                                <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                                  <svg
                                    className="w-3 h-3 text-blue-600"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Stats widgets */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white rounded-lg shadow-lg p-3">
                            <div className="text-xs text-gray-500 mb-1">
                              Deals Won
                            </div>
                            <div className="flex items-end">
                              <div className="text-lg font-bold text-gray-800">
                                24
                              </div>
                              <div className="text-xs text-green-600 ml-2 flex items-center">
                                <svg
                                  className="w-3 h-3 mr-1"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                                  />
                                </svg>
                                12%
                              </div>
                            </div>
                          </div>
                          <div className="bg-white rounded-lg shadow-lg p-3">
                            <div className="text-xs text-gray-500 mb-1">
                              New Contacts
                            </div>
                            <div className="flex items-end">
                              <div className="text-lg font-bold text-gray-800">
                                86
                              </div>
                              <div className="text-xs text-green-600 ml-2 flex items-center">
                                <svg
                                  className="w-3 h-3 mr-1"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                                  />
                                </svg>
                                8%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
