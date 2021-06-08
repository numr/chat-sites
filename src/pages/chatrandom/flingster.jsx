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
              Flingster: Random Chat & Meet Friends Online
            </h1>
            <p className="leading-6 mb-4">
              Online dating has been a whole new concept for the youth. It has
              presented them with an ability to interact with people without
              meeting them in physical form. Flingster is a very proficient
              example of free video cam chat that has amazed people with its
              efficient system and effective environment. People who have no
              energy to go through finding the right person can consider
              Flingster for mingling.
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
            More sites like Flingster
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
              Have More Fun to Meet Online Friends
            </h2>
            <p className="mb-8">
              If you want to have real experience in online dating, Flingster is
              the best option that you can have to meet new people. This website
              provides you the options of interacting with new people of various
              cultures, out of whom you may find a person to have a good
              relationship with. Flingster makes online dating easy and
              convenient. Set up your profile within a matter of a few clicks.
            </p>
            <p className="mb-8">
              This free random video chat platform allows you to get straight to
              business with the stranger. It exempts all versions of awkwardness
              within the interaction and provides you the best environment to
              have a great video chat.
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
                What Makes Flingster Special?
              </h2>
              <p className="mb-8">
                Flingster has always been aware of the real deal with its users.
                It offers them very clear and effective messaging and video
                communication with strangers. Along with these basic features
                that are made available to all users, there are several other
                characteristics that are believed to make Flingster special.
              </p>
              <ul className="bg-block-bg p-4 mb-10">
                <li className="list-checkout-item">
                  Flingster offers its users the perfect identity hiding
                  features. Users can keep their anonymity while keeping their
                  identity covered through face filters.
                </li>
                <li className="list-checkout-item">
                  As this website welcomes people from all around the world,
                  Flingster believes in providing access to multiple languages.
                  This has allowed people to communicate easily with people of
                  different languages. Flingster broke the barriers to
                  international communication with its intuitive translation
                  feature.
                </li>
              </ul>
            </div>
          </section>
        </div>

        <section className="container w-full text-center mx-auto my-28">
          <h2 className="text-theme-text text-4xl leading-tight mb-6">
            Why Flingster is the Best Site to Make Friends Online?
          </h2>
          <p className="text-base mb-14 text-center max-w-4xl mx-auto">
            It is without a doubt that Flingster offers a monumental experience
            to its users with mingling cam chats. Video communication is
            exceptionally fast with Flingster, making it easier for people to
            meet strangers.
          </p>
          <ul className="flex flex-wrap justify-center">
            <li className="who-app-item flex flex-col items-center">
              <WhoApp1Icon />
              <span className="mt-6 leading-6">
                <h3 className="mb-4 text-base">Talk with Strangers</h3>
              </span>
              <p className="text-base mb-14 text-center max-w-4xl mx-auto">
                Flingster introduces a very coherent system of communication
                that immediately connects you with strangers. You can look
                forward to having a very good time interacting with them.
              </p>
            </li>
            <li className="who-app-item md:mx-6  flex flex-col items-center">
              <WhoApp2Icon />
              <span className="mt-6 leading-6">
                <h3 className="mb-4 text-base">Random Video Chat</h3>
              </span>
              <p className="text-base mb-14 text-center max-w-4xl mx-auto">
                Users who are serious about online dating should always look to
                have a very good random video chat at Flingster. Flingster
                provides you to have a perfect match that you could definitely
                enjoy spending time with.
              </p>
            </li>
            <li className="who-app-item flex flex-col items-center">
              <WhoApp3Icon />
              <span className="mt-6 leading-6">
                <h3 className="mb-4 text-base">Anonymous Chat</h3>
              </span>
              <p className="text-base mb-14 text-center max-w-4xl mx-auto">
                Keep your identity anonymous while communicating in Flingster.
                The website provides a variety of facial filters that you can
                use to keep your real identity hidden.
              </p>
            </li>
          </ul>
        </section>

        <section className="container w-full  mx-auto my-28">
          <h3 className="text-theme-text text-2xl leading-9 mb-8">
            About Flingster
          </h3>
          <p className="mb-8 leading-6">
            Flingster is renowned among the state-of-the-art video cam chat
            platforms that have innovated the system with their competent
            structure. It has provided users access to online dating that is far
            more serious and adequate in comparison. The platform is designed
            across a very convenient interface that has made its utility easier.
          </p>
          <p className="mb-8 leading-6">
            There are hundreds of thousands of users that are using Flingster as
            their basic online dating site. However, with a very coherent number
            of daily online users, it is never difficult to get connected with
            people. Flingster offers very little waiting time to its users for
            video chat communication.
          </p>
          <h4 className="leading-6 mb-4 text-xl">How Does Flingster Work?</h4>
          <p className="mb-6">
            The operation of the website is extremely easy and smooth. Users do
            not find difficulty starting a video cam chat as Flingster has made
            communication easy. With a very fast registration service, you can
            easily log into the website and start using its services.
            Communicating across Flingster is carried out through two means.
          </p>
          <p className="mb-6">
            You can consider interacting with other users through texting and
            can go through video communication as per your discretion. Users
            with member subscriptions are even offered the autonomy to select
            the gender and location for their video chat. Along with that, they
            can have their messages translated easily into the required
            language, allowing them to understand their partner.
          </p>

          <h4 className="leading-6 mb-4 text-xl">Is the Site 100% Safe?</h4>
          <p className="mb-8">
            Flingster has revolutionized the concepts of online dating with its
            efficient system. It offers its users a very safe and secure
            platform that would keep them away from all kinds of scams. Using
            Flingster for online dating is extremely secure. It even verifies
            the legitimacy of the user with quality badges. This makes it easier
            for users to communicate with profiles that have a popular opinion
            within Flingster.
          </p>
        </section>

        <section className="container w-full  mx-auto my-28">
          <h3 className="text-theme-text text-2xl leading-9 mb-8">
            Pros & Cons of Flingster
          </h3>
          <strong>Pros</strong>
          <ul className="ml-2">
            <li className="list-dot-item mb-3">
              It has a very potent operating principle that allows people to
              meet different strangers.
            </li>
            <li className="list-dot-item mb-3">
              Allows you to have an intimate and serious relationship with
              people that you connect with.
            </li>
            <li className="list-dot-item mb-3">
              There are no email confirmations associated while using Flingster
              for online dating.
            </li>
            <li className="list-dot-item mb-3">
              Users are provided with no restrictions while communicating with
              people. They can interact with as many people through video cam
              chat as they want to.
            </li>
          </ul>
          <strong>Cons</strong>
          <ul className="ml-2">
            <li className="list-dot-item mb-3">
              There is no mobile application available for Flingster. Users can
              only communicate and connect through its online website.
            </li>
          </ul>
        </section>

        <section className="container w-full  mx-auto my-28">
          <h3 className="text-theme-text text-4xl leading-tight  mb-12">
            Frequently Asked Questions (FAQs)
          </h3>
          <ul className="flex flex-wrap justify-between">
            <li className="mb-10 max-w-md  ">
              <h5 className="mb-4 text-base">
                How to start a video chat at Flingster?
              </h5>
              <p>
                Flingster smoothly connects you with another user within 30
                seconds after you tap on the ‘Start Chatting’ button.
              </p>
            </li>
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">
                How to block someone on Flingster?
              </h5>
              <p>
                It is extremely easy for you to block someone on the platform.
                Access the profile of the user that you do not wish to interact
                with and select ‘Block’ from the drop-down menu.
              </p>
            </li>
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">
                Who processes the payments on Flingster?
              </h5>
              <p>
                All payments made across the platform are trusted by a
                third-party service, Segpay. It holds all of the transactions
                that have been carried out on Flingster.
              </p>
            </li>
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">
                How to delete an account on Flingster?
              </h5>
              <p>
                If you wish to delete your account, you need to access your
                profile and select the option of deleting your account from the
                Settings tab.
              </p>
            </li>
            <li className=" max-w-md">
              <h5 className="mb-4 text-base">
                What are the billing plans for Flingster?
              </h5>
              <p>
                Users who seek to buy a payment plan for Flingster membership
                can sign up for the following plans.
                <ul className="ml-2">
                  <li className="list-dot-item mb-3">$6.99/week</li>
                  <li className="list-dot-item mb-3">$19.99/month</li>
                  <li className="list-dot-item mb-3">$89.94/six months</li>
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
