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
import "./index.less"

export default function videoPage() {
  const moreLikeList = [
    <ChatrandomIcon />,
    <CoomeetIcon />,
    <FlingsterIcon />,
    <ShagleIcon />,
    <ChatSpinIcon />,
    <OmegleIcon />,
    <OmeIcon />,
    <BazoocamIcon />,
    <ChatrouletteIcon />,
    <DirtyRouletteIcon />,
    <CamsurfIcon />,
    <EmeraldchatIcon />,
    <TinychatIcon />,
  ]

  return (
    <Layout>
      <SEO title="Video chat" description="video chat" />
      <div className="chatrandom-page">
        <section className="top-bg pt-32 text-center text-white pt pb-20">
          <div className="container w-full  mx-auto">
            <h1 className="mb-4 text-4xl">
              ChatSpin: Random Cam Chat with New People
            </h1>
            <p className="leading-6 mb-4">
              Random video chatting has had its peak in the last decade. People
              have been using several platforms for connecting with people to
              find online love and dates. Such a platform comes under the name
              of ChatSpin that has revolutionized the concept of random cam chat
              by providing a new lift to video chatting.
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
            More sites like ChatSpin
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
              Pros & Cons of ChatSpin
            </h2>
            <p className="mb-8">
              ChatSpin is known for its embezzling and unique interface across
              millions of users. Its amazing features have made it known
              throughout the market. When it comes to an understanding of the
              merits and demerits of using this site, you should come across the
              following points as described below.
            </p>
            <strong>Pros</strong>
            <ul className="ml-2">
              <li className="list-dot-item mb-3">
                If you are a premium user at ChatSpin, you can have the most
                exciting experience while chatting randomly with strangers.
              </li>
              <li className="list-dot-item mb-3">
                Users who have a premium membership can pick different gender
                and location filters while chatting randomly across the
                platform.
              </li>
              <li className="list-dot-item mb-3">
                You can enjoy video chatting, voice calling, and texting with
                different people.
              </li>
              <li className="list-dot-item mb-3">
                Users can easily sign up across the platform without providing
                any important credentials.
              </li>
            </ul>
            <strong>Cons</strong>
            <ul className="ml-2">
              <li className="list-dot-item mb-3">
                People can be prone to scams if they do not have any membership
                across ChatSpin.
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
                ChatSpin Specialties
              </h2>
              <ul className="ml-2">
                <li className="list-dot-item mb-3">Real-Time Chatting</li>
              </ul>
              <p className="mb-8">
                You can not only have a video chat with any stranger across
                ChatSpin but even enjoy communicating with them across voice
                chat and through texts.
              </p>
              <ul className="ml-2">
                <li className="list-dot-item mb-3">Location Filtering</li>
              </ul>
              <p className="mb-8">
                You can either go local or even move for international filters
                according to your need.
              </p>
              <ul className="ml-2">
                <li className="list-dot-item mb-3">
                  Choose your Searching Criteria
                </li>
              </ul>
              <p className="mb-8">
                Easily select a gender and filter out all the available users.
              </p>
              <ul className="ml-2">
                <li className="list-dot-item mb-3">
                  Multiple Platforms to Communicate
                </li>
              </ul>
              <p>
                ChatSpin allows you to interact with users through its platform
                for computer, mobile web browser, and Andriod.
              </p>
            </div>
          </section>
        </div>

        <section className="container w-full text-center mx-auto my-28">
          <h2 className="text-theme-text text-4xl leading-tight mb-6">
            Free Random Video Chat Features
          </h2>
          <p className="text-base mb-14 text-center max-w-4xl mx-auto">
            As stated before, ChatSpin has revolutionized the basic concept of
            random video chat. It provides a very exclusive set of special
            features that are recognized among the best webcam chat platforms in
            the market.
          </p>
          <ul className="flex flex-wrap justify-center">
            <li className="who-app-item flex flex-col items-center">
              <WhoApp1Icon />
              <span className="mt-6 leading-6">
                <h3 className="mb-4 text-base">Meet New People</h3>
              </span>
              <p className="text-base mb-14 text-center max-w-4xl mx-auto">
                It is always good to have something new in your life. Find a new
                friend, a relationship to enjoy, or socialize with people with
                ChatSpin.
              </p>
            </li>
            <li className="who-app-item md:mx-6  flex flex-col items-center">
              <WhoApp2Icon />
              <span className="mt-6 leading-6">
                <h3 className="mb-4 text-base"> Cam Chat Filters</h3>
              </span>
              <p className="text-base mb-14 text-center max-w-4xl mx-auto">
                ChatSpin is known for offering multiple face filters to help
                people hide their real identities from other users. There are
                many filters available to hide your face or make your cam chats
                funnier.
              </p>
            </li>
            <li className="who-app-item flex flex-col items-center">
              <WhoApp3Icon />
              <span className="mt-6 leading-6">
                <h3 className="mb-4 text-base">Free Video Chat</h3>
              </span>
              <p className="text-base mb-14 text-center max-w-4xl mx-auto">
                Unlike many other free random cam chat platforms, ChatSpin
                actually helps you have a better hands-on experience with video
                chatting. It bounds up multiple features within the video chat
                to enjoy for free.
              </p>
            </li>
          </ul>
        </section>

        <section className="container w-full  mx-auto my-28">
          <h3 className="text-theme-text text-2xl leading-9 mb-8">
            About ChatSpin
          </h3>
          <p className="mb-8 leading-6">
            Video chat sites became a trend in the 2010s. Since then, ChatSpin
            has made its mark among the top-rated video cam chat sites that have
            connected millions of users. It provides a pertinent environment for
            its users to connect with strangers. Along with that, its
            availability in ten different languages makes it even better.
          </p>
          <p className="mb-8 leading-6">
            ChatSpin has been known as the fastest-growing video cam chat
            website around the world. While making communication easier, it has
            promoted the concepts of secure connections. ChatSpin has believed
            in keeping everything by the law, ensuring that the platform is not
            used by minors across any corner of the world. Its feature set has
            surely attracted a lot of customers across the globe.
          </p>

          <h4 className="leading-6 mb-4 text-xl">How Does ChatSpin Work?</h4>
          <p className="mb-6">
            Using ChatSpin is quite easy and convenient for users. It offers a
            simple interface to its users to initiate their video chat and
            communicate with new people across the video cam chat site. There
            are two basic types of chatting options available across ChatSpin.
            You can use either video chat with new people or even communicate
            with them through texting.
          </p>
          <p className="mb-6">
            For using the video chatting feature on ChatSpin, you are required
            to have an active microphone and video camera. If the user has a
            premium account, they can also cover their faces with effective
            masks to keep anonymity. However, if you are not comfortable with
            communicating through video cam chat, you can use the site's texting
            services. Simply use the 'End Chat' button to conclude a chat with
            the stranger.
          </p>
          <h4 className="leading-6 mb-4 text-xl">Is the ChatSpin Safe?</h4>
          <p className="mb-8">
            ChatSpin has a series of safety measures and regulations available
            that helps the users keep themselves protected. However, people are
            always advised to be safe while connecting on ChatSpin. As everyone
            is allowed to access the free video chat service, they can be
            scammed by users. Premium users are effectively protected with
            anonymity.
          </p>
        </section>

        <section className="container w-full  mx-auto my-28">
          <h3 className="text-theme-text text-4xl leading-tight  mb-12">
            Frequently Asked Questions (FAQs)
          </h3>
          <ul className="flex flex-wrap justify-between">
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">
                What is the minimum age to register for ChatSpin?
              </h5>
              <p>You need to be a minimum of 18 years to use ChatSpin.</p>
            </li>
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">
                Can I save chats with the people that I have communicated with?
              </h5>
              <p>
                ChatSpin does not provide any feature to save chats for all
                types of members.
              </p>
            </li>
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">
                How to delete an account on ChatSpin?
              </h5>
              <p>
                If you wish to delete your account at ChatSpin, you need to
                simply access the ‘My Account’ option on its dashboard and
                proceed to delete it.
              </p>
            </li>
            <li className=" max-w-md">
              <h5 className="mb-4 text-base">
                How can you block someone on ChatSpin?
              </h5>
              <p>
                There is no option of blocking users at ChatSpin. However, the
                user can be reported, which would then be blocked by the
                support.
              </p>
            </li>
            <li className="mb-10 max-w-md  ">
              <h5 className="mb-4 text-base">
                What are the membership prices here at ChatSpin?
              </h5>
              <p className="mb-8">
                If you wish to sign up for the membership of ChatSpin, you can
                consider the following packages:
                <ul className="ml-2">
                  <li className="list-dot-item mb-3">$6.99/week</li>
                  <li className="list-dot-item mb-3">$19.99/month</li>
                  <li className="list-dot-item mb-3">$86.94/six months</li>
                </ul>
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
    </Layout>
  )
}
