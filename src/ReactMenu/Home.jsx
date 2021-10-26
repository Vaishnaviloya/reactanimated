import React from 'react'
import Common from './Common'

const Home = () => {
    return(
        <>
            <h1>Welcome to Home</h1>
            <Common name='Welcome to Home'
                imgsrc='https://previews.123rf.com/images/stockbroker/stockbroker1408/stockbroker140800933/31013364-portrait-of-happy-family-in-garden.jpg'
                visit='/service'
                btname='Our Services'/>
        </>
    )
}

export default Home