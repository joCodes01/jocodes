import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Design from './pages/Design.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import { Navbar } from './components/Navbar.jsx'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/design' element={<Design />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </Router>

      <img src="src/assets/AcordianFold_04_noPrintMarks-2.png" alt="inside of leaflet design for light festival with graphic representations of the installations" width="1400px"></img>
      <img src="src/assets/AcordianFold_04_noPrintMarks-1.png" alt="outside of leaflet design for light festival with graphic representations of the installations" width="1400px"></img>
      <img src="src/assets/perfumeBottle-1.png" alt="crystal perfume bottle design" width="700px"></img>
      <img src="src/assets/perfumeBox-1.png" alt="crystal perfume bottle design" width="700px"></img>
      <img src="src/assets/PerfumeBottleInBox-1.png" alt="crystal perfume bottle design" width="700px"></img>
      <img src="src/assets/perfumeBottleSpray-1.png" alt="crystal perfume bottle design" width="700px"></img>

      <img src="src/assets/starPalette_02.png" alt="stationary mascot design of possum and sugar glider" width="933.33px"></img>
      <img src="src/assets/DJVrax_04-1.png" alt="music flyer illustration with abstract flowing shapes" width="466.66px"></img>
      <img src="src/assets/honeyMalt-scaled.png" alt="2D package design for yellow contempoary milk carton" width="933.33px"></img>
      <img src="src/assets/honeyMalt_package.png" alt="yellow contempoary milk carton design with gold embossd text on 3D render of carton" width="466.66px"></img>
      <img src="src/assets/jazzAlbum_07-1.png" alt="jazz album cover with abstract shapes inspired by cubist movement" width="816.66px"></img>
      <img src="src/assets/typography_02-1.png" alt="typography book cover design in orange with o from different eras" width="583.33px"></img>

      <img src="src/assets/onlineStudy_goldfish.png" alt="study online advert design with a goldfish in a goldfish bowl with headphones on signifying that you can join from anywhere" width="700px"></img>
      <img src="src/assets/onlineStudy_seahorse.png" alt="study online advert design with a seahorse in a goldfish bowl with headphones on signifying that you can join from anywhere" width="700px"></img>

      <img src="src/assets/galahLabel_blue.png" alt="simple graphic label with a galah on blue background" width="466.66px"></img>
      <img src="src/assets/galahLabel_green.png" alt="simple graphic label with a galah on green background" width="466.66px"></img>
      <img src="src/assets/galahLabel_white.png" alt="simple graphic label with a galah on white background" width="466.66px"></img>

      <img src="src/assets/mixtopia-1-scaled.png" alt="Mixtopia music festival poster with cheeky illustrations of local Australian birds (northern rivers)" width="1400px"></img>

      <img src="src/assets/DigitalSlides.jpg" alt="digital slide showing a graphic of a circular light installation" width="700px"></img>
      <img src="src/assets/DigitalSlides4.jpg" alt="digital slide showing a graphic of a panda and bamboo light installation" width="700px"></img>
      <img src="src/assets/DigitalSlides2.jpg" alt="digital slide showing a graphic of a swirling light installation" width="700px"></img>
      <img src="src/assets/DigitalSlides5.jpg" alt="digital slide showing a graphic of a light installation of tiny bright mushrooms around the base of a tree" width="700px"></img>
      <img src="src/assets/DigitalSlides3.jpg" alt="digital slide showing a graphic of a dragon light installation" width="700px"></img>
      <img src="src/assets/DigitalSlides6.jpg" alt="digital slide showing a graphic of a laser light installation" width="700px"></img>

      <img src="src/assets/cyber_security-1.png" alt="advert for cyber security course with illuminated code running downwards" width="466.66px"></img>
      <img src="src/assets/crackingRhythms-1-scaled.png" alt="crystal perfume bottle design" width="933.33px"></img>

      <img src="src/assets/comingHome_small.png" alt="Music event flyer with abstract shapes and soundwaves" width="1400px"></img>


      {/* Display typography pdf booklet here */}

      <img src="src/assets/logo_alice.png" alt="Alices wonderland logo design with a tophat" width="700px"></img>
      <img src="src/assets/logo_impulse.png" alt="impulse logo design elegant curves" width="700px"></img>
      <img src="src/assets/logo_mixtopia.png" alt="Mixtopia logo design with a misic note fot the I" width="700px"></img>
      <img src="src/assets/logo_bubbys.png" alt="Bubbys baby powder logo design shaped like a seal of approval" width="700px"></img>
      <img src="src/assets/logo_squish.png" alt="Squish juice logo design  with the word squish squished" width="700px"></img>
      <img src="src/assets/logo_webtech.png" alt="webtech logo design inside brackets" width="700px"></img>
      <img src="src/assets/logo_fastfood.png" alt="fast food logo design like a neon tube light" width="700px"></img>
      <img src="src/assets/logo_wigmaker.png" alt="Wigmaker Australia logo design with a soft tape measure" width="700px"></img>
      <img src="src/assets/logo_enchantedLumina.png" alt="Enchanted Lumina logo design styled like lights" width="700px"></img>
      <img src="src/assets/logo_cyberSureVPN.png" alt="Cybersure VPN logo design with a sunshine and a green tick" width="700px"></img>
      <img src="src/assets/logo_gelos.png" alt="Gelos logo design with mountains and an eagle" width="700px"></img>
      <img src="src/assets/logo_sunnyspot.png" alt="SynnySpot cabn rental logo design with a yellow spot" width="700px"></img>

      <img src="src/assets/AustralianBirdIllustration_by_Jo.png" alt="logo design" width="1400px"></img>








    </>
  )
}

export default App
