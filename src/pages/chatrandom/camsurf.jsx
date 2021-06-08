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
            <h1 className="mb-4 text-4xl">Camsurf</h1>
            <p className="leading-6 mb-4">
              Camsurf is a cutting-edge video messaging service that offers a
              random video chat environment free of nudity and adult content.
              The innovative platform, which is aimed at people who want to
              communicate in a meaningful and friendly way, allows users to
              connect with strangers all over the world with just two taps.
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
            More sites like Camsurf
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
              Random Video Chat
            </h2>
            <p className="mb-8">
              Camsurf online chat with random strangers is still a fresh and
              exciting experience. Camsurf is a free video chat service that
              connects users with people from all over the globe. It gives users
              an easy-to-use, friendly, and free forum to participate in
              conversations with strangers. You can make new friends if you are
              fond of making new relationships.
            </p>
            <p className="mb-8">
              CamSurf is the newest and most common online chatting method with
              people from all over the world. Camsurf Online webcam chatting is
              the most common method of video chatting with strangers. People
              find Camsurf Cam Chat to be an enjoyable and secure way to meet
              new people and unwind.
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
                Video Chat with Strangers
              </h2>
              <p className="mb-8">
                Camsurf is a free video chat webcam that allows you to meet
                people from all over the world. Many apps and services are
                available that allow users to video chat at random. But this app
                was created to make it easy to communicate online even with
                strangers.
              </p>
              <p className="mb-8">
                Camsurf has been increasingly popular in recent years. Since you
                can have online video chat face to face, it's also a more
                personal conversation mode. The cam to cam Camsurf Chat will let
                you video chat online with people at random. Of course, you have
                the option of filtering these matches by country and gender.
                Start an online video chat with strangers from around the world,
                without any hindrances.
              </p>
            </div>
          </section>
        </div>

        <section className="container w-full text-center mx-auto my-28">
          <h2 className="text-theme-text text-4xl leading-tight mb-6">
            What Makes Camsurf Unique
          </h2>
          <p className="text-base mb-14 text-center max-w-4xl mx-auto">
            Camsurf is one of a kind in several ways. It has been built as a
            fantastic chatting forum where people can chat with random strangers
            from all over the world. The significant part about this website is
            that you can start talking right away without having to register.
          </p>
          <ul className="flex flex-wrap justify-center">
            <li className="who-app-item flex flex-col items-center">
              <WhoApp1Icon />
              <span className="mt-6 leading-6">
                <h3 className="mb-4 text-base">Random Video Chat</h3>
              </span>
              <p className="text-base mb-14 text-center max-w-4xl mx-auto">
                At any given moment, Camsurf has thousands of individuals
                online. If you want to meet someone new, press the "next"
                button, and you will immediately pair with a new stranger.
              </p>
            </li>
            <li className="who-app-item md:mx-6  flex flex-col items-center">
              <WhoApp2Icon />
              <span className="mt-6 leading-6">
                <h3 className="mb-4 text-base">Free Cam to Cam</h3>
              </span>
              <p className="text-base mb-14 text-center max-w-4xl mx-auto">
                Camsurf aims to make meeting new people as simple as possible.
                The random video chat platform uses the fastest servers to
                ensure lightning-fast communications and high-quality online
                video chat streams.
              </p>
            </li>
            <li className="who-app-item flex flex-col items-center">
              <WhoApp3Icon />
              <span className="mt-6 leading-6">
                <h3 className="mb-4 text-base">Mobile App on the GO</h3>
              </span>
              <p className="text-base mb-14 text-center max-w-4xl mx-auto">
                You will now make new friends and meet new people no matter
                where you go. The software is completely free to download and is
                built to take up as little storage space as possible on your
                smartphone.
              </p>
            </li>
          </ul>
        </section>

        <section className="container w-full  mx-auto my-28">
          <h3 className="text-theme-text text-2xl leading-9 mb-8">
            About Camsurf
          </h3>
          <p className="mb-8 leading-6">
            Camsurf is a free video chat messaging software that can help make
            new friends, find a date, or meet random people in real-time.
          </p>
          <p className="mb-6">On Camsurf, you can:</p>
          <ul className="bg-block-bg p-4 mb-10">
            <li className="list-checkout-item">
              Chat with people from more than 200 countries
            </li>
            <li className="list-checkout-item">
              Video chat anonymously without logging in
            </li>
            <li className="list-checkout-item">
              Instant cam to cam chat with strangers
            </li>
            <li className="list-checkout-item">
              Filter contacts by location and language
            </li>
            <li className="list-checkout-item">
              And many more exciting features
            </li>
          </ul>
          <p className="mb-8">
            Camsurf is a social networking site that was designed to put people
            from all over the world together. It has helped over a BILLION
            people communicate via random webcam chat, and it is now the
            fastest-growing networking community for meeting strangers!
          </p>
          <p className="mb-8">
            Camsurf is proud of its protection and commitment to safeguarding
            the users' personal information. As a result, there are no
            registration forms to fill out to access this app. When video
            chatting in a safe environment, you will remain anonymous.
          </p>
          <h4 className="leading-6 mb-4 text-xl">How to Use Camsurf</h4>
          <p className="mb-8">
            Press "Allow" and then the big "Start" button to begin watching
            random people on the webcam. You have two options for communicating
            with people you meet on Camsurf: either text chat by typing in the
            text section or speak directly into the microphone/webcam if your
            microphone is available.
          </p>
          <h4 className="leading-6 mb-4 text-xl">
            How to Talk to Strangers with Camsurf
          </h4>
          <p className="mb-8">
            Camsurf is the simplest thing to use, and one can easily switch
            between users! Click the "Next" button, you can find it under your
            webcam. This will redirect you to someone else's webcam. To switch
            from one camera to the next, keep clicking the "Next" button.
          </p>
        </section>

        <section className="container w-full  mx-auto my-28">
          <h3 className="text-theme-text text-4xl leading-tight  mb-12">
            Frequently Asked Questions (FAQs)
          </h3>
          <ul className="flex flex-wrap justify-between">
            <li className="mb-10 max-w-md  ">
              <h5 className="mb-4 text-base">
                Are There Fake Profiles in Camsurf?
              </h5>
              <p>
                No. Camsurf has strict policies. The team always ensures that
                the users have a pleasant & safe online video chat experience.
                So, we review each profile so that there are no fake profiles.
                Since it has a cam to cam video chat room, ensure that you talk
                to genuine people.
              </p>
            </li>
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">
                Can I Get Real&amp; Serious Relationships in Camsurf?
              </h5>
              <p>
                This completely relies on the type of person you are chatting
                with. Since CamSurf allows you to meet thousands of people
                online, there may be chances that you can encounter your special
                person and get a real & serious relationship.
              </p>
            </li>
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">
                {" "}
                How Can I Download the Camsurf App?
              </h5>
              <p>
                Camsurf is both available as web-based browser&amp; mobile
                applications. To get the Camsurf App, visit Playstore/App Store,
                search for Camsurf and install the application.
              </p>
            </li>
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">
                How to Get Acquainted with Girls in Camsurf?
              </h5>
              <p>
                The Camsurf platform is extremely reliable and safe to use. The
                group follows strict rules for Terms & Conditions. So, the
                management bans the profiles which violate these terms.
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
