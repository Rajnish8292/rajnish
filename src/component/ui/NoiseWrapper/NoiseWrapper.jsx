'use client'
import { useEffect, useRef } from 'react'
import './NoiseWrapper.css'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
export default function NoiseWrapper() {
    const turbulence_ref = useRef(null)

    useGSAP(() => {
        if(turbulence_ref.current) {
            gsap.to(turbulence_ref.current, {
                attr: {
                    baseFrequency: '7.7'
                },
                repeat: -1,
                yoyo: true
            })
        }
    }, [])

    return (
        <div className="noise">
            <svg className="noise_filter" viewBox='0 0 353 353' xmlns='http://www.w3.org/2000/svg'>
                <filter id='noiseFilter'>
                    <feTurbulence ref={turbulence_ref}
                        type='fractalNoise' 
                        baseFrequency='8.77' 
                        numOctaves='6' 
                        stitchTiles='stitch'/>
                </filter>
  
                <rect width='100%' height='100%' filter='url(#noiseFilter)'/>
            </svg>
        </div>
    )
}