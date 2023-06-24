import './style.scss'

import gsap from 'gsap'
gsap.from('main div',{
    opacity: 0,
    y: 100,
    ease: "power1.inOut",
    stagger: .2,
})