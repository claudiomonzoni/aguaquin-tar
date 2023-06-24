import './style.scss'

import gsap from 'gsap'
gsap.from('main div',{
    y: 100,
    ease: "power1.inOut",
    stagger: .2,
})