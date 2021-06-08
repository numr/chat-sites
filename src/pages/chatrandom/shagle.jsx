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
              Shagle: Webcam Chat with Real People
            </h1>
            <p className="leading-6 mb-4">
              It is considered extremely healthy to socialize and communicate
              with people of different cultures. You get to know more about the
              communities across the world and even make friends all along with
              this. Shagle is a very effective option for webcam chat which
              provides you with millions of options for random video chatting.
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
            More sites like Shagle
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
              Webcam Chat Worldwide
            </h2>
            <p className="mb-8">
              Shagle has established its position within the webcam chat and
              online dating platforms as a top-growing random video chat
              platform. It has introduced a very easy and convenient interface
              to millions of users that have allowed them to communicate with
              users from all around the world. Shagle promotes its users to make
              friendships and relationships that can last long enough and be
              pleasurable.
            </p>
            <p className="mb-8">
              Its efficient chat room design and instant connectivity feature
              have made it top among the best random webcam chat sites. Along
              with that, its free online chatting system has allowed people to
              easily interact with users belonging from varied locations.
            </p>
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
                Free Random Video Chat
              </h2>
              <p className="mb-8">
                One of the most important highlights at Shagle is its free
                online system. It offers its users the simplest environment to
                interact with people of different cultures, races, and
                ethnicity. Shagle provides them the autonomy to widen their
                circles and get to know more about the world for free. This has
                allowed Shagle to grab the attention of millions of users in no
                time.
              </p>
              <p>
                Shagle has crossed a barrier of one billion connections that
                have been made possible with its free random chatting service.
                Thousands of daily online users are available across the
                platform, which makes it very easy for people to connect with
                users of their choice.
              </p>
            </div>
          </section>
        </div>

        <section className="container w-full text-center mx-auto my-28">
          <h2 className="text-theme-text text-4xl leading-tight mb-6">
            What Makes Shagle Unique?
          </h2>
          <p className="text-base mb-14 text-center max-w-4xl mx-auto">
            There are many factors that have allowed Shagle to include itself in
            the list of the best cam chat sites of all times. Its usability has
            made connections easier and convenient.
          </p>
          <ul className="flex flex-wrap justify-center">
            <li className="who-app-item flex flex-col items-center">
              <WhoApp1Icon />
              <span className="mt-6 leading-6">
                <h3 className="mb-4 text-base">Live Chat Worldwide</h3>
              </span>
              <p className="text-base mb-14 text-center max-w-4xl mx-auto">
                Live chatting has been made possible with Shagle's updated and
                online community. Thousands of daily users help you meet people
                belonging from various countries and continents.
              </p>
            </li>
            <li className="who-app-item md:mx-6  flex flex-col items-center">
              <WhoApp2Icon />
              <span className="mt-6 leading-6">
                <h3 className="mb-4 text-base">Random Cam Chat Online</h3>
              </span>
              <p className="text-base mb-14 text-center max-w-4xl mx-auto">
                Shagle has made online interaction smooth and easy with its
                random cam chat service. It helps people initiate a chat induced
                in multiple features without providing any personal details.
              </p>
            </li>
            <li className="who-app-item flex flex-col items-center">
              <WhoApp3Icon />
              <span className="mt-6 leading-6">
                <h3 className="mb-4 text-base">Meet Real People</h3>
              </span>
              <p className="text-base mb-14 text-center max-w-4xl mx-auto">
                There are no bots associated with Shagle and its service. All
                the users that you interact with are completely real and
                authentic. There are no scams involved at Shagle.
              </p>
            </li>
          </ul>
        </section>

        <section className="container w-full  mx-auto my-28">
          <h3 className="text-theme-text text-2xl leading-9 mb-8">
            About Shagle
          </h3>
          <p className="mb-8 leading-6">
            Shagle sets itself as the ideal solution to effortless online cam
            chat. It enables people to interact with users by setting up various
            filters at their discretion. Shagle has instantly grown to become
            one of the most important cam chat services in the market. The
            platform has made it extremely simple for people to have their first
            experience in online cam chatting.
          </p>
          <p className="mb-8 leading-6">
            You have the autonomy to select the method of communication with the
            stranger. It is completely up to the discretion of the user to have
            a text, voice, or video chat with the person they connect with.
            Shagle ensures that the user has an up-to-the-mark experience across
            the website platform and mobile application.
          </p>
          <h4 className="leading-6 mb-4 text-xl">How Does Shagle Work?</h4>
          <p className="mb-6">
            It is extremely simple to start an online cam chat at Shagle. The
            platform does not require any registration or sign-ups for
            communicating with people. The user has to specify their gender and
            proceed with tapping 'Start Chatting'. Following this, they are also
            required to agree to the terms and conditions set up by the
            platform. It is to be kept in mind that the user should be above the
            age of 18 years for using Shagle.
          </p>
          <p className="mb-6">
            Once the user has started the search for a match, the platform would
            demand access to their microphone and camera. You can now easily
            start communicating with different people at Shagle.
          </p>
          <h4 className="leading-6 mb-4 text-xl">Is Shagle Safe?</h4>
          <p className="mb-8">
            Shagle provides a free online cam chat service to its users.
            However, it keeps a very safe environment that ensures the security
            of the user. There is a pertinent monitoring system that allows the
            moderators to keep away all kinds of scams from their service. Along
            with that, Shagle keeps up a simple interface as compared to other
            cam chat systems.
          </p>
          <p>
            This is what made it extremely popular among people. Shagle offers
            anonymity to its users that prevents them from sharing any personal
            information that might endanger their identity.
          </p>
        </section>

        <section className="container w-full  mx-auto my-28">
          <h3 className="text-theme-text text-4xl leading-tight  mb-12">
            Frequently Asked Questions (FAQs)
          </h3>
          <ul className="flex flex-wrap justify-between">
            <li className="mb-10 max-w-md  ">
              <h5 className="mb-4 text-base">
                What are the key features offered at Shagle?
              </h5>
              <p>
                Users at Shagle can have different kinds of chatting with
                people, which comprises voice and video chat. It provides them
                the ability to set up a gender filter and keep everything
                discreet for users. People can even send virtual gifts to each
                other at Shagle.
              </p>
            </li>
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">
                Is it free to use the live cam chat of Shagle?
              </h5>
              <p>
                Shagle provides a 100% free environment to its users for live
                cam chatting.
              </p>
            </li>
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">Can I use Shagle on my phone?</h5>
              <p>
                There is a mobile variation for Android and iOS users that helps
                them use Shagle efficiently on their devices.
              </p>
            </li>
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">
                {" "}
                Does Shagle record my conversations?
              </h5>
              <p>
                Shagle does not keep any records of the conversations that are
                being done by the user. They realize the privacy of the user and
                intend to keep it sustained.
              </p>
            </li>
            <li className=" max-w-md">
              <h5 className="mb-4 text-base">
                How to delete an account on Shagle?
              </h5>
              <p>
                You can easily delete your account from Shagle by tapping on the
                top-right option present on its interface. Select 'My Account'
                followed by 'Delete My Account' to conclude the process.
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
