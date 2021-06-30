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
      <SEO title="Omegle Alternative: 12 Best Random Video Chat Sites Like Omegle" description="Here’s a handpicked list of top 12 random video chat sites that allow exchanges in real-time as near as you can to face-to-face conversations! Check now!" />
      <section className="video-chat-header-title pt-20 text-center text-white text-2xl pb-20 md:text-4xl md:bg-center md:pt-32">
        <h1 className="leading-10 mx-1">12 Best Random Video Chat Sites Like Omegle</h1>

      </section>
      <VideoCont />
      <VideoDescription />
      <section className="w-full container mx-auto py-20">
      </section>
    </Layout>
  )
}
