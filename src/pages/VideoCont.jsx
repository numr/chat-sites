import React from "react"
import { ReactComponent as StarIcon } from "/src/images/video/star.svg"
import { ReactComponent as CupIcon } from "/src/images/video/cup.svg"
import { ReactComponent as CircleIcon } from "/src/images/video/4_1_circle.svg"
import { videoInfoLsit } from "./videoInfoLsit"

const VideoCont = () => {
  return (
    <ul className="w-full video-chat-list container mx-auto">
      {videoInfoLsit.map((it, index) => {
        return (
          <li
            className="video-chat-item p-8 pl-6 mb-8 flex justify-between items-center flex-wrap"
            key={it.id + it.title}
          >
            <div className="card-size">
              <span className="c-size">{index + 1}</span>
              <CircleIcon />
            </div>

            <div className="flex flex-wrap items-center h-full">
              <div className="img-cont flex items-center justify-center">
                <img className="v-i-img" src={it.img} alt={it.title} />
              </div>
              <div className="v-info-cont h-full md:ml-6 my-4 md:my-0 flex items-start flex-col">
                <div className="flex items-center mb-2">
                  <StarIcon />
                  <span className="ml-2 text-blue font-bold">
                    {it.views} Reviews
                  </span>
                </div>
                <h3 className="font-bold mb-4">{it.title}</h3>
                <ul>
                  {it.features.map(ch => {
                    return (
                      <li
                        className="list-checkout-item leading-6 mb-2"
                        key={ch}
                      >
                        {ch}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div>
              <a href={it.webSrc} className="visit-btn" target="_blank">
                VISIT SITE
              </a>
              <div className="flex items-center justify-center mt-4">
                <span className="text-blue font-bold">Outstanding</span>
                <span className="outstanding-value flex items-center justify-center">
                  <CupIcon className="-ml-2 mr-2" />
                  {it.outstanding}
                </span>
              </div>
            </div>
          </li>
        )
      })}
    </ul>
  )
}
export default VideoCont
