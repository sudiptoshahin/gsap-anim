gsap.registerPlugin(Draggable) 

Draggable.create('#lander', {
    // type: 'y',
    // bounds: document.getElementById('lander'),
    inertia: true,
    onClick: () => {
        console.log('hello')
    },

    onDragEnd: () => {
        console.log('drag items')
    },
});