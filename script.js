const nav=document.querySelector('.nav-part2');
(function page1animation(){
    nav.addEventListener('mouseenter',()=>{
        var tl=gsap.timeline()
        tl.to('.navbottom',{
            height:'20vh',
            // bottom:'-10%',
            
        })
        tl.to('.nav-part2 .ele h4 ',{
         opacity:1,
            // duration:1
        
        });
        tl.from('.ele h4 span',{
            y:20,
            duration:0.5,
           stagger:{
            amount:0.1
           }
        })
    });
    
    nav.addEventListener('mouseleave',()=>{
        var tl=gsap.timeline()
        
       
        tl.to('.ele h4 span',{
            y:1,
            duration:0.5,
           stagger:{
            amount:0.2
           }
        })
        tl.to('.nav-part2 .ele h4 ',{
            opacity:0,
               duration:0.1
           
           })
        tl.to('.navbottom',{
            height:'0vh',
            // bottom:'-10%',
            duration:0.5
            
        })
    });
    
    const movingDiv=document.querySelector('.move img');
})();


(function page2Animation()
{
    document.querySelectorAll('.right-part1').forEach(ele=>{
        ele.addEventListener('mousemove',(dets)=>{
            // console.log(ele.getBoundingClientRect())
           gsap.to(ele.childNodes[3],{
            opacity:1,
            scale:1,
            x:dets.x-ele.getBoundingClientRect().x-100,
            top:dets.y-ele.getBoundingClientRect().y-60
    
           })
        });
        ele.addEventListener('mouseleave',()=>{
          gsap.to(ele.childNodes[3],{
            opacity:0,
            scale:0
          })
        })
    })
})()


function page3Animation(){
    let page3Center=document.querySelector('.hello')
    let video=document.querySelector('.page3 video')
    let paly=false;


    page3Center.addEventListener('click',()=>{
       
            video.play();
            gsap.to(video,{
                transform:"scaleX(1) scaleY(1)",
                opacity:1,
                borderRadius:'0',
                ease: "power1.in",
                duration:0.8
    
            })
            
   
       

    })
    video.addEventListener('click',()=>{
        video.pause();
        gsap.to(video,{
            transform:"scaleX(0) scaleY(0)",
            opacity:0,
            borderRadius:'0',
            ease: 'easeInOut',
            duration:0.6

        })
    })
}

page3Animation()

 const section=document.querySelectorAll('.section')
 section.forEach(ele=>{
    ele.childNodes[3].childNodes[3].addEventListener('mouseenter',()=>{
        ele.childNodes[3].childNodes[3].style.opacity=1;
    })
    ele.childNodes[3].childNodes[3].addEventListener('mouseleave',()=>{
        ele.childNodes[3].childNodes[3].style.opacity=0;
    })
 })

gsap.from('.btn-partI h4',{
    x:0,
    duration:1,
    stagger:{
        amount:0.5
    },
    scrollTrigger:{
        trigger:'.btn-partI',
        scroller:".main",
        // markers:true,
        start: "top 80%",
        end: "top 10%",
        scrub:true

    }
})


function locomotiveAni(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main6" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});






// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotiveAni()

 const tl= gsap.timeline()

tl.from('.page1',{
   opacity:0,
   borderRadius:'300px'
})
tl.from('.page1',{
transform:"scaleX(0.6) scaleY(0.2)",
duration:0.4
})
tl.from('.page1 h1,page1 p , .page1 div',{
    opacity:0,
    y:10,
    stagger:0.2,


})