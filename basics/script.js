
// gsap.to('.logo', {duration: 2, x: 800});

// gsap.to('.square', {
//     duration: 2, 
//     x: 500, 
//     borderRadius: '20%', 
//     border: '5px solid white',
//     ease: 'bounce'
// });

// gsap.to('.airship', {
//     duration: 5,
//     x: 700,
//     ease: 'back'
// })

gsap.set('.square, .airship', {
    transformOrigin: '50%, 50%'
})

gsap.to('.square', { duration: 3, rotation: 360, x: window.innerWidth - 250, yoyo: true, repeat: 3, onUpdate: function(){
    console.log(myObject.rotation);
    console.log('inner-width: ', window.innerWidth)
} })
gsap.to('.airship', { duration: 5, x: 1000 });

var myObject = {rotation: 0}
gsap.to(myObject, { duration: 20, rotation: 360, onUpdate: function(){
    console.log(myObject.rotation);
} });

// gsap.from('.planet', {duration: 5, opacity: 0, scale: 0.5});
// gsap.from('.circle', {duration: 5, opacity: 0, scale: 0.1});
// gsap.from('.circle', {duration: 10, opacity: 0, y: () => Math.random() * 1, scale: 0.3, stagger: 0.25});

// gsap.to('.circle', {rotation: 360, x: 10, yPercent: 50});


/** GSAP canvas */
const canvas = document.getElementById('test1');
const ctx = canvas.getContext('2d');
ctx.fillStyle = 'blue';

let position = { x: 0, y: 0 };

function draw() {
    ctx.clearReact(0, 0, 300, 300);
    ctx.fillReact(position.x, position.y, 100, 100);
}

// animate x and y point
gsap.to(position, {
    x: 200,
    y: 200,
    duration: 4,
    onUpdate: draw
})

/** GSAP canvas ends */

gsap.from('.star', {
    duration: 1,
    scale: 0.5,
    yoyo: true,
    repeat: 3,
    ease: "power1.out"  
});

// document,querySelector('#pause').onclick = () => tween.pause();

// document.querySelector('#seek').onclick = () => {
//     tween.seek(2);
//     sequenceUpdateDragger();
// };

var tl = gsap.timeline();
// gsap.from('.planet', {duration: 5, opacity: 0, scale: 0.5});
// gsap.from('.circle', {duration: 5, opacity: 0, scale: 0.1});
// gsap.from('.circle', {duration: 10, opacity: 0, y: () => Math.random() * 1, scale: 0.3, stagger: 0.25});

tl.from('.planet', {duration: 5, opacity: 0, scale: 0.5});
tl.from('.circle', {duration: 10, opacity: 0, y: () => Math.random() * 1, scale: 0.3, stagger: 0.25});