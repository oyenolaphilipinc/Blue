import React from 'react';

const Header = () => {
  return (
    <section className="w-full py-12 md:py-24 md:ml-24 bg-[#7cc6f3]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-blue-500">
                  Unleash the Power of BlueCoin
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl dark:text-gray-400">
                  $Blue is a decentralized cryptocurrency that harnesses the power of memes to revolutionize the
                  world of finance.
                </p>
              </div>
              <div className="space-x-4">
                <a
                  className="inline-flex h-9 items-center justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Buy $Blue
                </a>
                <a
                  className="inline-flex h-9 items-center justify-center rounded-md border border-blue-500 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
  );
}

export default Header;
