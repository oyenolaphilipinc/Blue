import React from 'react'

const About = () => {
  return (
    <div>
        <div className="flex md:hidden justify-center">
        <img src={"/ton.png"} className=''/>
        </div>
        <h1 className="text-center text-5xl pt-12">About</h1>
        <p className='text-center text-lg md:text-[1.2em] pt-12'>$BLUE is a meme coin characterized by its vibrant community and distinctive branding.<br/> With a total supply of 1 billion coins, it offers an accessible entry point for investors interested in the cryptocurrency market.<br/> Despite its humorous origins, $BLUE has garnered attention for its active social media presence and enthusiastic community engagement.<br/> As with any meme coin, potential investors should exercise caution and conduct thorough research before participating in the $BLUE ecosystem..</p>

        <img src={"/tezos-blue-coin-tezos.gif"} className="mx-auto"/>

        <h1 className="text-center pt-16 text-5xl">Why $BLUE</h1>
        <p className="text-center md:text-[1.2em] pt-8">$BLUE is a meme coin characterized by its vibrant community and distinctive branding.<br/> With a total supply of 1 billion coins, it offers an accessible entry point for investors interested in the cryptocurrency market.<br/> Despite its humorous origins, $BLUE has garnered attention for its active social media presence and enthusiastic community engagement.<br/> As with any meme coin, potential investors should exercise caution and conduct thorough research before participating in the $BLUE ecosystem.</p>

        <img src={"/tezos-blue-coin-tezos.gif"} className="mx-auto"/>

        <h1 className="text-center pt-16 text-5xl">HOW TO BUY</h1>
        <h2 className="text-center md:text-3xl pt-8">Set Up Your Ton Wallet:</h2>
        <p className="text-center md:text-[2em] pt-8 md:leading-10">Download and set up a TON-compatible wallet such as<br/> TonKeeper or Tonhub. Fund your wallet with TON tokens.</p>

        <div className="flex">
            <img src={"/tezos-blue-coin-tezos.gif"} className="mx-auto"/>
            <img src={"/tezos-blue-coin-tezos.gif"} className="mx-auto hidden md:flex"/>
        </div>

        <h1 className="text-center pt-16 text-5xl">Connect to DEX:</h1>
        <p className="text-center md:text-3xl pt-8 leading-10">Visit the StonFi/DeDust decentralized exchange (DEX)<br/> platform and connect your Ton wallet.</p>

        <div className="flex">
        <img src={"/tezos-blue-coin-tezos.gif"} className="mx-auto"/>
        <img src={"/tezos-blue-coin-tezos.gif"} className="mx-auto hidden md:flex"/>
        </div>

        <h1 className="text-center pt-16 text-5xl">Buy $BLUE Tokens:</h1>
        <p className="text-center md:text-3xl pt-8 leading-10">Paste the CHERRY contract address (),<br/> and buy your desired amount of CHERRY tokens. Thats it!</p>

        <h1 className="text-center pt-16 text-5xl">JOIN THE COMMUNITY</h1>
        <div className="links flex justify-center pt-6">
            <img src={"/X.png"} className="w-32 h-auto"/>
            <img src={"/tele.png"} />
        </div>
    </div>
    // <div>
    //     <img src={"/ton.png"} height={300} width={300} className="ml-[12rem]" />
    // </div>
  )
}

export default About