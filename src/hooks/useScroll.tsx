"use client"
import React, { useEffect, useState } from 'react'

const useScroll = () => {
    const [scrollCount, setScrollCount] = useState<number>(window.scrollY);

    function scrollHandler() {
        setScrollCount(window.scrollY)
    }

    useEffect(() => {


        window.addEventListener("scroll", scrollHandler)

        return () => window.removeEventListener("scroll", scrollHandler)
    }, [])

    return {
        scrollCount
    }
}

export default useScroll