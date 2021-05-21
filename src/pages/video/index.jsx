import React, { useState } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { ReactComponent as StarIcon } from "/src/images/video/star.svg"

import Layout from "/src/components/layout"
import SEO from "/src/components/seo"

import "@fontsource/open-sans"
import "@fontsource/open-sans/600.css"
import "@fontsource/open-sans/700.css"
import "@fontsource/open-sans/800.css"
import "./index.less"

export default function videoPage() {
  const videoLsit = [
    {
      id: 1,
      title: "Chatrandom - Tons of matches based on your preferences",
      img: "",
      views: 79,
      outstanding: 9.6,
      webSrc: "",
      desList: [
        "Over 40 million singles worldwide",
        "Unique behavioral matchmaking algorithm",
      ],
    },
  ]

  return (
    <Layout>
      <SEO title="Video chat" description="video chat" />
      <section className="video-chat-header-title pt-32 text-center text-white pt pb-20">
        <h1>The Best Random Video Chat Sites of 2021</h1>
      </section>
      <ul className="w-full video-chat-list container mx-auto">
        {videoLsit.map(it => {
          return (
            <li className="video-chat-item" key={it.id + it.title}>
              <img className="v-i-img" src={it.img} alt={it.title} />
              <div className="v-info-cont">
                <div>
                  <StarIcon />
                  <span>{it.views}</span>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}
