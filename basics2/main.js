
var tl = gsap.timeline({ repeat: 2, yoyo: true });

tl.from('.rocket', { duration: 1.5, opacity: 0, scale: 0.3, ease: 'back' });
tl.to('.rocket', { duration: 1, rotation: 360 });
tl.from('.circle', { duration: 1, opacity: 0, y: 150, stagger: 0.25 }, '+=1');

tl.to('.circle', { rotation: 360, duration: 2, ease: 'elastic.inOut' });

/** stagger starts */

// gsap.to('.box', {
//     y: 100,
//     duration: 0.3,
//     stagger: {
//         each: 0.1,
//         from: 'center'
//     },
//     repeat: 2,
//     yoyo: true
// });

let clickCout = 0;
let boxes = gsap.utils.toArray('.box');

document.addEventListener('click', () => {
    gsap.to(gsap.utils.shuffle(boxes), {
        autoAlpha: (clickCout++ % 2) ? 1 : 0,
        duration: 1,
        stagger: {
            each: 0.006,
            amount: 0.5
        }
    })
})

gsap.to('.box', {
    duration: 1,
    scale: 0.1,
    ease: 'power1.inOut',
    repeat: -1,
    yoyo: true,
    stagger: {
        each: 0.1,
        from: 'center',
        grid: 'auto',
        axis: 'x'
    }
})


/** stagger ends */