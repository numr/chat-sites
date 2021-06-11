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
            <h1 className="mb-4 text-4xl">Bazoocam</h1>
            <p className="leading-6 mb-4">
              It is not out of place to call Bazoocam the best free random video
              chat roulette website. Unlike many platforms that show you gifs on
              video chat, here, you get to meet real people who are genuinely
              interested in making new friends.
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
            More sites like Bazoocam
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
            <h3 className="text-theme-text text-2xl leading-9 mb-8">
              The Top International Random Video Chat
            </h3>
            <p className="mb-8">
              Are you idle, bored and uninterested in watching your favorite
              Netflix classics alone? It’s high time you interact with people
              and make new friends. What more relaxed atmosphere than Bazoocam
              can you do this? Bazoocam is the best international random video
              chat for you to explore. It is streets ahead of many video dialog
              sites in picking out v ery random strangers and making best
              friends or dating partners out of them.
            </p>
            <p className="mb-8">
              It is also very easy to use, has a non-clustered interface and
              simple buttons that makes it very easy to communicate with a bunch
              of people on the go.
            </p>
          </div>
          <div className="max-w-sm flex items-senter">
            <img src={partOneImg} alt="feature icon" />
          </div>
        </section>

        <section className="container w-full mx-auto my-28 flex flex-wrap text-base">
          <div className="max-w-xl md:mr-24">
            <h3 className="text-theme-text text-2xl leading-9 mb-8">
              Cam to Cam Chat Website
            </h3>
            <p className="mb-8">
              Many cam to cam chat websites ask its users to sign up or pay a
              membership fee to take advantage of their platform’s features.
              Bazoocam, on the other hand, begs to be different. Users do not
              have to register to use the platform. However, doing so may give
              you access to some premium features. Still, it isn’t a must.
            </p>
            <p className="mb-8">
              If you do not want to be bothered by creating an interesting
              profile and putting up preferences to meet someone new, this cam
              to cam website is the right train to get on.
            </p>
          </div>
          <div className="max-w-sm flex items-senter">
            <img src={partOneImg} alt="feature icon" />
          </div>
        </section>

        <section className="container w-full text-center mx-auto my-28">
          <h2 className="text-theme-text text-4xl leading-tight mb-8">
            How Is Bazoocam Better Than Other Chatroulette Websites
          </h2>
          <p className="mb-8 leading-6">
            Bazoocam, an international chat random video chat website is the
            best webcam chat website on the block for a bunch of reasons. One
            such is its unique pairing system aided by a geolocation proximity.
            This technology helps pair people of close proximity. If you are big
            on webcam chats with random strangers who share the same vibes with
            you, Bazoocam is a must try for you. Here are some of its other
            features that makes it one of the most popular among teens and
            adults alike.
          </p>
          <ul className="flex flex-wrap justify-center">
            <li className="who-app-item flex flex-col items-center">
              <WhoApp1Icon />
              <span className="mt-6 leading-6">
                <h3 className="mb-4 text-base">Random Cam Chat</h3>
              </span>
              <p className="text-base mb-14 text-center max-w-4xl mx-auto">
                The geolocation proximity pairs you with someone only a few
                miles away. The other’s vibes do not resonate with yours? Click
                next! Otherwise, stay on with your webcam in position and discuss
                your fantasies and future travel destinations.
              </p>
            </li>
            <li className="who-app-item md:mx-6  flex flex-col items-center">
              <WhoApp2Icon />
              <span className="mt-6 leading-6">
                <h3 className="mb-4 text-base">Multiple Languages</h3>
              </span>
              <p className="text-base mb-14 text-center max-w-4xl mx-auto">
                The developers of this platform made it an all-inclusive meeting
                point for people of all races and ethnic groups by providing
                support for multiple languages. Some of these languages include
                English, French Dutch, Spanish and Portuguese.
              </p>
            </li>
            <li className="who-app-item flex flex-col items-center">
              <WhoApp3Icon />
              <span className="mt-6 leading-6">
                <h3 className="mb-4 text-base">Games Available</h3>
              </span>
              <p className="text-base mb-14 text-center max-w-4xl mx-auto">
                Games are available for users of the site who do not know how to
                start a conversation. If this is you, you can choose a game to
                break the ice between you and the other person across the
                screen.
              </p>
            </li>
          </ul>
        </section>

        <section className="container w-full  mx-auto my-28">
          <h3 className="text-theme-text text-2xl leading-9 mb-8">
            About Bazoocam
          </h3>
          <p className="mb-8 leading-6">
            Bazoocam is a simple to use, yet, very functional video chat or cam
            to cam website for meeting random strangers online. It is one of the
            oldest chatroulette alternatives and has over a million regular
            users. Asides chatting with people over video, users can also play
            interactive games with each other. It is important to note that the
            site doesn’t tolerate pornographic chats. Its rules prohibit this.
            One of such rules is that users should not pull off their clothes
            while on a video chat.
          </p>
          <p className="mb-8 leading-6">
            Also, it is open to use by people of all ages and not limited to
            teens or youths alone.
          </p>
          <h4 className="leading-6 mb-4 text-xl">How Does Bazoocam Work?</h4>
          <p>
            How does this video chat website work? It’s quite simple. Here’s
            how:
          </p>
          <ul className="ml-2">
            <li className="list-dot-item mb-3">Visit bazoocam.org.</li>
            <li className="list-dot-item mb-3">
              Click the start button and you will be paired with a random
              individual to begin your chat with. The proximity location feature
              may ensure that you are paired with someone who is geographically
              close to you.
            </li>
            <li className="list-dot-item mb-3">
              Once you click the chat button, you should be able to chat.
            </li>
            <li className="list-dot-item mb-3">
              If you want to speak with someone else instead, click the Next
              button. Do not forget to turn on your webcam for an immersive
              experience.
            </li>
          </ul>
          <h4 className="leading-6 mb-4 text-xl">
            How to Start A Safe Video Chat on Bazoocam
          </h4>
          <p>
            Begin by setting your username and gender. Follow up with making
            sure your webcam is in good condition. Since you will be
            communicating with total strangers for the most part, do not make
            these video chats in corners of your home or office that can give
            your location away. For instance, if there is a popular statue in
            sight, the person on the other side of the screen can easily tell
            what part of town you are resident in. Also, do not continue
            conversation with someone unwilling to use their webcam. Not using a
            cam means they may be hiding something.
          </p>
        </section>

        <section className="container w-full  mx-auto my-28">
          <h3 className="text-theme-text text-4xl leading-tight  mb-12">
            Frequently Asked Questions (FAQs)
          </h3>
          <ul className="flex flex-wrap justify-between">
            <li className="mb-10 max-w-md  ">
              <h5 className="mb-4 text-base">
                Is The Bazoocam Legit and Safe?
              </h5>
              <p>
                Yes. Bazoocam is legit and safe. Since, you do not have to make
                any payments for a premium membership plan, you are sure you
                can’t lose your card information to unscrupulous individuals.
                Also, the site is moderated by over 40 people at any point in
                time. This means that no time is wasted in expelling defaulters
                of the site’s rules or persons who may make the platform
                otherwise unsafe.
              </p>
            </li>
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">How to Choose Genders?</h5>
              <p>
                There is a provision for choosing which gender you want to
                interact with on the platform. At the left-most side of the
                website, you will find three options to choose from – men, women
                and all. The all tab is for gender neutral individuals and
                persons who choose to be identified by something other than male
                or female.
              </p>
            </li>
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">How to Choose Countries?</h5>
              <p>
                If you are intentional about the country your matches come from,
                you can choose as required from the top right corner of the
                website. Simply click on the country’s flag and you will be
                directed to the appropriate room.
              </p>
            </li>
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">
                How Can I Find The Best Performer Matching My Needs?
              </h5>
              <p>
                The website uses a roulette system which means you may be
                matched with anybody. Therefore, you might not have a direct
                influence on the kind of person you come across on the platform.
                But be rest assured that you will meet your perfect match since
                it is filled with nice potential interlocutors.
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
