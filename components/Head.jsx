import React from 'react'
import Head from 'next/head'

function HeadApp(props) {
    return (
        <>
            <Head>
                <title>{props.title ? props.title : 'Healthy Fit | Diet of The Day '}</title>
                <meta property="og:title" content={props.content ? props.content : 'Healthy Fit'} key="title" />
                <link rel="icon" src='favico.ico' />

            </Head>
        </>
    )
}

export default HeadApp