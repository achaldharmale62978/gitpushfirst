import React from 'react'
import { useMediaQuery } from 'react-responsive'


const Component = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    return (
        <>

            <div>
                <h1>Device Test!</h1>
                {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
                {isBigScreen && <p>You have a huge screen</p>}
                {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
                <p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
                {isRetina && <p>You are retina</p>}


                <div >
                    <br />

                    <div > <img style={{width:'100%'}} src='https://img.freepik.com/free-photo/colorful-design-with-spiral-design_188544-9588.jpg'></img></div>
                    <div>
                        Unsplash › Explore › Images
                        1,000,000+ Free Images
                        Explore the world's premier collection of high-quality pictures—submitted by our community of talented contributors and completely free to use for any purpose.
                    </div>


                </div>
            </div>
        </>
    )
}
export default Component