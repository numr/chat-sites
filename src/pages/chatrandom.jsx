import React from "react"

import Layout from "/src/components/layout"
import SEO from "/src/components/seo"

import "@fontsource/open-sans"
import "@fontsource/open-sans/600.css"
import "@fontsource/open-sans/700.css"
import "@fontsource/open-sans/800.css"
import chatrandom_bg from "/src/images/chatrandom/chatrandom_bg.png"

import { ReactComponent as ChatrandomIcon } from "/src/images/video/Chatrandom.svg"
import { ReactComponent as CoomeetIcon } from "/src/images/video/Coomeet.svg"
import { ReactComponent as FlingsterIcon } from "/src/images/video/Flingster.svg"
import { ReactComponent as ShagleIcon } from "/src/images/video/Shagle.svg"
import { ReactComponent as ChatSpinIcon } from "/src/images/video/ChatSpin.svg"
import { ReactComponent as OmegleIcon } from "/src/images/video/Omegle.svg"
import { ReactComponent as OmeIcon } from "/src/images/video/Ome.svg"
import { ReactComponent as BazoocamIcon } from "/src/images/video/Bazoocam.svg"
import { ReactComponent as ChatrouletteIcon } from "/src/images/video/Chatroulette.svg"
import { ReactComponent as DirtyRouletteIcon } from "/src/images/video/DirtyRoulette.svg"
import { ReactComponent as CamsurfIcon } from "/src/images/video/Camsurf.svg"
import { ReactComponent as EmeraldchatIcon } from "/src/images/video/Emeraldchat.svg"
import { ReactComponent as TinychatIcon } from "/src/images/video/Tinychat.svg"

import { ReactComponent as WhoApp1Icon } from "/src/images/chatrandom/who-app-1.svg"
import { ReactComponent as WhoApp2Icon } from "/src/images/chatrandom/who-app-2.svg"
import { ReactComponent as WhoApp3Icon } from "/src/images/chatrandom/who-app-3.svg"

import partOneImg from "/src/images/email-lookup.svg"
import partTwoImg from "/src/images/email-lookup.svg"
import "../style/index.less"

export default function videoPage() {
  const moreLikeList = [
    <ChatrandomIcon />,
    <CoomeetIcon />,
    <FlingsterIcon />,
    <ShagleIcon />,
    <ChatSpinIcon />,
    <OmegleIcon/>,
    <OmeIcon/>,
    <BazoocamIcon/>,
    <ChatrouletteIcon/>,
    <DirtyRouletteIcon/>,
    <CamsurfIcon/>,
    <EmeraldchatIcon/>,
    <TinychatIcon/>
  ]

  return (
    <Layout>
      <SEO title="Video chat" description="video chat" />
      <div className="chatrandom-page">
        <section className="top-bg pt-32 text-center text-white pt pb-20">
          <div className="container w-full  mx-auto">
            <h1 className="mb-4 text-4xl">Chatrandom: Free Random Cam Chat</h1>
            <p className="leading-6 mb-4">
            You might be into looking for new friends within your social circle and would be confused about where to start. Although there are many conventional methods of finding and connecting with new people, video chatting platforms have been within the social media setup for a while. Chatrandom is one such example of a free explicit random video chatting platform.

            </p>
          </div>
        </section>

        <section className="iframe-cont container w-full  mx-auto flex justify-center">
          {/* <iframe src="https://chatrandom.com/" frameBorder="0"></iframe> */}
          <a href="https://chatrandom.com/" target="_blank">
            <img
              width="840px"
              src={chatrandom_bg}
              className="chatrandom-img"
              alt="chatrandom"
            />
          </a>
        </section>

        <section className="container w-full  mx-auto my-28 text-center">
          <h2 className="text-theme-text text-4xl leading-tight mb-14">
            More sites like Chatrandom
          </h2>
          <ul className="flex flex-wrap justify-center md:justify-start">
            {moreLikeList.map((it, index) => {
              return (
                <li className="more-like-item" key={index}>
                  {it}
                </li>
              )
            })}
          </ul>
        </section>

        <section className="container w-full mx-auto my-28 flex flex-wrap text-base">
          <div className="max-w-xl md:mr-24">
            <h2 className="text-theme-text text-4xl leading-tight mb-8">
            Chatrandom Key Features
            </h2>
            <p className="mb-8">
            Chatrandom features a very effective example of a video chatting platform providing hands-on experience to free random cam chat. Chatrandom is referred to among the pioneers of the ideology, which has been observed across the features provided to its users. People who wish to enjoy Chatrandom can work over the following features:

            </p>
            <ul className="ml-2">
              <li className="list-dot-item mb-3">
              Live video chatting with strangers has been made possible with Chatrandom. The platform features users to interact with people of different tastes and choices.
              </li>
              <li className="list-dot-item mb-3">
              You can easily filter your search by gender, helping you to avoid any awkward situations with strangers.

              </li>
              <li className="list-dot-item mb-3">
              Does not require any signup or registrations from users.

              </li>
              <li className="list-dot-item mb-3">
              It supports ten different languages, allowing people of diverse cultures to use the application. 

              </li>

            </ul>
          </div>
          <div className="max-w-sm flex items-senter">
            <img src={partOneImg} alt="feature icon" />
          </div>
        </section>

        <div className="bg-block-bg py-16">
          <section className="container w-full  mx-auto flex  flex-wrap text-base">
            <div className="max-w-sm flex items-senter">
              <img src={partTwoImg} alt="feature icon" />
            </div>
            <div className="max-w-xl md:ml-24">
              <h2 className="text-theme-text text-4xl leading-tight mb-8">
              What Makes Chatrandom Unique?

              </h2>
              <p className="mb-8">
              There are multiple cam chat platforms that are available across the market. However, what makes a platform unique is the service that is being offered to its user. There are several reasons that have made Chatrandom a unique random chat service.
              </p>
              <ul className="ml-2">
              <li className="list-dot-item mb-3">
              Chatrandom offers plentiful user-friendliness to its consumers so that they can easily chat with strangers.              </li>
              <li className="list-dot-item mb-3">
              The platform is quite popular with the adequacy offered to its user in expressing and exclaiming their personality as they wish to.
              </li>
              <li className="list-dot-item mb-3">
              Chatrandom has a very large consumer usage throughout the world. This has been due to the integration of various websites with the platform by installing chat technology with the system. This promoted a normal count of 100,000 live users across the platform.
              </li>

            </ul>
          </div>
          <div className="max-w-sm flex items-senter">
            <img src={partOneImg} alt="feature icon" />
          </div>
        </section>

        <section className="container w-full text-center mx-auto my-28">
          <h2 className="text-theme-text text-4xl leading-tight mb-6">
          Why Chatrandom is the Best Free Random Cam Chat?

          </h2>
          <p className="text-base mb-14 text-center max-w-4xl mx-auto">
          Chatrandom provides its customers with a very proficient application layout to interact with. With impressive usability and functionality for the people who consider interacting with strangers; Chatrandom can be regarded among the best free random cam chat.
          </p>
          <ul className="flex flex-wrap justify-center">
            <li className="who-app-item flex flex-col items-center">
              <WhoApp1Icon />
              <span className="mt-6 leading-6">
              Random Gay Chat
              </span>
            </li>
            <li className="who-app-item md:mx-6  flex flex-col items-center">
              <WhoApp2Icon />
              <span className="mt-6 leading-6">
              Chatrandom allows gays, bisexuals, and men to interact with each other by keeping their search sustained in a very delightful manner.
              </span>
            </li>
            <li className="who-app-item flex flex-col items-center">
              <WhoApp3Icon />
              <span className="mt-6 leading-6">
              Chatrandom provides you with the perfect environment to meet and flirt with people all around the world. Its random cam chat feature allows you to interact with people of different cultures and diverse fondness.
              </span>
            </li>
          </ul>
        </section>

        <section className="container w-full  mx-auto my-28">
          <h3 className="text-theme-text text-2xl leading-9 mb-8">
            About Chatrandom
          </h3>
          <p className="mb-8 leading-6">
          Chatrandom started its venture back in 2011 as a one-of-a-kind free webcam-based chatting platform. The developers here at Chatrandom believed in influencing a simpler platform with different strangers. While operating it across a multidimensional format, people were actually able to instantly meet new people and interact with them. This allowed Chatrandom to inherit hundreds of thousands of daily active users.
          </p>
          <p className="mb-8 leading-6">
          The site has active memberships of hundreds of thousands of people, who all are under the provision of being older than 18 years. The platform also maintains a full-time monitoring system that keeps a check across all the illegal activities and shuts down users who do not fulfill their terms.
          </p>
          <h4 className="leading-6 mb-4 text-xl">
          Is Chatrandom really safe?
          </h4>
          <p className="mb-6">
          Although many people question the anonymity and privacy of such platforms, Chatrandom offers them a variety of chat options. With multiple filters like gender-based differences, Chatrandom made it clear to its user market that anonymity and privacy are the only factors that are primarily looked over within their system.
          </p>
          <p className="mb-6">
          Chatrandom believes that safety and security can be ensured by the users themselves. When they would have a sense of responsibility while interacting with strangers, there is not much that would be put at stake. The platform has put out some rules that are to be followed in every case. Along with that, Chatrandom provides anonymity to its users that makes it a safe option in the random chat market.
          </p>
          <h4 className="leading-6 mb-4 text-xl">
          How Does Chatrandom Work?

          </h4>
          <p className="mb-6">
          This random cam chat platform features a unique way of allowing people to interact with strangers. As most platforms have the issue relating to minors, Chatrandom provides a different approach in managing the case. With no signups or registrations required, Chatrandom not only keeps anonymity but utilizes a different way to assess people.
          </p>
          <p className="mb-6">
          The platform keeps a monitoring check across their users to recognize any illegal activity or minor that is underway. Thus, it not only helps people communicate thoroughly with strangers but also helps ensure a safer environment for its user.
          </p>


          <ul className="bg-block-bg p-4 mb-10">
            <li className="list-checkout-item">Send & Receive Faxe</li>
            <li className="list-checkout-item">Safe, Secure & Encry</li>
            <li className="list-checkout-item">
              No Fax Maintenance or Phone Charges
            </li>
            <li className="list-checkout-item">
              View, Crop, Edit & Annotate Faxes
            </li>
          </ul>
          <h4 className="leading-6 mb-4 text-xl">
            Using your Google Voice number for faxing
          </h4>
          <p className="mb-8">
            Here are some of the advantages of porting out your Google Voice
            number to and send and receive fax using Google Voice:
          </p>
          <p>
            Always available: Regardless of your internet connection status,
            your fax number is always active and ready to receive faxes. You’ll
            be notified via email and push notification as soon as there is a
            new fax in your inbox, and you can easily check your fax archives
            using application on different platforms (See where to download the
            CocoFinder application)
          </p>
        </section>

        <section className="container w-full  mx-auto my-28">
          <h3 className="text-theme-text text-4xl leading-tight  mb-12">
            Frequently Asked Questions (FAQs)
          </h3>
          <ul className="flex flex-wrap justify-between">
            <li className="mb-10 max-w-md  ">
              <h5 className="mb-4 text-base">
              How to delete a Chatrandom account?

              </h5>
              <p>
              There are multiple ways that can help you allow deleting a Chatrandom account. Although you can simply uninstall the application from your device, you can also contact them through email. Ask the authorities to erase your data under the laws of GDPR or CCPA from their servers.
              </p>
            </li>
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">
              How to message someone on Chatrandom?

              </h5>
              <p>
              It is extremely easy to message someone on Chatrandom. As the site maintains anonymity, you need to install the platform, tap on ‘Start’ and wait for the platform to connect you with any random stranger.
              </p>
            </li>
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">How to see who likes you on Chatrandom without paying?
</h5>
              <p>
              This is completely based on the instincts of the user themselves. They are to judge whether the stranger they have been talking to likes them or not. The longer the screen time they have, the better are the chances for the other person to like you.
              </p>
            </li>
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">How to block someone on Chatrandom?
</h5>
              <p>
              The website maintains anonymity and does not take any personal information from any user. Thus, there are no credentials that are available to be blocked. Users can simply turn off a random video chat if they do not like conversing with someone. Although, they can surely report any activity that they have found offending.
              </p>
            </li>
            <li className=" max-w-md">
              <h5 className="mb-4 text-base">
              How to cancel a Chatrandom subscription?

              </h5>
              <p>
              As this platform is available across Google Play Store, you need to open the Play Store. Access the google account across which the account has been made. Tap on 'Menu' and lead into 'Subscriptions.' Select Chatrandom application from the list and tap on 'Cancel Subscription.'
              </p>
            </li>
          </ul>
        </section>

        <section className="container w-full text-center mx-auto my-28">
          <h3 className="text-theme-text text-4xl leading-tight  mb-12">
            Related searches to tenancy agreement form download
          </h3>
          <ul className="flex flex-wrap justify-center">
            {[
              "Australia",
              "Bhutan",
              "Canada",
              "France",
              "India",
              "lreland",
              "Korea",
              "Malaysia",
              "Mexico",
              "New Zealand",
              "Onair",
              "Singapore",
              "South Africa",
              "United Arab Emirates",
              "United Kingdom",
            ].map(it => {
              return (
                <li className="mx-4 tag-item mb-4 px-4 py-1" key={it}>
                  {it}
                </li>
              )
            })}
          </ul>
        </section>
        </div>
      </div>
    </Layout>
  )
}
