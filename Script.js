var tl = gsap.timeline( {repeat:0 , yoyo:true});

tl.from("#txt h5",{
    duration:0.3,
    x: -120,
    delay:1,
    stagger:0.5,
});
tl.from("#border h3",{
    y:-120,
});
tl.from("#icon i",{
    x: 120,
    stagger:0.5
});
tl.from("#BG h1",{
    scale: 0,
    opacity:0
});
tl.from("#BG img",{
    y: -900,
    duration:1,
    rotate:"50deg"
});
tl.from("#buttom #jk",{
    x: -230,
});
tl.from("#txt4 button",{
    x: 360,
    stagger:0.5
});
tl.from("#kd1",{
    x: -360,
    stagger:0.5,
});
tl.from("#kd2 h5",{
    x: 600,
    stagger:0.5
});
