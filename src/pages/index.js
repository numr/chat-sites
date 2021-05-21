import React, { useState } from 'react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import PeopleSearchUrl from '../images/people-search.svg'
import PeopleSearchUrl02 from '../images/people-search02.svg'
import PhoneLookupUrl from '../images/phone-lookup.svg'
import PhoneLookupUrl02 from '../images/phone-lookup02.svg'
import AddressLookupUrl from '../images/address-lookup.svg'
import EmailLookupUrl from '../images/email-lookup.svg'
import EmailLookupUrl02 from '../images/email-lookup02.svg'


import Layout from "../components/layout"
import SEO from "../components/seo"

import "@fontsource/open-sans"
import "@fontsource/open-sans/600.css"
import "@fontsource/open-sans/700.css"
import "@fontsource/open-sans/800.css"
import "../style/home.css"
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Thumbs,EffectFade,Autoplay } from 'swiper/core';
// import Swiper styles
import 'swiper/swiper-bundle.css'

// install Swiper's Thumbs component
SwiperCore.use([Thumbs,EffectFade,Autoplay]);


export default function IndexPage() {

   const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <Layout>
            <SEO title="Home" description="test" />
            <div className="w-full container mx-auto">
                <svg className="tp-bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1764 1824" width="1764"><circle cx="899" cy="1024" r="800" fill="#F6FEF8"/><path fill="#EFFAFE" d="M0 236.5a88.5 88.5 0 11177 0v47.6c0 22.1 8.2 43.4 23 59.9H98a98 98 0 01-98-98v-9.5z"/><path fill="#F6FEF8" d="M200 236.5a88.5 88.5 0 11177 0v47.6c0 22.1 8.2 43.4 23 59.9H298a98 98 0 01-98-98v-9.5z"/><path fill="#EFFAFE" d="M1577 58c0-32-26-58-58-58h-31.5c-49.4 0-89.5 40-89.5 89.5v97.8a44.8 44.8 0 0089.5 0v-26.6c0-24.7 20-44.7 44.8-44.7 24.7 0 44.7-20 44.7-44.8V58z"/><path fill="#F6FEF8" d="M1764 58c0-32-26-58-58-58h-31.5c-49.4 0-89.5 40-89.5 89.5v97.8a44.8 44.8 0 0089.5 0v-26.6c0-24.7 20-44.7 44.8-44.7 24.7 0 44.7-20 44.7-44.8V58z"/></svg>
                <section className="banner mx-auto">
                    <h1 className="font-extrabold text-black text-center text-5xl">Free People Finder</h1>
                    <ul className="flex items-center font-semibold nav">
                        <li className="curr"><a className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 12" width="20"><path fill="currentColor" d="M13 9l.9.3c1.1.4 1.9 1.5 1.9 2.7H4.2c0-1 .4-1.7 1.1-2.3A4 4 0 017 9.1h.4c.3-.1 1-.3 1-.6l.1-.9v-.2h-.1c-.1-.2-.3-.4-.3-.7l-.2-1c-.3.1-.4-.4-.5-.7V5c0-.2-.3-1 .1-1a2 2 0 01-.2-.7c0-.5 0-1 .2-1.6C7.9.5 9 0 10 0c1 0 2.1.6 2.5 1.7a3.7 3.7 0 01-.2 2.3c.5-.2.2.8.1 1V5c0 .3-.1.7-.4.6V6c0 .4-.1.8-.3 1.1l-.1.2-.2.3v1.1l.5.2h.1l.9.3zm5-.7h-.3c-.3-.1-.7-.2-.9-.4v-.7h.5l.5-.1.3-.1V6.7c-.4-.6-.4-1.3-.3-2v-.6c0-.7-.2-1.4-.8-1.8-.6-.4-1.5-.4-2-.1-1.2.4-1.2 1.5-1.2 2.6 0 .6 0 1.3-.2 1.8-.2.2-.2.3 0 .4l.5.2h.7v.6c0 .2-.3.3-.5.3H14l-.4.3c0 .2.2.2.4.2h.2c.4 0 .8.3 1.1.6.3.2.6.5.7.8h3.3c0-.8-.5-1.4-1.3-1.7zm-12.7.5l-1 .7-.1.2-.2.3H.7c0-.8.5-1.4 1.2-1.7h.3c.4-.1.9-.2 1-.4v-.6c-.4 0-1-.1-1.3-.4v-.3l.2-.2V6l.1-1v-.1c0-.7 0-1.4.3-2 .4-.6 1-.8 1.6-.8 1 0 1.8.5 2 1.5v2.1l.3 1c.1.1.2.2.1.3l-.3.1a3 3 0 01-.7.2h-.3v.5c0 .2 0 .2.2.3h.3l.6.3c.1.1 0 .2 0 .2l-1 .2z" /></svg> People Search</a></li>
                        <li><a className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" width="14"><path fill="currentColor" d="M8 8c-1.3 1.3-2.8 2.6-3.4 2-.9-.9-1.4-1.6-3.3 0-2 1.4-.5 2.5.4 3.3 1 1 4.5 0 8-3.5 3.7-3.6 4.6-7.2 3.6-8.1-.8-.9-1.9-2.3-3.4-.4s-.8 2.4.1 3.3c.6.6-.7 2.1-2 3.4z"/></svg> Phone Lookup</a></li>
                        <li><a className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" width="20"><path fill="currentColor" d="M18.5 9.2l.8-.9v-.2-.3l-2.6-2V1l-.1-.3-.3-.1h-2.2l-.3.1v2.5l-3-2.3c-.2-.2-.5-.3-.8-.3-.3 0-.6 0-.9.3L.8 7.8l-.1.3v.2l.8.9.2.1H2l8-6.7 8 6.6.3.1.2-.1zm-1.8 5.4V9.1L10 3.5 3.3 9v5.6c0 .2.1.4.3.5.1.2.3.2.5.2h4.4V11h3v4.4h4.4c.2 0 .4 0 .5-.2.2-.1.3-.3.3-.5z"/></svg>Address Lookup</a></li>
                        <li><a className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 12" width="16"><path fill="currentColor" d="M8 8c-.3 0-.5 0-1-.3L0 4v7c0 .6.5 1 1 1h14c.6 0 1-.5 1-1V4L9 7.7 8 8zm7-8H1C.4 0 0 .5 0 1.1v1.2l8 4.4 8-4.4V1.1c0-.6-.5-1.1-1-1.1z"/></svg>Email Lookup</a></li>
                    </ul>
                    <form className="flex items-center justify-between">
                        <input className="text-lg" type="text" placeholder="First name" required/>
                        <input className="text-lg" type="text" placeholder="Last name" required/>
                        <button type="submit" className="flex items-center justify-center font-bold text-xl text-white bg-green"><span className="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18"><path fill="#fff" d="M12.4 12.4c.5-.5 1.4-.5 1.9 0l2.6 2.7a1.3 1.3 0 11-1.8 1.8l-2.7-2.6c-.5-.5-.5-1.4 0-2z"/><path fill="#fff" fillRule="evenodd" d="M8 13.3A5.3 5.3 0 108 2.7a5.3 5.3 0 000 10.6zM8 16A8 8 0 108 0a8 8 0 000 16z"/></svg></span> Start Search</button>
                    </form>
                    <p className="flex text-xs pt-4 justify-end items-center text-gray"><svg className="pr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"><path fill="#798793" d="M7.4 8c0-2.2 2-4 4.6-4 2.5 0 4.6 1.8 4.6 4v2.7h-1.8V8.1c0-1.4-1.2-2.5-2.8-2.5-1.6 0-2.8 1.1-2.8 2.5v2.6H7.4V8zm-1.3 2.7H18c.6 0 1.1.5 1.1 1V19c0 .6-.5 1-1.1 1H6c-.6 0-1.1-.4-1.1-1v-7.3c0-.5.5-1 1.1-1zm6.5 6.4v-1.6c.5-.2.8-.6.8-1 0-.7-.6-1.3-1.4-1.3-.8 0-1.4.6-1.4 1.2 0 .5.3 1 .8 1.1v1.6l.1.2h1l.1-.2z"/></svg> This connection is secured</p>
                </section>
                <section className="flex justify-between items-center can">
                    <ul className="flex flex-wrap font-semibold">
                        <li className="flex items-center">Phone Number Identity <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32"><path fill="#00EA66" d="M11.2 7.2c-.9 0-1.6.7-1.6 1.5v12.1h12.8V8.7c0-.8-.7-1.5-1.6-1.5h-9.6zm11.2 14.4H9.6v1.7c0 .8.7 1.5 1.6 1.5h9.6c.9 0 1.6-.7 1.6-1.5v-1.7zm-8-12h3.2v.8h-3.2v-.8z"/></svg></span></li>
                        <li className="flex items-center">Court Records <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32"><path fill="#00EA66" d="M17 19c-.1.4 0 .9.3 1.2l.6.6a1.5 1.5 0 002.1 0l3.5-3.6c.3-.3.5-.7.5-1 0-.5-.2-.9-.5-1.2l-.6-.6c-.3-.4-.9-.5-1.3-.3l-5.1-5.3c.2-.4 0-1-.3-1.3l-.6-.6c-.6-.7-1.5-.7-2.1 0L10 10.5c-.6.6-.6 1.5 0 2.1l.5.6a1.2 1.2 0 001.3.4L13 15l-6.3 6.5c-.3.3-.4.6-.4 1s.1.7.4 1l.7.7c.3.3.6.4 1 .4.2 0 .6-.1.8-.4l6.4-6.6L17 19z"/><path fill="#00EA66" d="M23 22.2h-6.7a2.7 2.7 0 00-2.7 2.7c0 .4.3.7.7.7h10.6c.4 0 .7-.3.7-.7 0-1.5-1.2-2.7-2.6-2.7z"/><path stroke="#00EA66" d="M11.6 13.2L16 8.8M17.2 18.8l4.4-4.4"/></svg></span></li>
                        <li className="flex items-center">Background Check <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32"><path fill="#00EA66" d="M24 10.7v14.9H8v-20h11l5 5zm-3.2 6.9h-4v.8h4v-.8zm-5.6 1.6h-4v.8h4v-.8zm-4-1.6h4v.8h-4v-.8zm9.6 1.6h-4v.8h4v-.8zm-9.6 1.6h4v.8h-4v-.8zm4-8.8h-4v.8h4V12zm0 1.6h-4v.8h4v-.8zm1.6 0h4v.8h-4v-.8zm-1.6 1.6h-4v.8h4v-.8z"/></svg></span></li>
                        <li className="flex items-center">Age and Date of Birth <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32"><path fill="#00EA66" d="M6.4 24.2v1.4h19.2v-1.4c0-.6-.4-1-1-1H24v-2.4a4 4 0 00-4-4h-2.4v-3c0-.6-.4-1-1-1h-1.2a1 1 0 00-1 1v3H12a4 4 0 00-4 4v2.4h-.6a1 1 0 00-1 1zM18.4 8.8a2.4 2.4 0 11-4.8 0c0-1.3 2.4-2.4 2.4-2.4s2.4 1 2.4 2.4z"/></svg></span></li>
                        <li className="flex items-center">Relatives <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32"><path fill="#00EA66" d="M14.3 14.2H8.7l-2.3 2.9 2.3 1.4v6.3h7v-9.1c0-.8-.6-1.5-1.4-1.5zM12 12.8c1.2 0 2.2-1 2.2-2V7.1h-2.7c-.9 0-1.6.7-1.6 1.5v2c0 1.2 1 2.1 2.1 2.1zm11.3 2.6h-4.3a2 2 0 00-2 2v7.4h6.3v-5l2.2-1.3-2.2-3.1zm-3-1.3c1 0 1.8-.8 1.8-1.8V9h-2.4c-.8 0-1.4.6-1.4 1.4v1.8c0 1 .9 1.8 2 1.8z"/></svg></span></li>
                        <li className="flex items-center">Contact Numbers <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32"><path fill="#00EA66" d="M20.5 14.9l-.9-1h-7a819.9 819.9 0 01-4 4.3c-.3.3-.5.6-.6 1a3.6 3.6 0 00-.4 1.7v1.5a2.3 2.3 0 00.7 1.7l.9.5 1 .2H22a2.3 2.3 0 001.7-.7l.5-.8.2-1V21a3.8 3.8 0 00-.4-1.7 429 429 0 01-3.5-4.4zm5.1-2v-2.1l-.1-.4-.3-.3-.4-.3-.4-.2-.9-.5c-.4-.3-1-.5-1.7-.8A17 17 0 0016 7.2l-3 .3a19.8 19.8 0 00-6.2 2.6l-.3.3-.1.4v2c0 .3.1.6.4.9.2.2.5.3.8.3H10l.9-.3.3-.9c0-.7.5-1.2 1.2-1.2h7.2c.7 0 1.2.5 1.2 1.2 0 .3.1.6.4.9.2.2.5.3.8.3h2.4c.3 0 .6-.1.8-.3.3-.3.4-.6.4-.9zM16 21.5a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8z"/></svg></span></li>
                        <li className="flex items-center">Current Address <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32"><path fill="#00EA66" d="M24 9.2c0-.4-.4-.8-.8-.8h-9.4V6.8c0-.2-.2-.4-.4-.4H11c-.3 0-.4.2-.4.4v1.6H8.8c-.4 0-.8.4-.8.8l-1.6 5.6c0 .4.4.8.8.8h17.6c.4 0 .8-.4.8-.8L24 9.2zM8.3 24.8c0 .5.4.8.8.8h5.4v-5c0-.3.1-.5.3-.5h2.4c.2 0 .3.2.3.4v5.1H23c.4 0 .8-.3.8-.8v-8.3H8.3v8.3z"/></svg></span></li>
                        <li className="flex items-center">Traffic Tickets <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32"><path fill="#00EA66" d="M24.2 13.6l-.5-.2-.8-3.6a3.2 3.2 0 00-3.1-2.6h-7.6c-1.5 0-2.8 1-3 2.5l-.9 3.6-.5.3c-1 .4-1.4 1.2-1.4 2.2v5c0 1.4 1 2.4 2.4 2.4h1c.3 1 1.2 1.6 2.2 1.6 1 0 2-.6 2.2-1.6h3.5c.3 1 1.2 1.6 2.2 1.6 1 0 2-.6 2.3-1.6h1c1.4 0 2.4-1 2.4-2.4v-5c0-1-.5-1.8-1.4-2.2zm-12.8 6.9c-1 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6.8 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6zm.2-4.9c-.2 0-.5 0-.6-.3a.6.6 0 01-.2-.7l.7-3.3c.2-.7.8-1.3 1.6-1.3H19c.7 0 1.4.5 1.6 1.3l.7 3.3c0 .3 0 .5-.2.7l-.6.3h-8.8zm9 4.9c-.8 0-1.6-.7-1.6-1.6 0-.9.8-1.6 1.6-1.6 1 0 1.6.7 1.6 1.6 0 .9-.7 1.6-1.6 1.6z"/></svg></span></li>
                        <li className="flex items-center">Sex Offender Data <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32"><path fill="#00EA66" fillRule="evenodd" d="M24 11.5v14.9H8v-20h11l5 5zm-8 3.9v.2a2.3 2.3 0 010 .6v.2h-.2l-.4.2a11.7 11.7 0 01-2.4.2 15.2 15.2 0 01-2-.4v-.3-.6c0-.2 0-.3.2-.4l.4-.2.4-.1a1.3 1.3 0 00.6-.3v-.2l.1-.1V14h-.6l-.2-.3-.1-.3v-.6-.7l.1-.7.4-.5.7-.4h.2l.3-.1h.2l.6.1.4.4.3.4a3.1 3.1 0 01.4 1.5l-.1.5-.2.3c0 .1 0 .2-.2.3l-.6.1v.4l.2.1.3.2.3.1.4.1.3.2c.1 0 .2.1.2.3zm.8 3h4v.8h-4v-.8zM11.2 20h4v.8h-4V20zm4-1.6h-4v.8h4v-.8zm1.6 1.6h4v.8h-4V20zm-1.6 1.6h-4v.8h4v-.8z"/></svg></span></li>
                        <li className="flex items-center">Arrest Records <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32"><path fill="#00EA66" d="M12.3 25h.2l1.4 1.3-1.6.1c-1.8 0-3.5-.7-4.8-2A6 6 0 015.6 20a6 6 0 012.1-4.4 7 7 0 012.6-1.4l1.1-3.7c.2-.7 1-1 1.8-.8l1.1.3v1.6c-.5 0-.9.3-1 .8-.3.7 0 1.3.7 1.6h.4v-3c0-.8.5-1.4 1.3-1.4h4.5c.7 0 1.3.6 1.4 1.3v3.6c1.4.9 2.5 2.2 3 3.8a6.5 6.5 0 01-6.4 8c-1.1.1-2.2-.2-3.3-.7a6.4 6.4 0 01-3-3.9c-.5-1.6-.3-3.3.6-4.8.4-.9 1-1.6 1.9-2v-.1l-.9.6h-1c-1.3 0-2.7.4-3.7 1.2a4.5 4.5 0 00-.1 6.8c1 1 2.2 1.5 3.6 1.5zm7-12.7c0-.7-.6-1.3-1.4-1.3-.7 0-1.3.6-1.3 1.3 0 .7.5 1.3 1.2 1.3h.4c.7 0 1.1-.6 1.1-1.3zM18.4 24a4 4 0 100-8 4 4 0 000 8z"/></svg></span></li>
                        <li className="flex items-center">Vital Records <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32"><path fill="#00EA66" fillRule="evenodd" d="M24 10.7v14.9H8v-20h11l5 5zm-3.2 6.1h-4v.8h4v-.8zm-5.6 1.6h-4v.8h4v-.8zm-4-1.6h4v.8h-4v-.8zm9.6 1.6h-4v.8h4v-.8zM11.2 20h4v.8h-4V20zm4-11.2h-4v.8h4v-.8zm0 1.6h-4v.8h4v-.8z"/></svg></span></li>
                        <li className="flex items-center">Criminal Records <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32"><path fill="#00EA66" fillRule="evenodd" d="M24 10.7v14.9H8v-20h11l5 5zm-7.2 6.9h4v.8h-4v-.8zm-5.6 1.6h4v.8h-4v-.8zm4-1.6h-4v.8h4v-.8zm-4 3.2h4v.8h-4v-.8zm4.2-10c-.3 0-.6-.3-.8-.6-.3-.3-.6-.6-1-.6s-.7.3-1 .6c-.2.3-.5.6-.8.7H11c-.5 0-.8 0-.6.8 0 .3.3.7.7 1v.6c.5.8 1.4 1.3 2.4 1.3s1.8-.5 2.3-1.3v-.5c.5-.4.8-.8.8-1.1.2-.8-.1-.8-.6-.8h-.7z"/><path fill="#00EA66" d="M14 11.1c.1-.1.2-.2 0-.1 0 0-.3 0-.4-.2-.1.3-.5.2-.5.2-.1-.1 0 0 0 .1v.5c-.1.4.2.5.4.5v.2s.2 0 .2-.2c.2 0 .5-.1.4-.5v-.5z"/></svg></span></li>
                    </ul>  
                    <h2 className="font-extrabold text-black text-4xl">What Can I Find on PeopleFinderFree?</h2>
                </section>
                <section className="how-can">
                    <h2 className="font-extrabold text-black text-center text-4xl pb-8">How Can I Use PeoplefinderFree?</h2>
                    <p className="text-center tip">PeopleFinderFree provides in-depth information on a person, including their photos, address, criminal history, property holdings, relatives, and more.</p>
                    <div className="flex">
                        <Swiper
                            slidesPerView={4}
                            allowTouchMove={false}
                            className="tab"
                            onSwiper={setThumbsSwiper}
                        >
                            <SwiperSlide>
                                <h3 className="text-black text-lg pb-4">People Search</h3>
                                <p>Finding people by searching for them through their name. People finder tool to find family members, friends, acquaintances, dates, and more.</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <h3 className="text-black text-lg pb-4">Phone Lookup</h3>
                                <p>Find the identity, location, and other details of a person through phone lookup.</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <h3 className="text-black text-lg pb-4">Address Lookup</h3>
                                <p>Find out who lives at any particular address and their past records with address lookup.</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <h3 className="text-black text-lg pb-4">Email Lookup</h3>
                                <p>Find the social media profiles and other linked accounts of a person with email lookup.</p>
                            </SwiperSlide>
                        </Swiper>
                        <Swiper
                            thumbs={{ swiper: thumbsSwiper }}
                            autoplay={{
                                delay: 2000,
                                stopOnLastSlide: false,
                                disableOnInteraction: true,
                            }}
                            className="switch"
                        >
                            <SwiperSlide>
                            <figure><img src={PeopleSearchUrl} alt="people search" /></figure>
                            </SwiperSlide>
                            <SwiperSlide>
                            <figure><img src={PhoneLookupUrl} alt="phone lookup" /></figure>
                            </SwiperSlide>
                            <SwiperSlide>
                            <figure><img src={AddressLookupUrl} alt="address lookup" /></figure>
                            </SwiperSlide>
                            <SwiperSlide>
                            <figure><img src={EmailLookupUrl} alt="email lookup" /></figure>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
                <section className="why-use">
                    <h2 className="font-extrabold text-black text-center text-4xl pb-20">Why Should You Use PeoplefinderFree?</h2>
                    <div className="flex flex-wrap justify-between">
                        <div className="cell transition">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" width="64"><defs/><g filter="url(#filter0_d)"><circle cx="32" cy="32" r="25.6" fill="#fff"/></g><path fill="#0A40CE" d="M22.4 44c0 .4.4.8.9.8h17.4c.5 0 .9-.4.9-.9v-6.2H22.4v6.2zM38.1 40c.6 0 1.1.5 1.1 1.1 0 .7-.5 1.2-1 1.2-.7 0-1.2-.5-1.2-1.2 0-.6.5-1 1.1-1zM22.4 36h19.2v-7.1H22.4v7.1zm2.6-4.2l.2-.2h5c.2 0 .3 0 .3.2V33l-.2.2h-5a.2.2 0 01-.3-.2v-1.3z"/><path fill="#00EA66" d="M40.7 20.8H23.3c-.5 0-.9.4-.9.8v5.6h19.2v-5.6c0-.4-.4-.8-.9-.8zm-10.2 3.8l-.2.2h-5c-.2 0-.3 0-.3-.2v-1.2l.2-.2h5c.2 0 .3 0 .3.2v1.2z"/><defs><filter id="filter0_d" width="59.2" height="59.2" x="2.4" y="4.4" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="2"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0.0802928 0 0 0 0 0.3875 0 0 0 0.16 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>
                            <h3 className="text-black text-lg py-4">Huge Database</h3>
                            <p>Through integrations with countless public records sources, we have a database with billions of entries. It is hard to miss information on any person through this database.</p>
                        </div>
                        <div className="cell transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" width="64"><defs/><g filter="url(#filter1_d)"><circle cx="32" cy="32" r="25.6" fill="#fff"/></g><g clipPath="url(#clip0)"><path fill="#0A40CE" d="M43.2 22.6a18 18 0 01-5.4 12.2v.3l.1 1.8c.2 1.5-.3 2.7-1.5 3.5L32.5 43a1.2 1.2 0 01-1.9-1 122 122 0 01-.2-3.3c0-.5 0-.5-.6-.6a4.4 4.4 0 01-3.3-2c-.4-.7-.6-1.4-.6-2.2 0-.2-.2-.2-.4-.2l-3.4-.3c-1 0-1.5-1-1-1.9l1.2-1.7 1.2-2a3.6 3.6 0 013.1-1.7l2.4.2.3-.1c1.8-2 4-3.4 6.6-4.3 1.4-.5 2.9-.9 4.4-1h2.3c.4 0 .4 0 .5.5v1.2z"/><path fill="#00EA66" d="M23.9 35.5c.3 0 .5.1.6.5a5.6 5.6 0 003.5 3.5c.5.2.7.7.3 1.1l-1.9 1.8c-.2.2-.4.3-.6.2-.3 0-.5-.3-.5-.6v-.5c0-.4 0-.4-.3-.3l-2 .7h-.6c-.3-.2-.4-.5-.3-.8l.7-2.1c0-.3 0-.3-.3-.3H22a.6.6 0 01-.6-.5c-.1-.2 0-.5.1-.6l1.9-2a.6.6 0 01.5-.1z"/><circle cx="36.8" cy="27.2" r="2.4" fill="#00EA66"/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h22.4v22.4H0z" transform="translate(20.8 20.8)"/></clipPath><filter id="filter1_d" width="59.2" height="59.2" x="2.4" y="4.4" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="2"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0.0802928 0 0 0 0 0.3875 0 0 0 0.16 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>
                            <h3 className="text-black text-lg py-4">Superfast Searches</h3>
                            <p>Even with the huge database, searching for any information through us only takes about a minute or two due to next-gen technology focussed on high-speed computing.</p>
                        </div>
                        <div className="cell transition">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" width="64"><defs/><g filter="url(#filter2_d)"><circle cx="32" cy="32" r="25.6" fill="#fff"/></g><path fill="#0A40CE" d="M32 22.4c-10.5 0-16 8.3-16 9.6 0 1.3 5.5 9.6 16 9.6s16-8.3 16-9.6c0-1.3-5.5-9.6-16-9.6zm0 17c-4 0-7.1-3.3-7.1-7.4 0-4 3.2-7.4 7.1-7.4 4 0 7.1 3.3 7.1 7.4 0 4-3.2 7.4-7.1 7.4z"/><path fill="#00EA66" d="M32 32c-.7-.8 1-3.7 0-3.7-2 0-3.6 1.7-3.6 3.7s1.6 3.7 3.6 3.7 3.6-1.7 3.6-3.7c0-1-3 .7-3.6 0z"/><path stroke="#00EA66" strokeLinecap="round" strokeWidth="2" d="M20.8 43.2l22.4-22.4"/><defs><filter id="filter2_d" width="59.2" height="59.2" x="2.4" y="4.4" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="2"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0.0802928 0 0 0 0 0.3875 0 0 0 0.16 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>
                            <h3 className="text-black text-lg py-4">No Data Tracking</h3>
                            <p>None of your searches is tracked and none of your private data is stored on our servers, which leads to complete privacy and anonymity.</p>
                        </div>
                        <div className="cell transition">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 64 64" width="64"><defs/><g filter="url(#filter3_d)"><circle cx="32" cy="32" r="25.6" fill="#fff"/></g><g clipPath="url(#clip0)"><path fill="#0A40CE" d="M32 40.5a8.6 8.6 0 01-8.5-8.5c0-4.7 3.8-8.5 8.5-8.5s8.5 3.8 8.5 8.5-3.8 8.5-8.5 8.5zM20.3 24.6c-.4 0-.6-.2-.6-.5v-2.7c0-1 .8-1.7 1.7-1.7h1.5c.4 0 .6.2.6.6 0 .3-.3.5-.6.5h-1.5c-.3 0-.6.3-.6.6V24c0 .3-.2.5-.5.5zm2.6 19.7h-1.5c-1 0-1.7-.8-1.7-1.7v-2.4c0-.4.2-.6.6-.6.3 0 .5.2.5.6v2.4c0 .3.3.6.6.6h1.5c.4 0 .6.2.6.5 0 .4-.3.6-.6.6zm19.7 0h-1.5c-.4 0-.6-.2-.6-.6 0-.3.2-.5.6-.5h1.5c.3 0 .6-.3.6-.6v-2.4c0-.4.2-.6.5-.6.4 0 .6.2.6.6v2.4c0 1-.8 1.7-1.7 1.7zm1.1-19.7c-.3 0-.5-.2-.5-.5v-2.7c0-.3-.3-.6-.6-.6h-1.5c-.4 0-.6-.2-.6-.5 0-.4.2-.6.6-.6h1.5c1 0 1.7.8 1.7 1.7V24c0 .3-.2.5-.6.5z"/><path stroke="#00EA66" strokeWidth="2" d="M27.2 32l3.2 2.4L36 28"/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h25.6v25.6H0z" transform="translate(19.2 19.2)"/></clipPath><filter id="filter3_d" width="59.2" height="59.2" x="2.4" y="4.4" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse"><feFlood floodOpacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/><feOffset dy="2"/><feGaussianBlur stdDeviation="2"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0.0802928 0 0 0 0 0.3875 0 0 0 0.16 0"/><feBlend in2="BackgroundImageFix" result="effect1_dropShadow"/><feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"/></filter></defs></svg>
                            <h3 className="text-black text-lg py-4">High Accuracy</h3>
                            <p>The data sources are the same as the official government public records, leading to the highest accuracy when compared to any people search engine.</p>
                        </div>
                    </div>
                </section>
                <section className="how-to">
                    <h2 className="font-extrabold text-black text-4xl pb-8">How to Perform a People Search</h2>
                    <p className="pb-16">Run a search, and find the right person. The data available through People Search Now is commonly used <br/>to help people when they want to:</p>
                    <div className="flex justify-between">
                        <div className="cell transform transition hover:-translate-y-1">
                            <h3 className="pb-4 text-black font-bold">Find Phone Numbers</h3>
                            <p>Skip the hassle of trying to look up the owner of an unlisted phone number yourself. Use our comprehensive reverse phone lookup to get the info you need.</p>
                        </div>
                        <div className="cell transform transition hover:-translate-y-1">
                            <h3 className="pb-4 text-black font-bold">Locate Long Lost Family & Friends</h3>
                            <p>Curious what happened to an old friend or family member? Use our quick people search to find them and see what they’ve been up to.</p>
                        </div>
                        <div className="cell transform transition hover:-translate-y-1">
                            <h3 className="pb-4 text-black font-bold">Find Addresses</h3>
                            <p>Need to find someone’s address? Simply provide a full name or phone number, and we will work to find all of the current and past addresses that are associated with it.</p>
                        </div>
                        <div className="cell transform transition hover:-translate-y-1">
                            <h3 className="pb-4 text-black font-bold">Reconnect with Old Classmates</h3>
                            <p>If you want to find contact info for an old classmate, we can help provide data on where they are now. Then, you can use it to get back in touch.</p>
                        </div>
                    </div>
                    <svg className="bg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1448 1448" width="1448"><circle cx="724" cy="724" r="724" fill="#F6FEF8"/><path fill="#EFFAFE" d="M910 88.5a88.5 88.5 0 11177 0v47.6c0 22.1 8.2 43.4 23 59.9h-102a98 98 0 01-98-98v-9.5z"/><path fill="#F6FEF8" d="M1110 88.5a88.5 88.5 0 01177 0v47.6c0 22.1 8.2 43.4 23 59.9h-102a98 98 0 01-98-98v-9.5z"/></svg>
                </section>
                <section className="how-works">
                    <div className="flex justify-between items-center">
                        <figure><img src={PeopleSearchUrl02} /></figure>  
                        <div className="txt">
                            <h2 className="font-extrabold text-black text-4xl pb-8">How People Search Works?</h2>
                            <p className="pb-4">A People Search through PeoplefinderFree is a very easy thing to do. In fact, it is just as easy as doing a regular Google search, which you know about already.</p>
                            <p>Here is a brief idea of the People Search process through PeoplefinderFree:</p>
                            <ul className="pt-10">
                                <li className="pb-8">
                                    <h4 className="font-bold pb-4"><span className="text-green">Step 1:</span> Visit CocoFinder</h4>
                                    <p>PeoplefinderFree’s People Search does not require an app installation or any other extra step. </p>
                                </li>
                                <li className="pb-8">
                                    <h4 className="font-bold pb-4"><span className="text-green">Step 2:</span> Enter Person’s Details</h4>
                                    <p>Enter the details about the person you wish to search. There are fields like ‘First Name’, ‘Last Name’, and ‘City’. You can enter as much data as you know, PeoplefinderFree will provide you with the rest.</p>
                                </li>
                                <li>
                                    <h4 className="font-bold pb-4"><span className="text-green">Step 3:</span> Search and Find</h4>
                                    <p>Once you have entered the name, click on the ‘Start Search!’ button. PeoplefinderFree will run through its database and search for all the matching entries with your queries.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="how-works">
                    <div className="flex justify-between items-center">
                        <div className="txt">
                            <h2 className="font-extrabold text-black text-4xl pb-8">How People Search Works?</h2>
                            <p className="pb-4">A People Search through PeoplefinderFree is a very easy thing to do. In fact, it is just as easy as doing a regular Google search, which you know about already.</p>
                            <p>Here is a brief idea of the People Search process through PeoplefinderFree:</p>
                        </div>
                        <figure><img src={PhoneLookupUrl02} /></figure>  
                    </div>
                </section>
                <section className="how-works">
                    <div className="flex justify-between items-center">
                        <figure><img src={EmailLookupUrl02} /></figure>
                        <div className="txt">
                            <h2 className="font-extrabold text-black text-4xl pb-8">How People Search Works?</h2>
                            <p className="pb-4">A People Search through PeoplefinderFree is a very easy thing to do. In fact, it is just as easy as doing a regular Google search, which you know about already.</p>
                            <p>Here is a brief idea of the People Search process through PeoplefinderFree:</p>
                        </div>  
                    </div>
                </section>
                <section className="what-can">
                    <h2 className="font-extrabold text-black text-center text-4xl pb-8">What Can People Search be Used for?</h2>
                    <p className="pb-14 text-center">People Search is a very commonly used feature that everyone can utilize. Here are a few use cases of People search:</p>
                    <div className="cell bg-white">
                        <h4 className="pb-4 text-base">Finding Someone From the Past:</h4>
                        <p>We all tend to lose people with time, be it to busy schedules, change of locations, or simply due to normal flow of life. However, people often wish to connect with these people again and People Search is the perfect way to do that.</p>
                        <p>You never know where someone is living currently or what they are doing. Through People Search, you can find people with the help of their name. Once you have all the information you need on them, connecting to them is a piece of cake.</p>
                    </div>
                    <div className="cell bg-white">
                        <h4 className="pb-4 text-base">Finding Information About Yourself:</h4>
                        <p>Many people use People Search as a way to find out what information is available about them on public platforms.</p>
                    </div>
                    <div className="cell bg-white">
                        <h4 className="pb-4 text-base">Checking on New Acquaintances:</h4>
                        <p>We all make new acquaintances every day, whether it is a date in the cafe or someone cozying up to us at our workplace. However, we never know what a person is truly like or has been like.</p>
                    </div>
                    <div className="cell bg-white">
                        <h4 className="pb-4 text-base">Checking on Your New Neighbors:</h4>
                        <p>In order to make sure your family lives in a safe environment, People Search is a very useful tool. You should always know who is living around you, especially when a new person or family is moving nearby.</p>
                    </div>
                    <svg className="bg" width="1448" viewBox="0 0 1448 1448" xmlns="http://www.w3.org/2000/svg"> <circle cx="724" cy="724" r="724" fill="#F6FEF8"/> </svg>
                </section>
                <section className="faq">
                    <h2 className="font-extrabold text-black text-center text-4xl pb-14">Frequently Asked Questions (FAQs)</h2>
                    <details>
                        <summary>How can I find people for free on PeoplefinderFree?</summary>
                        <div className="txt">Just enter the person's name, address, or phone number in the search box and your search results will come back almost instantly. You can click on each person to get full details like their current address, phone number, email address and more. It's free and super easy.</div>
                    </details>
                    <details>
                        <summary>How can I find people for free on PeoplefinderFree?</summary>
                        <div className="txt">Just enter the person's name, address, or phone number in the search box and your search results will come back almost instantly. You can click on each person to get full details like their current address, phone number, email address and more. It's free and super easy.</div>
                    </details>
                    <details>
                        <summary>How can I find people for free on PeoplefinderFree?</summary>
                        <div className="txt">Just enter the person's name, address, or phone number in the search box and your search results will come back almost instantly. You can click on each person to get full details like their current address, phone number, email address and more. It's free and super easy.</div>
                    </details>
                    <details>
                        <summary>How can I find people for free on PeoplefinderFree?</summary>
                        <div className="txt">Just enter the person's name, address, or phone number in the search box and your search results will come back almost instantly. You can click on each person to get full details like their current address, phone number, email address and more. It's free and super easy.</div>
                    </details>
                </section>
            </div>
        </Layout>
    )
}

