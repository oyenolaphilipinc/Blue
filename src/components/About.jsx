import React from 'react'

const About = () => {
  return (
        <div>
        <div className="flex md:hidden justify-center">
        <img src={"/ton.png"} className=''/>
        </div>
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="py-12 md:py-20 lg:py-28">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">About Blue</h1>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Blue is a decentralized memecoin that aims to bring joy and laughter to the crypto community. Launched
                  in 2022, Blue has quickly gained a loyal following of "Blue Believers" who believe in the power of
                  memes to unite and inspire.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Unlike many other memecoins, Blue has a strong focus on community engagement and charitable giving. A
                  portion of every transaction is automatically sent to the Blue Foundation, which uses the funds to
                  support various social and environmental initiatives around the world.
                </p>
                <button className="mt-4 border px-4 py-2 rounded-md border-[#7cc6f3] bg-blue-500 text-white" variant="primary">
                  Buy Blue
                </button>
              </div>
              <div className="flex justify-center">
                <img
                  alt="Blue Coin"
                  className="max-w-full h-auto"
                  height={300}
                  src="/texos.gif"
                  style={{
                    aspectRatio: "300/300",
                    objectFit: "cover",
                  }}
                  width={300}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-gray-100 dark:bg-gray-800 py-12 md:py-20 lg:py-28">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16">
              <div className="flex justify-center">
                <img
                  alt="Blue Community"
                  className="max-w-full h-auto"
                  height={300}
                  src="/texos.gif"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={300}
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Join the Blue Community</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Blue is more than just a cryptocurrency - it's a vibrant community of "Blue Believers" who share a
                  passion for memes, laughter, and making the world a better place.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Join our Discord server, follow us on social media, and participate in our community events to connect
                  with other Blue enthusiasts and stay up-to-date on the latest developments.
                </p>
                <div className="flex gap-4">
                  <a className="flex items-center gap-2" href="#">
                    <DiscIcon className="h-6 w-6" />
                    <span>Join Discord</span>
                  </a>
                  <a className="flex items-center gap-2" href="#">
                    <TwitterIcon className="h-6 w-6" />
                    <span>Follow on Twitter</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-20 lg:py-28">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16">
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Our Mission</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  At the heart of Blue is a mission to spread joy, laughter, and positivity throughout the crypto
                  community and beyond. We believe that memes have the power to unite people, inspire creativity, and
                  make the world a little bit brighter.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Through our charitable initiatives, community events, and ongoing development, we strive to create a
                  more inclusive, sustainable, and fun-filled crypto ecosystem that everyone can enjoy.
                </p>
                <button className="mt-4" variant="secondary">
                  Learn More
                </button>
              </div>
              <div className="flex justify-center">
                <img
                  alt="Blue Mission"
                  className="max-w-full h-auto"
                  height={300}
                  src="/texos.gif"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width={300}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-blue-500 text-white py-6 px-4 md:px-8">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">© 2023 Blue. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a className="hover:underline" href="#">
              Terms of Service
            </a>
            <a className="hover:underline" href="#">
              Privacy Policy
            </a>
            <a className="hover:underline" href="#">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </div>
    </div>
  )
}

function DiamondIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z" />
    </svg>
  )
}


function DiscIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

export default About