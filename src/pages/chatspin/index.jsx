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
    <OmegleIcon/>,
    <OmeIcon/>,
    <BazoocamIcon/>,
    <ChatrouletteIcon/>,
    <DirtyRouletteIcon/>,
    <CamsurfIcon/>,
    <EmeraldchatIcon/>,
    <TinychatIcon/>
  ]

  return (
    <Layout>
      <SEO title="Video chat" description="video chat" />
      <div className="chatrandom-page">
        <section className="top-bg pt-32 text-center text-white pt pb-20">
          <div className="container w-full  mx-auto">
            <h1 className="mb-4 text-4xl">Chatrandom</h1>
            <p className="leading-6 mb-4">
              What is chatrandom alternative? People have enjoyed their chat
              randomly with strangers since the '90s. New chat apps and chat
              rooms are being used by millions around the world. Despite the
              huge charm of chat, many people have argued about the question
              that is it healthy?
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
            More sites like Chatrandom
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
              Multiple ways to talk to strangers
            </h2>
            <p className="mb-8">
              White pages can be seen as a modern version of the conventional
              phonebook. It can provide the details of a person such as their
              name and how to contact them through address and phone number:
            </p>
            <ul className="ml-2">
              <li className="list-dot-item mb-3">
                White pages can be seen as a modern version of the conventional
                phonebook
              </li>
              <li className="list-dot-item mb-3">
                It can provide the details of a person such as their name and
                how to contact them through address and phone number.
              </li>
              <li className="list-dot-item mb-3">
                It can provide the details of a person such as their name and
                how to contact them through address and phone number.
              </li>
              <li className="list-dot-item mb-3">
                It can provide the details of a person such as their name and
                how to contact them through address and phone number.
              </li>
              <li className="list-dot-item mb-3">
                It can provide the details of a person such as their name and
                how to contact them through address and phone number.
              </li>
              <li className="list-dot-item mb-3">
                It can provide the details of a person such as their name and
                how to contact them through address and phone number.
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
                Over a billion connections served by chatspin
              </h2>
              <p className="mb-8">
                White pages can be seen as a modern version of the conventional
                phonebook. It can provide the details of a person such as their
                name and how to contact them through address and phone number.
              </p>
              <p>
                White pages can be seen as a modern version of the conventional
                phonebook. It can provide the details of a person such as their
                name and how to contact them through address and phone number.
              </p>
            </div>
          </section>
        </div>

        <section className="container w-full text-center mx-auto my-28">
          <h2 className="text-theme-text text-4xl leading-tight mb-6">
            Who Should Use the Camsurf Mobile App for Chatting?
          </h2>
          <p className="text-base mb-14 text-center max-w-4xl mx-auto">
            Camsurf’s random video chat platform is perfect for anyone who wants
            to meet strangers online for great conversations, funny games, and
            even flirting and love, including
          </p>
          <ul className="flex flex-wrap justify-center">
            <li className="who-app-item flex flex-col items-center">
              <WhoApp1Icon />
              <span className="mt-6 leading-6">
                People who want to make new friends from around the world.
              </span>
            </li>
            <li className="who-app-item md:mx-6  flex flex-col items-center">
              <WhoApp2Icon />
              <span className="mt-6 leading-6">
                Anybody who likes having fun, playing games, or making other
                people laugh on camera.
              </span>
            </li>
            <li className="who-app-item flex flex-col items-center">
              <WhoApp3Icon />
              <span className="mt-6 leading-6">
                Learning a new skill, about other cultures and countries, or
                communicating in a exciting and fun way.
              </span>
            </li>
          </ul>
        </section>

        <section className="container w-full  mx-auto my-28">
          <h3 className="text-theme-text text-2xl leading-9 mb-8">
            About Chatrandom
          </h3>
          <p className="mb-8 leading-6">
            Once we receive your request and can confirm that the number is
            portable, we will ask for some additional information and request
            that you upgrade your subscription to a paid plan (Premium,
            Business, or Enterprise). When we receive all your documents and are
            notified of your plan upgrade, we will initiate the porting process
            and notify you accordingly of the progress.
          </p>
          <p className="mb-8 leading-6">
            Here are some of the advantages of porting out your Google Voice
            number to and send and receive fax using Google Voice:
          </p>
          <p className="mb-8 leading-6">
            You get to keep your own number: You no longer need to worry about
            letting others know about your new fax number. You will use your own
            Google Voice number to send and receive fax online, and your clients
            and customers won’t feel any difference.
          </p>
          <h4 className="leading-6 mb-4 text-xl">
            Why use CocoFax to send and receive fax from Google Voice?
          </h4>
          <p className="mb-6">
            Here are some of the advantages of porting out your Google Voice
            number to and send and receive fax using Google Voice:
          </p>
          <ul className="bg-block-bg p-4 mb-10">
            <li className="list-checkout-item">Send & Receive Faxe</li>
            <li className="list-checkout-item">Safe, Secure & Encry</li>
            <li className="list-checkout-item">
              No Fax Maintenance or Phone Charges
            </li>
            <li className="list-checkout-item">
              View, Crop, Edit & Annotate Faxes
            </li>
          </ul>
          <h4 className="leading-6 mb-4 text-xl">
            Using your Google Voice number for faxing
          </h4>
          <p className="mb-8">
            Here are some of the advantages of porting out your Google Voice
            number to and send and receive fax using Google Voice:
          </p>
          <p>
            Always available: Regardless of your internet connection status,
            your fax number is always active and ready to receive faxes. You’ll
            be notified via email and push notification as soon as there is a
            new fax in your inbox, and you can easily check your fax archives
            using application on different platforms (See where to download the
            CocoFinder application)
          </p>
        </section>

        <section className="container w-full  mx-auto my-28">
          <h3 className="text-theme-text text-4xl leading-tight  mb-12">
            Frequently Asked Questions (FAQs)
          </h3>
          <ul className="flex flex-wrap justify-between">
            <li className="mb-10 max-w-md  ">
              <h5 className="mb-4 text-base">
                Are there any hidden costs with the reverse email lookup?
              </h5>
              <p>
                With the email address search from CocoFinder, you have no fees
                to worry about; the service is entirely safe.
              </p>
            </li>
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">
                Where does the information come from?
              </h5>
              <p>
                When we perform an email lookup, we look for matches in various
                places, including government records, data brokers, phone
                operators, as well as many offline sources that aren’t available
                to the public.
              </p>
            </li>
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">What is the CAN-SPAM Act?</h5>
              <p>
                The CAN-SPAM Act is the law that regulates commercial emails and
                sets the rules that businesses must follow when they use the
                email for their marketing strategy. If they don’t respect those
                provisions, they can receive significant fines.
              </p>
            </li>
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">Is the email lookup legal?</h5>
              <p>
                If you’re worried that your reverse email lookup may raise some
                privacy protection concerns, you can take a look at the Fair
                Credit Report Act, as that is the law that supervises the
                reverse email address lookup.
              </p>
            </li>
            <li className=" max-w-md">
              <h5 className="mb-4 text-base">
                What if I don’t want CocoFinder to feature my personal
                information?
              </h5>
              <p>
                That can easily be solved by contacting our customer support. We
                will respect your wish and remove your data from our system.
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
