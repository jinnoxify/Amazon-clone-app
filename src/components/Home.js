import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <img
                className='home__image'
                src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
                alt=''
            />

            <div className='home__row'>
                <Product
                    id='123221321'
                    title='Blink XT2 Outdoor/Indoor Smart Security Camera with cloud storage included, 2-way audio, 2-year battery life – 5 camera kit'
                    price={379.99}
                    rating={4}
                    image='https://images-na.ssl-images-amazon.com/images/I/31wnX0mTN7L._AC_US218_.jpg'
                />
                <Product
                    id='12321341'
                    title='The lean startup: How constant innovation creates radically successful businesses paperback'
                    price={11.99}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg'
                />
            </div>
            <div className='home__row'>
                <Product
                    id='1264321341'
                    title='Ring Solar Panel White - Compatible with Ring Spotlight Cam Battery and Stick Up Cam Battery'
                    price={49.99}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/51QzQADXNFL._AC_US218_.jpg'
                />
                <Product
                    id='12321558341'
                    title='Ring Access Controller Pro Cellular with Stick Up Cam Battery - Professional installation required'
                    price={399.99}
                    rating={5}
                    image='https://m.media-amazon.com/images/I/51fSkMJ1haL._AC_UY218_.jpg'
                />
                <Product
                    id='12454321341'
                    title='Ring Peephole Cam with Rechargeable Battery Pack and Echo Show 5'
                    price={499.99}
                    rating={3}
                    image='https://m.media-amazon.com/images/I/51xe08zvyFL._AC_UY218_.jpg'
                />
            </div>
            <div className='home__row'>
                <Product
                    id='123889+21341'
                    title='Roccat Khan Aimo - Wired Headset - Full Size - Black'
                    price={119.99}
                    rating={5}
                    image='https://images-na.ssl-images-amazon.com/images/I/310u77o3efL._AC_US218_.jpg'
                />
            </div>
        </div>
    )
}

export default Home
