import React from 'react'
import HeroSection from "./component/HeroSection"
import VideoSection from './component/VideoSection'
import AboutSection from './component/AboutSection'
import AccordionSection from './component/AccordionSection'
import VideoAlbum from './component/VideoAlbum'
import SectionColor from './component/SectionColor'
export default function page() {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <AboutSection />
      <AccordionSection />
      <VideoAlbum />
      <SectionColor/>
    </>
  )
}
