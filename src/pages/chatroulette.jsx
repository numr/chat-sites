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
            <h1 className="mb-4 text-4xl">Chatroulette</h1>
            <p className="leading-6 mb-4">
              Chatroulette is so feature-loaded and easy to use that it already
              has a lot of websites modelled after it. In this article, we will
              be reviewing some of its special features, how it works as well as
              address some of the most frequently asked questions about the
              video chat website.
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
            More sites like Chatroulette
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
              Video Chat Roulette for You
            </h2>
            <p className="mb-8">
              Do you want to meet new people, catch unlimited fun, meet new
              dating partners or arrange a one-night stand with someone hot? If
              yes, Chatroulette is the video chat roulette for you. The ability
              to use the website without paying any fees or registering with
              your email makes it very appealing to many users. The interface is
              also simple, non-clustered and designed to be easy for you to
              operate.
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
                Safety, Anonymity &amp; Comfort
              </h2>
              <p className="mb-8">
                The blur feature and chat filter make it one of the best video
                cam websites to use if you want to remain anonymous. That is,
                you strike conversations with tens of individuals in a day
                without their recognizing your looks. The facial recognition
                verification also makes it very safe to use as all users of the
                website are verified. It also has a strict privacy policy and
                violators of these terms are banned from using the site.
              </p>
            </div>
          </section>
        </div>

        <section className="container w-full text-center mx-auto my-28">
          <h2 className="text-theme-text text-4xl leading-tight mb-6">
            How Does Chatroulette Compare with Other Similar Platform
          </h2>
          <p className="text-base mb-14 text-center max-w-4xl mx-auto">
            Chatroulette is one of the first video chat websites - for meeting
            random strangers – to grace the internet. Its pioneer status makes
            it one of the most visited sites by people who want to meet new
            friends online. However, that’s not the only reason for its
            popularity. It is feature-loaded, easy to use, has an attractive
            interface and does not require users to register or sign up to use
            the website.
          </p>
          <ul className="flex flex-wrap justify-center">
            <li className="who-app-item flex flex-col items-center">
              <WhoApp1Icon />
              <span className="mt-6 leading-6">
                <h3 className="mb-4 text-base">Gay Video Chat</h3>
              </span>
              <p className="text-base mb-14 text-center max-w-4xl mx-auto">
                At the tap of a button, you get to see tens of men who love to
                get naughty. Because of its many regular users, you are assured
                of meeting an element of surprise each time you visit.
              </p>
            </li>
            <li className="who-app-item md:mx-6  flex flex-col items-center">
              <WhoApp2Icon />
              <span className="mt-6 leading-6">
                <h3 className="mb-4 text-base">Random Cam Chat like Omegle</h3>
              </span>
              <p className="text-base mb-14 text-center max-w-4xl mx-auto">
                Just like Omegle, its algorithm matches people with random
                people on the internet. Using this platform, users can arrange
                dates with themselves, catch fun and make new friends in
                general.
              </p>
            </li>
            <li className="who-app-item flex flex-col items-center">
              <WhoApp3Icon />
              <span className="mt-6 leading-6">
                <h3 className="mb-4 text-base">Match and Chat</h3>
              </span>
              <p className="text-base mb-14 text-center max-w-4xl mx-auto">
                One the platform matches you with another individual, you can
                begin chatting. Indeed, you do not have to sign up or do any
                email registration to use the platform’s premium features.
              </p>
            </li>
          </ul>
        </section>

        <section className="container w-full  mx-auto my-28">
          <h3 className="text-theme-text text-2xl leading-9 mb-8">
            About Chatroulette
          </h3>
          <p className="mb-8 leading-6">
            It is no news that chat roulette has been in existence since as far
            back as 2009 when it was created by a 17-year-old. Since that time,
            it has been patronized by a lot of celebrities including pop star,
            Justin Bieber. It has also seen a lot of evolutions and
            modifications to its matching algorithm, user interface and working
            mechanism. It is a gay roulette website that pairs you with some of
            the naughtiest gays on the planet. However, it isn’t only for gays.
            You can use the cam-to-cam website to meet people of other sexual
            orientations. It serves the purpose of connecting people interested
            in making causal relationships as well as people who want more out
            of a relationship.
          </p>
          <h4 className="leading-6 mb-4 text-xl">
            How Does Chatroulette Works
          </h4>
          <p className="mb-6">
            The algorithm of this cam chat website is quite easy to understand.
            Once you begin by clicking the ‘Start’ button11, you are paired with
            a random individual miles away from you who you can communicate with
            on almost any topic. Rather than relate with people on video cam,
            you may choose to chat instead. Under this option you are allowed to
            pick any of these three options – random, filtered and unfiltered.
          </p>
          <p className="mb-6">
            Random takes you to any filtered or unfiltered chat. Therefore, you
            may expect to see some adult content if you choose to go with this
            category. If you do not want any adult content, the filtered chat
            type is the world to explore. The unfiltered chat type allows you to
            share unlimited adult content. However, it is not for use by users
            below the legal age of 18 years.
          </p>
          <h4 className="leading-6 mb-4 text-xl">
            Free Random Video Chat Features
          </h4>
          <ul className="bg-block-bg p-4 mb-10">
            <li className="list-checkout-item">
              Blur feature: If you want to remain anonymous on video, you can
              use the blue button.
            </li>
            <li className="list-checkout-item">
              {" "}
              Chat filter: If you are unwilling to use a video cam, you may
              choose to chat instead. How sweet!
            </li>
            <li className="list-checkout-item">
              Gender filter: In general, you will be randomly connected with
              gender preferences you go with.
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
                How to Register on Chatroulette
              </h5>
              <p>
                It is very easy to register on Chatroulette. The registration
                process is also very quick and less technical even for the least
                tech-savvy individual. You can sign up using your Facebook
                account or the ‘Sign in with Google’. Regardless of the option
                you go with, the platform doesn’t share any account information
                or other information with your partners unless you explicitly
                choose to share them.
              </p>
            </li>
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">
                Is The Chatroulette Legit and Safe?
              </h5>
              <p>
                Chatroulette is legit. Because it is video-based, you are sure
                of meeting real people as opposed to dating sites with many fake
                profiles. It is also very safe to use since you do not provide
                any of your personal information. Users who violate the site’s
                privacy policy and terms of use will have their IP addresses
                banned.
              </p>
            </li>
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">
                Can I Have a Private Chat Room?
              </h5>
              <p>
                Yes. Chatroulette users can talk with each other in private chat
                rooms within the platform.
              </p>
            </li>
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">
                Can I Get The Real &amp; Serious Relations
              </h5>
              <p>
                Many users testified to meeting really cool people on the
                platform. Although there are many of the site’s users who are
                only interested in flirting and one-night stands, there are
                people out there who want something more real. You can pair with
                these people and build real relationships that can lead to
                something serious.
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
