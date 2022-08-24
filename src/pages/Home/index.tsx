import React from 'react'
import Head from './Head'
import Hand from './Hand'
import ExpectProcess from './ExpectProcess'
import WantLearn from './WantLearn'
import HotClass from './HotClass'
import Learning from './Learning'
import Article from './Article'

const Home: React.FC = () => {
    return (
        <>
            <Head />
            <Hand />
            <ExpectProcess />
            <WantLearn />
            <HotClass />
            <Learning />
            <Article />
        </>
    )
}


export default Home