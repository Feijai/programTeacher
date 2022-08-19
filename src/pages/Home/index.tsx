import React from 'react'
import Head from './Head'
import Hand from './Hand'
import ExpectProcess from './ExpectProcess'
import WantLearn from './WantLearn'

const Home: React.FC = () => {
    return (
        <>
            <Head />
            <Hand />
            <ExpectProcess />
            <WantLearn />
        </>
    )
}


export default Home