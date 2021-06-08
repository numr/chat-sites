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
            <h1 className="mb-4 text-4xl">Ome TV: Omegle Chat Alternative</h1>
            <p className="leading-6 mb-4">
              Random video chatting is a very common perception of the current
              generation. They have been moving the youth towards introducing
              online dating as an everyday shenanigans. Ome TV has set up a
              record of providing exquisite experiences to the users in random
              video chatting. This platform is known as one of the best
              alternatives to Omegle.
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
            More sites like Ome TV
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
              Ome TV: A World of Unlimited Fun
            </h2>
            <p className="mb-8">
              Are you looking for new people to connect with? Are you in search
              of friends that you can share your secrets? Ome TV is the best
              solution to offer you a fun experience in sharing a video chat
              with strangers from all over the world. This platform has settled
              among the top-rated video chatting websites that feature a quality
              conversation while providing control to the users themselves.
            </p>
            <p className="mb-8">
              Ome TV procures a very solid stance in monitoring and regulating
              its consumer market for the protection of its consumers. It
              features a series of different features that can prove quite
              exfoliating for the users while they chat across the website with
              strangers.
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
                High-Quality Users
              </h2>
              <p className="mb-8">
                Ome TV aids you in finding all kinds of people across the
                platform. It contains a series of different cultures, languages,
                and ethnicity. This helps users consider various options for
                random video chatting and introduce themselves to a variety of
                people and cultures. Ome TV includes people of different ages
                and even allows you to change your language to help you connect
                with people of different nations.
              </p>
              <p>
                This has devised Ome TV as one of the most expressive platforms
                for random video cam chat. It has offered a very proficient user
                market that attracts millions of users present all across the
                globe.
              </p>
            </div>
          </section>
        </div>

        <section className="container w-full text-center mx-auto my-28">
          <h2 className="text-theme-text text-4xl leading-tight mb-6">
            Why is Ome TV the Best Omegle Alternative?
          </h2>
          <p className="text-base mb-14 text-center max-w-4xl mx-auto">
            Ome TV can be your perfect getaway chance to change your choices in
            online dating and video cam chat. It offers a series of effective
            features, which makes it the best in the market.
          </p>
          <ul className="flex flex-wrap justify-center">
            <li className="who-app-item flex flex-col items-center">
              <WhoApp1Icon />
              <span className="mt-6 leading-6">
                <h3 className="mb-4 text-base">Random Video Chat</h3>
              </span>
              <p className="text-base mb-14 text-center max-w-4xl mx-auto">
                It is very simple and easy for users to start a random video
                chat at Ome TV. The platform offers them a very distinguished
                market with extensive options of people to chat from.
              </p>
            </li>
            <li className="who-app-item md:mx-6  flex flex-col items-center">
              <WhoApp2Icon />
              <span className="mt-6 leading-6">
                <h3 className="mb-4 text-base">
                  Chat with Strangers and Become Friends
                </h3>
              </span>
              <p className="text-base mb-14 text-center max-w-4xl mx-auto">
                Ome TV offers a very regulated system of chatting with
                strangers. It offers multiple features within the video chatting
                that make it easier for users to break the ice amongst the
                strangers they are chatting to.
              </p>
            </li>
            <li className="who-app-item flex flex-col items-center">
              <WhoApp3Icon />
              <span className="mt-6 leading-6">
                <h3 className="mb-4 text-base">
                  The Fastest Omegle Alternative App
                </h3>
              </span>
              <p className="text-base mb-14 text-center max-w-4xl mx-auto">
                Ome TV has built up its popularity as the best option for
                changing the choice of their platform from Omegle. It features
                one of the fastest systems of connecting people to new
                strangers.
              </p>
            </li>
          </ul>
        </section>

        <section className="container w-full  mx-auto my-28">
          <h3 className="text-theme-text text-2xl leading-9 mb-8">
            About Ome TV
          </h3>
          <p className="mb-8 leading-6">
            Video chatting has gotten quite common among people nowadays. They
            have considered this system as appropriate in providing people with
            easier means to get in touch with different people. However, there
            are multiple applications that have introduced this system. Such a
            system was inherited by Ome TV that introduced random video chat
            communication with strangers, out of which you can make new friends.
          </p>
          <p className="mb-8 leading-6">
            Ome TV is renowned among the top-rated video chatting platforms that
            have offered people the autonomy to interact with new people. While
            everything is carried out in a safe and secure environment, it
            provides users with an automatic translator. This helps them break
            all language barriers while interacting with different users.
          </p>
          <h4 className="leading-6 mb-4 text-xl">How Does Ome TV Work?</h4>
          <p className="mb-6">
            It is extremely easy to video chat across Ome TV. The user is
            requested to access the website and immediately start chatting after
            providing some initial details. If you are a new user of Ome TV, it
            is highly advisable to access their rules and regulations. This
            would guide you in ensuring that there are no violations carried out
            while interacting with users.
          </p>
          <p className="mb-6">
            To video chat across Ome TV, you need to provide some initial
            details to make your matches stronger. Ome TV demands the location
            and the gender of the user for providing them better people to
            communicate with. Once you are ready to video chat, tap on ‘Start’
            to initiate searching.
          </p>
          <h4 className="leading-6 mb-4 text-xl">Is Ome TV Safe?</h4>
          <p className="mb-8">
            Ome TV is known for keeping a regulated and monitored environment
            during video chat communication. It is extremely easy and safe to
            use Ome TV for finding new friends and people to connect with.
            However, the user is advised to ensure that everything is kept
            within the bounds of morality. Another factor that makes it
            preferable is user anonymity.
          </p>
          <p>
            Users can keep an anonymous profile while chatting across Ome TV.
            This helps them hide their identity and keep themselves prone to
            threats.
          </p>
        </section>

        <section className="container w-full  mx-auto my-28">
          <h3 className="text-theme-text text-4xl leading-tight  mb-12">
            Frequently Asked Questions (FAQs)
          </h3>
          <ul className="flex flex-wrap justify-between">
            <li className="mb-10 max-w-md  ">
              <h5 className="mb-4 text-base">
                Is there any parental control across Ome TV?
              </h5>
              <p>
                Users are provided with a set of rules and regulations that they
                have to abide by. Thus, there is a regulation kept across the
                platform to prevent all kinds of illegal activities.
              </p>
            </li>
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">Can I block people on Ome TV?</h5>
              <p>
                You can surely block any person that you do not find fit for
                conversation across Ome TV.
              </p>
            </li>
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">
                Is there an option to delete an account on Ome TV?
              </h5>
              <p>
                Users having an account across Ome TV can delete or deactivate
                through their account settings.
              </p>
            </li>
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">Is Ome TV and Omegle the same?</h5>
              <p>
                Ome TV and Omegle are known as random cam chat applications;
                however, there are several differences associated with them. It
                includes the difference in interface, rules, and the procedure
                of using the application.
              </p>
            </li>
            <li className=" max-w-md">
              <h5 className="mb-4 text-base">Are there any ads on Ome TV?</h5>
              <p>
                Unlike Omegle, Ome TV does not have any ads in its system, which
                makes it very effective. This is another main reason why people
                prefer using Ome TV for video chatting.
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
