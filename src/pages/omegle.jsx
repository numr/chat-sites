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
import "./video/index.less"

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
              Omegle: Random Video Chat with Strangers Worldwide
            </h1>
            <p className="leading-6 mb-4">
              Do you wish to have an exceptional experience in video chatting?
              Enjoy a lag less experience with Omegle while chatting up with new
              people and making up new friendships and relationships. Omegle
              provides you with the best platform for having a random cam chat
              with strangers all around the world.
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
            More sites like Omegle
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
              Pros & Cons of Omegle
            </h2>
            <strong>Pros</strong>
            <ul className="ml-2">
              <li className="list-dot-item mb-3">
                This website can be the easiest way for you to interact with
                strangers. Omegle does not require any lengthy signups and
                related procedures for you to start using it.
              </li>
              <li className="list-dot-item mb-3">
                No registration is required across Omegle.
              </li>
              <li className="list-dot-item mb-3">
                Omegle offers you to keep anonymity while interacting with
                strangers.
              </li>
              <li className="list-dot-item mb-3">
                It is available in multiple languages, helping people of
                different languages and cultures to meet each other.
              </li>
            </ul>
            <strong>Cons</strong>
            <ul className="ml-2">
              <li className="list-dot-item mb-3">
                Users who look for serious online dating should not consider
                Omegle as their primary choice. There is no associated
                information provided related to the stranger in Omegle.
              </li>
              <li className="list-dot-item mb-3">
                There are no filters that would help cater to difficulties in
                finding an appropriate match.
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
                Omegle Features
              </h2>
              <p className="mb-8">
                Omegle has developed and improved its structure ever since it
                has been ruling the random video chatting platforms. It has
                promised users a variety of features that can help people get a
                breathtaking experience in communicating with strangers. As
                Omegle introduced itself as a random texting platform, it
                introduced a lot of features into its system, which is stated as
                follows.
              </p>
              <ul className="ml-2">
                <li className="list-dot-item mb-3">
                  One of the most basic features offered at Omegle is its video
                  chat mode. You are required to have a microphone and webcam to
                  enjoy this feature.
                </li>
                <li className="list-dot-item mb-3">
                  Omegle even offers a spy mode where you can initiate
                  communication amongst two random people with no interference.
                </li>
                <li className="list-dot-item mb-3">
                  You can set up your own choice of communicating with people.
                  This has been made possible with the help of interest tags
                  that allows you to mention your requirements while finding an
                  appropriate match.
                </li>
              </ul>
            </div>
          </section>
        </div>
        <section className="container w-full text-center mx-auto my-28">
          <h2 className="text-theme-text text-4xl leading-tight mb-6">
            Why is Omegle the Best Random Video Chat?
          </h2>
          <p className="text-base mb-14 text-center max-w-4xl mx-auto">
            Omegle has settled itself as one of the best options to communicate
            with new strangers. It has developed quite a popularity among the
            youth.
          </p>

          <ul className="flex flex-wrap justify-center">
            <li className="who-app-item flex flex-col items-center">
              <WhoApp1Icon />
              <span className="mt-6 leading-6">
                <h3 className="mb-4 text-base"> Talk to Strangers Worldwide</h3>
              </span>
              <p className="text-base mb-14 text-center max-w-4xl mx-auto">
                Omegle is not bound by continents or locations. It lets you meet
                people of diverse cultures, races, and characteristics. You
                might be in luck to find a friendship that lasts long enough.
              </p>
            </li>
            <li className="who-app-item md:mx-6  flex flex-col items-center">
              <WhoApp2Icon />
              <span className="mt-6 leading-6">
                <h3 className="mb-4 text-base">Random Video Chat</h3>
              </span>
              <p className="text-base mb-14 text-center max-w-4xl mx-auto">
                The website attaches you with the best possible match that you
                can randomly video chat with. It provides an everlasting
                experience with its efficient video chatting system.
              </p>
            </li>
            <li className="who-app-item flex flex-col items-center">
              <WhoApp3Icon />
              <span className="mt-6 leading-6">
                <h3 className="mb-4 text-base">Free Video Chat</h3>
              </span>
              <p className="text-base mb-14 text-center max-w-4xl mx-auto">
                You can effectively communicate with Omegle without paying a
                single penny. There is no need to register an account on Omegle
                and consume its free video chat service.
              </p>
            </li>
          </ul>
        </section>

        <section className="container w-full  mx-auto my-28">
          <h3 className="text-theme-text text-2xl leading-9 mb-8">
            About  Omegle
          </h3>
          <p className="mb-8 leading-6">
            Omegle started its venture of a free online chat room in 2009 and
            grasped the worldwide attention of millions of users. Within a year,
            it settled itself as a video chatting platform that connected users
            of different cultures, choices, and types. Omegle made itself
            prominent as a platform that provided users with the facility to
            interact and enjoy with strangers for free.
          </p>
          <p className="mb-8 leading-6">
            The platform offers you the option of video chatting or texting with
            users. Along with that, it keeps a safe and secure system while
            interacting with people in other locations. Omegle has made random
            video chat easier; and has allowed people to develop relationships
            and friendships through online means.
          </p>
          <h4 className="leading-6 mb-4 text-xl">How Does Omegle Work?</h4>
          <p className="mb-6">
            Omegle provides a very simple and intuitive interface to initiate
            random cam chats. Its most prominent requirements request users to
            have an updated browser. Following this, you need to access the
            website and simply start searching for a match to interact with.
            However, before searching for a match, you are provided the autonomy
            to select an interesting tag that would make the search better.
          </p>
          <p className="mb-6">
            This is the most that is required from the user who wishes to use
            Omegle. Along with this, you can also select the option of texting
            strangers or have a video chat with them.
          </p>
          <h4 className="leading-6 mb-4 text-xl">Is Omegle Safe?</h4>
          <p className="mb-8">
            The platform has kept a very convenient system of user protection
            that has made it accounted among the best video chatting platforms
            in the market. Omegle keeps a monitoring system across its chats,
            ensuring that everything is kept under ethical and legal bounds.
            This helps protect the anonymity and integrity of the user. Users
            are even allowed to keep their identity hidden as long as they wish
            to.
          </p>
          <p>
            Omegle has added another feature for effective protection from bots.
            With the help of redefined ReCAPTCHA's security, users
            are secured from getting matched with bots.
          </p>
        </section>

        <section className="container w-full  mx-auto my-28">
          <h3 className="text-theme-text text-4xl leading-tight  mb-12">
            Frequently Asked Questions (FAQs)
          </h3>
          <ul className="flex flex-wrap justify-between">
            <li className="mb-10 max-w-md  ">
              <h5 className="mb-4 text-base">
                Does Omegle offer any mobile applications?
              </h5>
              <p>
                Omegle is only accessible through its website. There is no
                mobile application available for the users. However, you can use
                Omegle across the computer as well as the mobile phone through
                an appropriate browser.
              </p>
            </li>
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">
                Is my chat monitored by Omegle?
              </h5>
              <p>
                The platform has a very particular condition over monitoring the
                video cam chat of its users. While keeping all information
                secure, Omegle ensures that there are no immoral or illegal acts
                within the platform.
              </p>
            </li>
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">Is Omegle good for kids?</h5>
              <p>
                Omegle allows users greater than 18 years to use the platform
                for communicating with new people. However, it is not convenient
                for younger kids to indulge in such platforms.
              </p>
            </li>
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">Is Omegle safe to use?</h5>
              <p>
                Users are provided with a safe environment to communicate with
                different people. A moderated system prevails across Omegle that
                helps them exempt all chances of adult content.
              </p>
            </li>
            <li className=" max-w-md">
              <h5 className="mb-4 text-base">
                Are there any payment charges for using Omegle?
              </h5>
              <p>
                Omegle is a completely free platform that provides its users
                with a free random video cam chat service. There are no hidden
                charges present within Omegle.
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
