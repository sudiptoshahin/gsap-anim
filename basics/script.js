
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

gsap.to('.square', { duration: 3, rotation: 360, x: 1500, onUpdate: function(){
    console.log(myObject.rotation);
} })
gsap.to('.airship', { duration: 5, x: 1000 });

var myObject = {rotation: 0}
gsap.to(myObject, { duration: 20, rotation: 360, onUpdate: function(){
    console.log(myObject.rotation);
} });

gsap.from('.planet', {duration: 5, opacity: 0, scale: 0.5});
// gsap.from('.circle', {duration: 5, opacity: 0, scale: 0.1});
gsap.from('.circle', {duration: 10, opacity: 0, y: () => Math.random() * 300 -300, scale: 0.3, stagger: 0.25});