import React from "react"

import Layout from "/src/components/layout"
import SEO from "/src/components/seo"

import "@fontsource/open-sans"
import "@fontsource/open-sans/600.css"
import "@fontsource/open-sans/700.css"
import "@fontsource/open-sans/800.css"

import "./index.less"
import VideoCont from "./VideoCont"
import VideoDescription from "./VideoDescription"

export default function videoPage() {
  return (
    <Layout>
      <SEO title="Video chat" description="video chat" />
      <section className="video-chat-header-title pt-20 text-center text-white text-2xl pb-20 md:text-4xl md:bg-center md:pt-32">
        <h1 className="leading-10 mx-1">Omegle Alternative: 12 Best Random Video Chat Sites Like Omegle</h1>
      </section>
      <VideoCont />
      <VideoDescription />
      <section className="w-full container mx-auto py-20">
        <h3 className="text-theme-text text-2xl mb-8">
          What are the advantages of using your Google Voice number for faxing?
        </h3>
        <p className="mb-8">
          Once we receive your request and can confirm that the number is
          portable, we will ask for some additional information and request that
          you upgrade your subscription to a paid plan (Premium, Business, or
          Enterprise). When we receive all your documents and are notified of
          your plan upgrade, we will initiate the porting process and notify you
          accordingly of the progress.
        </p>
        <p className="mb-8">
          Here are some of the advantages of porting out your Google Voice
          number to and send and receive fax using Google Voice:
        </p>
        <p className="mb-8">
          You get to keep your own number: You no longer need to worry about
          letting others know about your new fax number. You will use your own
          Google Voice number to send and receive fax online, and your clients
          and customers won’t feel any difference.
        </p>
        <h3 className="text-theme-text text-2xl mb-4">
          Why use CocoFax to send and receive fax from Google Voice?
        </h3>
        <p className="mb-6">
          Here are some of the advantages of porting out your Google Voice
          number to and send and receive fax using Google Voice:
        </p>
        <ul style={{ backgroundColor: "#F7F9FC" }} className="p-4 mb-10">
          <li className="list-checkout-item mb-2">Send & Receive Faxe</li>
          <li className="list-checkout-item mb-2">Safe, Secure & Encry</li>
          <li className="list-checkout-item mb-2">
            No Fax Maintenance or Phone Charges
          </li>
          <li className="list-checkout-item mb-2">
            View, Crop, Edit & Annotate Faxes
          </li>
        </ul>
        <h3 className="text-theme-text text-2xl mb-4">
          Using your Google Voice number for faxing
        </h3>
        <p className="mb-8">
          Here are some of the advantages of porting out your Google Voice
          number to and send and receive fax using Google Voice:
        </p>
        <p>
          Always available: Regardless of your internet connection status, your
          fax number is always active and ready to receive faxes. You’ll be
          notified via email and push notification as soon as there is a new fax
          in your inbox, and you can easily check your fax archives using
          application on different platforms (See where to download the
          CocoFinder application)
        </p>
      </section>
    </Layout>
  )
}
