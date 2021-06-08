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
import "../style/index.less"

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
      <SEO title="CooMeet: Free Video Chat with Girls Online at coomeet.com" description="CooMeet is known for providing the best services for webcam chat. We shall feature an explanation of the platform that helps users get connected with girls." />
      <div className="chatrandom-page">
        <section className="top-bg pt-32 text-center text-white pt pb-20">
          <div className="container w-full  mx-auto">
            <h1 className="mb-4 text-4xl">CooMeet: The Best Video Chat with Girls</h1>
            <p className="leading-6 mb-4">
            Video chatting is a very common tool that is being used daily by millions of users around the world. Although you might have heard such tools helping you to connect with your friends, there are certain tools that allow you to interact with strangers. Such a website comes under the name of CooMeet that provides you a platform to interact with girls of your choice.

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
            Webcam Chat with Girls
            </h2>
            <p className="mb-8">
            It is a human desire to communicate with people of the opposite sex. People consider multiple techniques of reaching out to their opposite sex and finding a friend within them. At times, people also look towards an intimate relationship. However, with all the conventional methods existing in the world, video cam chat is another approach that helps out a lot of people.

            </p>
            <p className="mb-8">
            CooMeet wishes to provide people with a very efficient environment of communicating with girls across webcam. It offers them a platform like no other party providing such services in the market. With verified users across CooMeet, people can look forward to developing good friendships and serious relationships.

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
              Count and Quality Users

              </h2>
              <p className="mb-8">
              CooMeet is known for providing verified account holders to their users who are looking forward to a quality cam chat. This platform helps people connect with single women present around the globe. As many people look forward to finding the right person for them, CooMeet can be one impressive option for them. It keeps them away from getting scammed by illegitimate users.
              </p>
              <p className="mb-8">
              As many people always demand quality profiles to interact with, CooMeet intends to offer them the best. They can surely look ahead towards a serious relationship. The user will surely never run out of any options while using CooMeet.
              </p>
          </div>
        </section>

        <section className="container w-full text-center mx-auto my-28">
          <h2 className="text-theme-text text-4xl leading-tight mb-6">
          Why CooMeet is the Best Video Chat App with Girls

          </h2>
          <p className="text-base mb-14 text-center max-w-4xl mx-auto">
          CooMeet is the next level to online dating. It surely makes interaction quite easy with the opposite sex. This innovative dating network has guided people into finding the right person that would have a pleasuring presence in the user’s life.
          </p>
          <ul className="flex flex-wrap justify-center">
            <li className="who-app-item flex flex-col items-center">
              <WhoApp1Icon />
              <span className="mt-6 leading-6">
              Online dating has become part of our lives as a very common procedure. CooMeet allows you to meet beautiful women from all across the world with whom you may set up an online date.

              </span>
            </li>
            <li className="who-app-item md:mx-6  flex flex-col items-center">
              <WhoApp2Icon />
              <span className="mt-6 leading-6">
              CooMeet promises to provide you an exceptional experience with random cam chat. It builds up an exceptional interface that allows you to authentically interact with random people throughout the globe.
              </span>
            </li>
            <li className="who-app-item flex flex-col items-center">
              <WhoApp3Icon />
              <span className="mt-6 leading-6">
              People usually seek out new friends and people to connect with. CooMeet offers users an environment to communicate with strangers of different tastes and cultures.
              </span>
            </li>
          </ul>
        </section>

        <section className="container w-full  mx-auto my-28">
          <h3 className="text-theme-text text-2xl leading-9 mb-8">
          About CooMeet
          </h3>
          <h4 className="leading-6 mb-4 text-xl"> What is CooMeet?</h4>
          <p className="mb-8 leading-6">
          The concept of video cam chat is quite common within the online market. Hundreds of platforms promise online dating to their users. However, most of them fail to offer an efficient system to interact with people. CooMeet influences a system that provides its users a very cohesive experience to online dating while staying at home.
          </p>
          <p className="mb-8 leading-6">
          With verified accounts and a very exquisite moderating system, people can enjoy video chat with girls with no scam. As most platforms have a high proportion of male users, CooMeet promises an interactive session with girls. That is what makes CooMeet unique from the other existing chat sites.
          </p>
          <h4 className="leading-6 mb-4 text-xl">
          How Does it Work?
          </h4>
          <p className="mb-6">
          Users usually complain of facing difficulty in using a video chat app for interacting with strangers. They complain of finding complications in understanding the interface of the platform. CooMeet provides them with an ultimate solution by offering them easy-to-understand services. People need not get into any trouble while using the platform.
          </p>
          <p className="mb-6">
          They simply have to turn on their camera and patiently wait for a random girl to appear on their front. This is all that is required from the user. If they wish to move to another user, they simply need to tap on ‘Next’ to find another girl suiting their needs.
          </p>
          <h4 className="leading-6 mb-4 text-xl">
          Pros & Cons of CooMeet

          </h4>
          <p className="mb-6">
          Pros
          </p>
          <ul>
          <li>CooMeet provides users with a specific gender to interact with, unlike many other video cam chat platforms.</li>  
          <li>It offers people to try it out for free.</li>    
          <li>It provides a very simple user interface with support for customer service.</li>    
          <li>The platform has a very good collection of the opposite gender, which provides users with an interesting choice.</li>    
  
          </ul>
          <p className="mb-6">
          Cons
          </p>
          <ul>
          <li>The complete services of CooMeet are only available in its paid version. People can check out different filters and settings only after buying a certain payment plan.</li>  
          </ul>
        </section>

        <section className="container w-full  mx-auto my-28">
          <h3 className="text-theme-text text-4xl leading-tight  mb-12">
            Frequently Asked Questions (FAQs)
          </h3>
          <ul className="flex flex-wrap justify-between">
            <li className="mb-10 max-w-md  ">
              <h5 className="mb-4 text-base">
              What are the payment plans offered to the users?

              </h5>
              <p>
              CooMeet offers its users three payment plans starting from Monthly, Semi-Annual, and Yearly plans ranging from $9.99/month, $7.99/month, and $4.99/month, respectively.
              </p>
            </li>
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">
              What are the different payment procedures applicable for CooMeet?

              </h5>
              <p>
              Users can consider adopting multiple methods for paying up their fees. They can use PayPal, debit cards, cryptocurrency, and banks offering VISA and MasterCard.
              </p>
            </li>
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">How to get yourselves registered on CooMeet?

</h5>
              <p>
              You need to tap on the 'Get Free Trial' button to get started with CooMeet. The platform does not require any sign-ups.
              </p>
            </li>
            <li className="mb-10 max-w-md">
              <h5 className="mb-4 text-base">Can users use CooMeet on their mobiles?
</h5>
              <p>
              People were initially provided with a PC application for CooMeet. However, it is now available to be downloaded across mobile phones too.
              </p>
            </li>
            <li className=" max-w-md">
              <h5 className="mb-4 text-base">
              How can I get connected with a performer of my choice?

              </h5>
              <p>
              CooMeet allows you to filter out the girls that you wish to have a chat with. It will link you to the page where you would be allowed to select the girls that have been most popular across the platform.
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
      </div>
    </Layout>
  )
}
