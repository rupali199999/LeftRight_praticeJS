window.addEventListener("mousemove",(details)=>{
    var rect=document.querySelector("#rect");
   //console.log(details);
   var xval=gsap.utils.mapRange(0, window.innerWidth, 100+rect.getBoundingClientRect().width/2, window.innerWidth-(100+rect.getBoundingClientRect().width/2) ,details.clientX);

    gsap.to("#rect",
    {
        left: xval,
        ease:Power3
    });
});