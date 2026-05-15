import React, { useEffect, useState } from 'react'

const Wallpaper = (props) => {

    const [wallpaper, setWallpaper] = useState("")

    const getWallpaper = () => {

        const randomWallpaper =
            `https://picsum.photos/1920/1080?random=${new Date().getTime()}`

        setWallpaper(randomWallpaper)
    }

    useEffect(() => {
        getWallpaper()

        const interval = setInterval(() => {

    getWallpaper()

}, 5000)

return ()=> clearInterval(interval)

    }, [])

    return (
        <div
            style={{
                height:props.height,
                 width: props.width,
                backgroundImage: `url(${wallpaper})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: -1,
                transition: "background-image 1s ease"
            }}
        >

        </div>
    )
}

export default Wallpaper