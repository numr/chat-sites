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
            <h1 className="mb-4 text-4xl">Emerald Chat</h1>
            <p className="leading-6 mb-4">
              Emerald chat is the most common and trendy video chat with
              strangers. It is full of fresh, wild and exciting experiences
              because you can talk freely from anywhere in the world! Especially
              for younger generations who are already bored of old chat sites,
              make the emerald video chat your place to meet new people. It
              takes just a couple of minutes to begin something better than to
              talk with people like you!
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
            More sites like Emerald Chat
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
              Popular Platform to Chat with Strangers
            </h2>
            <p className="mb-8">
              Emerald Chat is one of the most common and creative forums for
              random video chat with new people. It has been influential in
              achieving the mission of creating an immersive community for
              people of various cultures and thinking structures for several
              years.
            </p>
            <p className="mb-8">
              Emerald Chat is the most prominent and trendy chat with strangers
              platform in the world. It is packed with fresh, wild, and
              entertaining experiences, and you can chat with random people,
              from all over the world, for free! Emerald video chat is
              specifically for the younger generation who are tired of the old
              online video chat websites. So take a seat, gear up and create an
              account. It only takes a few minutes to begin something better in
              your life, such as getting to know other people who share your
              interests!
            </p>
            <p className="mb-8">
              Emerald Chat is the perfect free video chat platform for you if
              meeting new people is daunting in your busy life. Its unique and
              attractive characteristics make it simple for you to meet new
              people. It is easy to reach a wide variety of people. Thanks to
              the constantly growing number of users, you can also meet people
              from various countries and have a video chat with strangers.
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
                Random Video Chat App
              </h2>
              <p className="mb-8">
                Emerald Chat is a video chat platform that is free to use. In
                this way, there are no costs associated with participating in
                the dialogue. You will meet people from any nook and corner and
                learn about their lives by simply flipping on your computer's
                camera. Since you will talk to random people in a language other
                than English, bear in mind that free chat will help you develop
                your language skills dramatically.
              </p>
            </div>
          </section>
        </div>

        <section className="container w-full text-center mx-auto my-28">
          <h2 className="text-theme-text text-4xl leading-tight mb-6">
            Why Emerald Chat Is the Best Omegle Alternative
          </h2>
          <p className="text-base mb-14 text-center max-w-4xl mx-auto">
            Emerald Chat is for you if meeting new people turns out to be a
            hectic task. But its unique and attractive characteristics make it
            simple for you to meet new people. It is easy to reach a wide
            variety of people. Not to mention, it is constantly growing with its
            number of users. You can also meet and chat with people who you do
            not know at all.
          </p>
          <ul className="flex flex-wrap justify-center">
            <li className="who-app-item flex flex-col items-center">
              <WhoApp1Icon />
              <span className="mt-6 leading-6">
                <h3 className="mb-4 text-base">Group Chat Room </h3>
              </span>
              <p className="text-base mb-14 text-center max-w-4xl mx-auto">
                In Emerald, you can meet and talk with many people using the
                group chat with people function. As a result, the discussions
                become much more enjoyable.
              </p>
            </li>
            <li className="who-app-item md:mx-6  flex flex-col items-center">
              <WhoApp2Icon />
              <span className="mt-6 leading-6">
                <h3 className="mb-4 text-base">Gender Filter </h3>
              </span>
              <p className="text-base mb-14 text-center max-w-4xl mx-auto">
                You can have a video chat with strangers with the users of the
                desired gender using the gender filter. You might meet a lovely
                and charming girl or a charismatic boy.
              </p>
            </li>
            <li className="who-app-item flex flex-col items-center">
              <WhoApp3Icon />
              <span className="mt-6 leading-6">
                <h3 className="mb-4 text-base">Talk to Random People </h3>
              </span>
              <p className="text-base mb-14 text-center max-w-4xl mx-auto">
                People of all ages can access the conversation beneath Emerald
                Chat's umbrella, which seeks to connect people. All you need is
                an internet connection to access this network.
              </p>
            </li>
          </ul>
        </section>

        <section className="container w-full  mx-auto my-28">
          <h3 className="text-theme-text text-2xl leading-9 mb-8">
            How to Use Emerald Chat with Strangers
          </h3>
          <h4 className="leading-6 mb-4 text-xl">
            Keep Your Face Visible in The Webcam
          </h4>
          <p className="mb-6">
            Emerald Chat is the most advanced Android chat programme available.
            You can also use it on a computer, providing a variety of chat
            options.
          </p>
          <p className="mb-6">
            Emerald video chat is a lightning-quick device. If you wish to video
            chat, you must permit Emerald Chat to use your camera and
            microphone. Once you've given your permission, it will pair you up
            for a video chat with strangers. You can then begin conversing with
            anybody you find interesting.
          </p>
          <p className="mb-6">
            During the call, make sure your face is visible on the phone. In
            emerald chat, they prohibit revealing meaningless photographs to the
            camera, and they do not entertain nudity activities.
          </p>
          <h4 className="leading-6 mb-4 text-xl">Be Polite with Strangers</h4>
          <p className="mb-8">
            Emerald Chat pairs you up with strangers. When speaking with
            strangers you match, remember to be polite. You have the freedom to
            object if your chat buddy is irritating. If you don't like your
            current chat buddy, press the next button to find a new one.
          </p>
          <h4 className="leading-6 mb-4 text-xl">
            Follow The Rules & Report People Who Don't.
          </h4>
          <p className="mb-8">
            Emerald Chat is very specific about its rules and doesn't promote or
            bear unethical activities. If you don't want your account to get
            reported or banned, then abide by the rules and be polite in your
            behaviour.
          </p>
        </section>

        <section className="container w-full  mx-auto my-28">
          <h3 className="text-theme-text text-4xl leading-tight  mb-12">
            Frequently Asked Questions (FAQs)
          </h3>
          <ul className="flex flex-wrap justify-between">
            <li className="mb-10 max-w-md  ">
              <h5 className="mb-4 text-base">
                Is Emerald Chat Legit and Safe?
              </h5>
              <p>
                Yes. The Emerald Chat is legit and safe. The management is very
                particular about their safety standards. Their moderators are
                very responsive and will instantly help you if you experience
                any unethical activities.
              </p>
            </li>
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">
                Does Emerald Have a Mobile App?
              </h5>
              <p>
                No. Currently, Emerald is updating their application to be
                available in the Playstore/App Store in the form of a mobile
                application to get accessible by the users.
              </p>
            </li>
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">
                How Can I Get to Know More Strangers?
              </h5>
              <p className="mb-8">
                Emerald Chat is new yet has a sizable user base from all over
                the world. It can connect you with unknown strangers. You will
                meet people from all over the world.
              </p>
              <p>
                With Emerald's live free video chat, you will be able to talk to
                strangers you have never met before. Get on a random video chat
                with strangers and have a healthy conversation.
              </p>
            </li>
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">
                How to Report People Who Break The Rules?
              </h5>
              <p className="mb-8">
                If you have any issues during the conversation, you can always
                contact the Emerald Chat moderators. They will assist you as
                soon as possible. Be assured that they are very fast.
              </p>
              <p>
                If a person is rude on the app, the "Help" part of the site
                suggests that they be given a bad karma score. In principle, if
                many people give an offender a bad ranking, the abuser would be
                instant, but only temporarily, suspended.
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
