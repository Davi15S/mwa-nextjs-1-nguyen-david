import React from 'react'
import Navbar from "../components/index/Navbar"
import Head from "next/head"
import Hero from '../components/portfolio/Hero'
import GalleryNavbar from '../components/portfolio/GalleryNavbar'
import Gallery from '../components/portfolio/Gallery'
import Contact from '../components/index/Contact'
import Footer from '../components/index/Footer'
import Copyright from '../components/index/Copyright'

function Portfolio() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />

                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');
                </style>
                <style>
                    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@700&display=swap');
                </style>
            </Head>


            <Navbar />
            <Hero />
            <GalleryNavbar />
            <Gallery />
            <Contact bg="#FFF2DD" textColor="black" />
            <Footer />
            <Copyright />
        </div>
    )
}

export default Portfolio