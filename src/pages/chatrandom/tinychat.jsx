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
            <h1 className="mb-4 text-4xl">Tinychat</h1>
            <p className="leading-6 mb-4">
              Tinychat is a video chatting website that will allow you to chat
              with strangers and make new friends by using a webcam chat room.
              It also allows users to create or join video chat rooms for
              discussions or share your content with people.
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
            More sites like Tinychat
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
              What Is Tinychat
            </h2>
            <p className="mb-8">
              Tinychat is an online based website that can give you one of the
              best video chat sites experience in the market. It allows users to
              easily chat or communicate with each other through cam chat or
              voice chatting through the web portal. Peerstream developed this
              video chatting website and it supports various operating systems
              including Windows, Mac, Android, and iOS.
            </p>
            <p className="mb-8">
              You can use Tinychat by creating chat rooms or video chat rooms in
              any topic or category to discuss things privately with other users
              of the website. It’s an interesting online video chatting
              community to find and meet new people for making new friends. You
              can stream any video on Tinychat to share your content with other
              people.
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
                Free Video Chat Rooms
              </h2>
              <p className="mb-8">
                One of the most amazing features offered by Tinychat is free
                online video chat rooms. These rooms can be easily created by
                signing in to your Tinychat account. The wonderful webcam chat
                rooms are free to use and you can chat on a specific
                discussion/topic. Just randomly select any video chat room to
                join and meet new people to video chat with them. This will
                allow you to develop your English language skills, make new
                friends and share your talent with other people on the platform.
              </p>
            </div>
          </section>
        </div>

        <section className="container w-full text-center mx-auto my-28">
          <h2 className="text-theme-text text-4xl leading-tight mb-6">
            What's Special in Tinychat
          </h2>
          <ul className="flex flex-wrap justify-center">
            <li className="who-app-item flex flex-col items-center">
              <WhoApp1Icon />
              <span className="mt-6 leading-6">
                <h3 className="mb-4 text-base">Live Cam Chat</h3>
              </span>
              <p className="text-base mb-14 text-center max-w-4xl mx-auto">
                Tinychat has a free live cam chat feature that you can enjoy.
                You can easily use the live webcam chat feature to live video
                call other users without any issues.
              </p>
            </li>
            <li className="who-app-item md:mx-6  flex flex-col items-center">
              <WhoApp2Icon />
              <span className="mt-6 leading-6">
                <h3 className="mb-4 text-base">Random Group Video chat</h3>
              </span>
              <p className="text-base mb-14 text-center max-w-4xl mx-auto">
                Tinychat offers a random group video chat room feature to its
                users. With this special feature, you can randomly chat with
                other people by creating or joining webcam chat rooms.
              </p>
            </li>
            <li className="who-app-item flex flex-col items-center">
              <WhoApp3Icon />
              <span className="mt-6 leading-6">
                <h3 className="mb-4 text-base">Tinychat Virtual Store</h3>
              </span>
              <p className="text-base mb-14 text-center max-w-4xl mx-auto">
                Tinychat virtual store is an option for sending gifts to your
                favourite user or friend virtually. You can buy cute icons by
                using points gained from Tinychat premium accounts and send
                those cute icons to your favourite user on various occasions.
              </p>
            </li>
          </ul>
        </section>

        <section className="container w-full  mx-auto my-28">
          <h3 className="text-theme-text text-2xl leading-9 mb-8">
            Helpful Tips for Using Tinychat
          </h3>
          <h4 className="leading-6 mb-4 text-xl">
            Use Bright Lighting When Chatting
          </h4>
          <p className="mb-6">
            The best way to enjoy Tinychat video chat rooms is by using bright
            lighting when chatting. This will allow the other user to see you
            properly and the chatting experience becomes better for everyone.
            Sometimes low light becomes really annoying if people can’t see you
            properly and the video chatting is not enjoyable or entertaining
            enough for both parties. So use a bright light so that everyone can
            see you well.
          </p>
          <h4 className="leading-6 mb-4 text-xl">Be Polite with Strangers</h4>
          <p className="mb-8">
            As Tinychat is a video chat site, you can meet a lot of people and
            interact with them independently without any interruption. The
            interesting fact is, you chat or meet with people who are complete
            strangers. So making new friends or followers is easier than ever.
            In the meantime, you must keep this in mind to be polite with
            everyone. As it’s a social media site, people from all aspects may
            join and communicate with each other. As you expect politeness from
            another user, so you must be polite with strangers too.
          </p>
          <h4 className="leading-6 mb-4 text-xl">
            Report Users that Are Breaking the Rules
          </h4>
          <p className="mb-8">
            Tinychat doesn’t support nudity or unsocial activities. If someone
            is sharing inappropriate content via cam chat, the easiest way to
            get a solution is to report the user who is breaking the rules. They
            want to maintain a safe and enjoyable video chatting environment for
            everyone. When you report a user, it immediately goes as an alert to
            the moderation team for following up, investigating the matter and
            taking proper action.
          </p>
        </section>

        <section className="container w-full  mx-auto my-28">
          <h3 className="text-theme-text text-4xl leading-tight  mb-12">
            Frequently Asked Questions (FAQs)
          </h3>
          <ul className="flex flex-wrap justify-between">
            <li className="mb-10 max-w-md  ">
              <h5 className="mb-4 text-base">
                How to Select the Best Tiny Chat Room?
              </h5>
              <p>
                In order to select the best Tiny chat room on Tinychat, you can
                simply log into your account and scroll up/down to join any chat
                room from a big list of video chat rooms. All the rooms
                available for chatting on Tinychat have a video chatting
                facility, so you never need to worry about anything. Choose any
                room that suits you best.
              </p>
            </li>
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">Is Tinychat Safe?</h5>
              <p>
                As all the information of users in Tinychat are firewalled and
                backed up perfectly with proper security measures, it’s 100%
                safe from hackers or fake users who try to steal any information
                for misusing it. There are many people using this online video
                chatting website without any harm, so it’s fully safe for using.
              </p>
            </li>
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">
                Are There Fake Profiles in Tinychat?
              </h5>
              <p>
                As there are people from all around the world and there are so
                many users in this online community, we can assume that there
                are fake profiles in Tinychat. But the number is very limited.
                It’s rarely possible to create fake profiles in Tinychat because
                of how everything works on video chatting.
              </p>
            </li>
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">
                How Can I Find The Best Performer Matching My Needs?
              </h5>
              <p>
                You can simply search for any user by using the search bar. Just
                type in the username of your desired user and search for the
                account to interact with the user privately or in a group video
                chat room.
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
