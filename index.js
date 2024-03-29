// NAV SECTION

const nav = document.querySelector(".nav");
const navButtons = document.querySelectorAll(".navigate");
const hamburger = document.getElementById("menu");
const close = document.getElementById("close");
const aboutButton = document.getElementById("aboutpage");
const testButton = document.getElementById("testi");
const mentButton = document.getElementById("ment");
const home = document.getElementById("homeAnchor");
const footerAnchor = document.getElementById("contact-anchor");

hamburger.addEventListener("click", ()=>{
    hamburger.classList.add("inactive");
    close.classList.add("active");
    nav.classList.add("active");
})

close.addEventListener("click", ()=>{
    hamburger.classList.remove("inactive");
    close.classList.remove("active");
    nav.classList.remove("active");
})

navButtons.forEach(p=>{
    p.addEventListener("click", (k)=>{
        p.style.backgroundColor = "none";

        let present = k.currentTarget.classList

        if(present.contains("B")){
            navButtons[0].style.backgroundColor = "transparent";
            navButtons[1].style.backgroundColor = "rgba(255, 255, 255, 1)";
            navButtons[2].style.backgroundColor = "transparent";
            navButtons[3].style.backgroundColor = "transparent";
            navButtons[4].style.backgroundColor = "transparent";
            navButtons[4].style.borderColor = "white";
            
            home.style.color = "rgba(255, 255, 255, 1)";
            aboutButton.style.color = "rgba(0, 5, 17, 1)";
            testButton.style.color = "rgba(255, 255, 255, 1)";
            footerAnchor.style.color = "rgba(255, 255, 255, 1)";
           
        }

        else if (present.contains("C")){
            navButtons[0].style.backgroundColor = "transparent";
            navButtons[1].style.backgroundColor = "transparent";
            navButtons[2].style.backgroundColor = "rgba(255, 255, 255, 1)";
            navButtons[3].style.backgroundColor = "transparent";
            navButtons[4].style.backgroundColor = "transparent";
            navButtons[4].style.borderColor = "white";
            footerAnchor.style.color = "rgba(255, 255, 255, 1)";
            aboutButton.style.color = "rgba(255, 255, 255, 1)";
            home.style.color = "rgba(255, 255, 255, 1)";
            testButton.style.color = "rgba(0, 5, 17, 1)";
            mentButton.style.color = "rgba(255, 255, 255, 1)";
        }

        else if (present.contains("D")){
            navButtons[0].style.backgroundColor = "transparent";
            navButtons[1].style.backgroundColor = "transparent";
            navButtons[2].style.backgroundColor = "transparent";
            navButtons[3].style.backgroundColor = "rgba(255, 255, 255, 1)";
            navButtons[4].style.backgroundColor = "transparent";
            navButtons[4].style.borderColor = "white";
            footerAnchor.style.color = "rgba(255, 255, 255, 1)";
            aboutButton.style.color = "white";
            home.style.color = "rgba(255, 255, 255, 1)";
            testButton.style.color = "rgba(255, 255, 255, 1)";
            
            mentButton.style.color ="rgba(0, 5, 17, 1)";
        }

        else if (present.contains("A")){
            navButtons[0].style.backgroundColor = "rgba(255, 255, 255, 1)";
            navButtons[1].style.backgroundColor = "transparent";
            navButtons[2].style.backgroundColor = "transparent";
            navButtons[3].style.backgroundColor = "transparent";
            navButtons[4].style.backgroundColor = "transparent";
            navButtons[4].style.borderColor = "white";
            footerAnchor.style.color = "rgba(255, 255, 255, 1)";
            aboutButton.style.color = "white";
            home.style.color = "rgba(0, 5, 17, 1)";
            testButton.style.color = "rgba(255, 255, 255, 1)";
            mentButton.style.color = "rgba(255, 255, 255, 1)";
        }
        else if(present.contains("E")){
            navButtons[0].style.backgroundColor = "transparent";
            navButtons[1].style.backgroundColor = "transparent";
            navButtons[2].style.backgroundColor = "transparent";
            navButtons[3].style.backgroundColor = "transparent";
            navButtons[4].style.backgroundColor = "white";
            navButtons[4].style.borderColor = "rgba(42, 124, 199, 1)";
            footerAnchor.style.color = "rgba(0, 5, 17, 1)";
            aboutButton.style.color = "white";
            home.style.color = "rgba(255, 255, 255, 1)";
            testButton.style.color = "rgba(255, 255, 255, 1)";
            mentButton.style.color = "rgba(255, 255, 255, 1)";
        }





        // mobile response
        hamburger.classList.remove("inactive");
        close.classList.remove("active");
        nav.classList.remove("active");
        aboutButton.classList.add("active");
    })
})

// navButtons.forEach(k=>{
//     k.addEventListener("click", (h)=>{
//         let holder = h.classList.currentTarget
//         if (holdercontains("B")){
//             k.classList.add("active");

//         }
//     })
// })

// HIIGHLIGHTING THRCLICKED NAV BUTTONS 



// FEATURING SECTION

const promptOne = document.getElementById("prompt1");
const responseOne = document.getElementById("ans1");
const arrowOne = document.getElementById("arrow-1");
const arrowOned = document.getElementById("arrow-1-d");

const arrow1 = document.querySelector(".arrow1");

const promptTwo = document.getElementById("prompt2");
const arrowTwo = document.getElementById("arrow-2");
const arrowTwod = document.getElementById("arrow2-d");
const responseTwo = document.getElementById("ans2");

const promptThree = document.getElementById("prompt3");
const arrowThree = document.getElementById("arrow-3");
const arrowThreed = document.getElementById("arrow-3-d");
const responseThree = document.getElementById("ans3");

const promptFour =  document.getElementById("prompt4");
const arrowafaour = document.getElementById("arrow-4");
const arrowFourd = document.getElementById("arrow-4-d");
const responseFour = document.getElementById("ans4");





arrowOne.addEventListener("click", ()=>{
    arrowOne.classList.add("inactive");
    arrowOned.classList.add("active");
    promptOne.classList.add("clicked");
    responseOne.classList.add("active");
});

arrowOned.addEventListener("click", ()=>{
    arrowOned.classList.remove("active");
    arrowOne.classList.remove("inactive");
    promptOne.classList.remove("clicked");
    responseOne.classList.remove("active");
})


arrowTwo.addEventListener("click", ()=>{
    arrowTwo.classList.add("inactive");
    arrowTwod.classList.add("active");
    promptTwo.classList.add("clicked");
    responseTwo.classList.add("active");
    
   
})

arrowTwod.addEventListener("click", ()=>{
    arrowTwod.classList.remove("active");
    arrowTwo.classList.remove("inactive");
    promptTwo.classList.remove("clicked");
    responseTwo.classList.remove("active");

})

arrowThree.addEventListener("click", ()=>{
    arrowThree.classList.add("inactive");
    arrowThreed.classList.add("active");
    promptThree.classList.add("clicked");
    responseThree.classList.add("active");
})

arrowThreed.addEventListener("click", ()=>{
    arrowThreed.classList.remove("active");
    arrowThree.classList.remove("inactive");
    promptThree.classList.remove("clicked");
    responseThree.classList.remove("active");
})

arrowafaour.addEventListener("click", ()=>{
    arrowafaour.classList.add("inactive");
    arrowFourd.classList.add("active");
    promptFour.classList.add("clicked");
    responseFour.classList.add("active");
})

arrowFourd.addEventListener("click", ()=>{
    arrowFourd.classList.remove("active");
    arrowafaour.classList.remove("inactive");
    promptFour.classList.remove("clicked");
    responseFour.classList.remove("active");
})

const promptFive = document.getElementById("prompt5");
const arrowFive = document.getElementById("arrow-5");
const arrowFived = document.getElementById("arrow-5-d");
const responseFive = document.getElementById("ans5");


arrowFive.addEventListener("click", ()=>{
    arrowFive.classList.add("inactive");
    arrowFived.classList.add("active");
    promptFive.classList.add("clicked");
    responseFive.classList.add("active");
})


arrowFived.addEventListener("click", ()=>{
    arrowFived.classList.remove("active");
    arrowFive.classList.remove("inactive");
    promptFive.classList.remove("clicked");
    responseFive.classList.remove("active");
})

const testimonialData =  [
    {
        name: "David Akomolafe",
        photo: "./images/unsplash_vjMgqUkS8q8.png",
        shotpics: "./images/dark-testimonials-1-user-2 (4).jpg",
        testimonyone: "The Tube Mentorship Program 2.0 was a transformative experience during my transition from school to the industry. Beyond providing essential skills, it offered a unique platform where top professionals generously shared their life experiences.",
        testimonytwo: "From honing emotional intelligence to mastering effective networking and preparing for graduate school, TMP covered a comprehensive range. I was amazed when a young facilitator shared how he could currently live comfortably for 15 years without working. Being a team player every week and for the capstone project was equally impactful.",
        testimonythree: "These acquired skills were instrumental in securing my current job and broadening my perspective beyond the classroom. The program is truly invaluable, and my gratitude goes to NTL, Bisola, and Joy for dedicating their time and expertise. I'm fortunate to have gained a lifelong mentor through this enriching journey!",
    },

    {
        name: "Adam Abbdulrasheed",
        photo: "./images/unsplash_vjMgqUkS8q8 (1).png",
        shotpics: "./images/dark-testimonials-1-user-2 (1).jpg",
        testimony: "Participating in the Tube mentorship program has been nothing short of transformative for my career journey. The guidance and support I received from my mentor were not just professional, but profoundly personal. Through their wisdom and encouragement, I discovered facets of my potential that I never knew existed. The program provided a nurturing environment where I could openly discuss challenges and uncertainties, fostering a sense of belonging and growth. The camaraderie within the mentorship community was infectious, creating lasting connections that extend far beyond the program itself. The impact on my career has been undeniable, propelling me to heights I once considered unattainable. I am not just a beneficiary of knowledge; I am a testament to the power of mentorship, and I wholeheartedly endorse the Tube mentorship program to anyone seeking not just guidance, but a life-changing experience. ",
    },

    {
        name: "Ajamobe Babalola Emmanuel",
        photo: "./images/unsplash_vjMgqUkS8q8 (2).png",
        shotpics: "./images/dark-testimonials-1-user-2 (2).jpg",
        testimonyone: "Being in the TMP last year was one of my major highlights and achievements of 2023. The program provided me with the opportunity to learn from various industry experts who covered key topics such as communication, CV writing, emotional intelligence, mindset, and other skills essential for every individual to become the preferred candidate for the future workplace.",
        testimonytwo: "During this program, I not only met industry experts but also connected with like-minded individuals—students in their final year or recent graduates from their programs. They not only challenged me but also inspired me to improve, contributing to my personal and collective success. Additionally, I was blessed with a very kind-hearted mentor who guided me in the right direction, and we still maintain a strong relationship even after the TMP concluded."
    },
    
    {  name: "Temitayo Adenijo",
       photo: "./images/unsplash_vjMgqUkS8q8 (3).png",
       shotpics: "./images/dark-testimonials-1-user-2 (3).jpg",
       testimonyone: "TMP was more than a mentorship program but a life changing program for me. TMP helped me to know what would be required of me when I transition into the workspace and also prepared me for it. The mentorship offered insight into topics I needed to be a choice candidate as I move into the future of work and these topics were taught by industry experts. What about the amazing opportunity to network with intelligent undergraduates like me from universities across Nigeria? TMP is a place to be."
    },

    {
        name: "Usaama Ssewankambo",
        photo:"./images/Usaama.png",
        shotpics:"./images/usamashot.jpg",
        bg:  "rgba(55, 98, 76, 1)",
        testimonyone: "The Tube Mentorship Program was a transformative experience in my journey of personal and professional development. I completed the program ready to face the highly competitive world outside school, thanks to the well-thought-out core curriculum that opened my eyes and mind to the soft skills like growing a growth mindset, identifying and maximizing opportunities, emotional intelligence, networking, and writing a compelling CV and other documents about myself. The well-thought-out accountability system fostered a culture of teamwork, especially during the group capstone project, and I enjoyed the peer support that saw my group win the grand prize. I definitely testify that participating in the TMP set me apart. Much gratitude to the founders of TMP for this great spirit of pan-Africanism. I highly recommend this to all final-year students."
    },
     
    {
        name: "Kaitochukwu Chukwudi",
        photo:"./images/chukwudi.png",
        shotpics:"./images/chukudishot.jpg",
        testimonyone: "My TMP experience was wholesome. As a final year student who was trying to find her feet career-wise and needed mentorship, this program became an opportunity to not only gain the required knowledge and skills needed to build a solid career profile, but also, it provided me a mentor for life, one that has continually helped to shape and mould me to become industry ready and relevant.",
        testimonytwo: "Each and every session, from the book reviews to the project presentation, were all tailored towards participants growth, collaboration and learning enhancement, and for this, I am sincerely grateful to the organizers; Abisola Kuku, Adenike Tokan-Lawal, and Joy Boloma. I encourage every finalist to grab this life-changing opportunity that will intentionally set a path for their future.",
        bg: "rgba(67, 55, 98, 1)"

    }

]

const testimonies = document.querySelector(".testimonies");
const picture = document.querySelector(".mentee");
const roundphoto = document.getElementById("passport");

const indicateA = document.getElementById("mentssA");
const indicateB = document.querySelector(".mentssB");
const indicateC = document.querySelector(".mentssC");
const indicateD = document.querySelector(".mentssD");
const indicateE = document.querySelector(".mentssE");
const indicateF = document.querySelector(".mentssF");

const bkwSlider = document.querySelector(".backward");
const fwdSlider = document.querySelector(".forward");

const paraOne = document.getElementById("test1");
const paraTwo = document.getElementById("test2");
const paraThree = document.getElementById("test3");
const menteeName = document.getElementById("mentee-Name");

let sliderNote = 1;
fwdSlider.addEventListener("click", ()=>{
    sliderNote++;
    if(sliderNote ===1){
        paraOne.innerHTML = testimonialData[0].testimonyone;
        paraTwo.innerHTML = testimonialData[0].testimonytwo;
        paraThree.innerHTML = testimonialData[0].testimonythree;
        menteeName.innerHTML = testimonialData[0].name;
        picture.src = testimonialData[0].photo;
        roundphoto.src = testimonialData[0].shotpics;
        testimonies.classList.remove("babalola");
        testimonies.classList.remove("lady");
        testimonies.classList.remove("usaama");
        testimonies.classList.remove("chukwudi");

        indicateA.classList.remove("inactive");
        indicateB.classList.remove("active");
        indicateC.classList.remove("active");
        indicateD.classList.remove("active");
        indicateE.classList.remove("active");
        indicateF.classList.remove("active");
    }

    else if(sliderNote ===2){
        paraOne.innerHTML = testimonialData[1].testimony;
        paraTwo.innerHTML = ""
        paraThree.innerHTML = ""
        menteeName.innerHTML = testimonialData[1].name;
        picture.src = testimonialData[1].photo;
        roundphoto.src = testimonialData[1].shotpics;
        testimonies.classList.remove("babalola");
        testimonies.classList.remove("lady");
        testimonies.classList.remove("usaama");
        testimonies.classList.remove("chukwudi");

        indicateA.classList.add("inactive");
        indicateB.classList.add("active");
        indicateC.classList.remove("active");
        indicateD.classList.remove("active");
        indicateE.classList.remove("active");
        indicateF.classList.remove("active");
    }
    else if(sliderNote ===3){
        paraOne.innerHTML = testimonialData[2].testimonyone;
        paraTwo.innerHTML = testimonialData[2].testimonytwo;
        paraThree.innerHTML = ""
        menteeName.innerHTML = testimonialData[2].name;
        picture.src = testimonialData[2].photo;
        roundphoto.src = testimonialData[2].shotpics;
        testimonies.classList.remove("lady");
        testimonies.classList.add("babalola");
        testimonies.classList.remove("usaama");
        testimonies.classList.remove("chukwudi");

        indicateA.classList.add("inactive");
        indicateB.classList.remove("active");
        indicateC.classList.add("active");
        indicateD.classList.remove("active");
        indicateE.classList.remove("active");
        indicateF.classList.remove("active");
    }
    else if (sliderNote === 4){
        paraOne.innerHTML = testimonialData[3].testimonyone;
        paraTwo.innerHTML = ""
        paraThree.innerHTML = ""
        menteeName.innerHTML = testimonialData[3].name;
        picture.src = testimonialData[3].photo;
        roundphoto.src = testimonialData[3].shotpics;
        testimonies.classList.remove("babalola");
        testimonies.classList.add("lady");
        testimonies.classList.remove("usaama");
        testimonies.classList.remove("chukwudi");

        indicateA.classList.add("inactive");
        indicateB.classList.remove("active");
        indicateC.classList.remove("active");
        indicateD.classList.add("active");
        indicateE.classList.remove("active");
        indicateF.classList.remove("active");
    }

    else if(sliderNote === 5){
        paraOne.innerHTML = testimonialData[4].testimonyone;
        paraTwo.innerHTML = ""
        paraThree.innerHTML = ""
        menteeName.innerHTML = testimonialData[4].name;
        picture.src = testimonialData[4].photo;
        roundphoto.src = testimonialData[4].shotpics;
        testimonies.classList.add("usaama");
        testimonies.classList.remove("babalola");
        testimonies.classList.remove("lady");
        testimonies.classList.remove("chukwudi");

        indicateA.classList.add("inactive");
        indicateB.classList.remove("active");
        indicateC.classList.remove("active");
        indicateD.classList.remove("active");
        indicateE.classList.add("active");
        indicateF.classList.remove("active");

    }

    else if(sliderNote === 6){
        paraOne.innerHTML = testimonialData[5].testimonyone;
        paraTwo.innerHTML = testimonialData[5].testimonytwo;
        paraThree.innerHTML = ""
        menteeName.innerHTML = testimonialData[5].name;
        picture.src = testimonialData[5].photo;
        roundphoto.src = testimonialData[5].shotpics;
        testimonies.classList.remove("usaama");
        testimonies.classList.remove("babalola");
        testimonies.classList.remove("lady");
        testimonies.classList.add("chukwudi");

        indicateA.classList.add("inactive");
        indicateB.classList.remove("active");
        indicateC.classList.remove("active");
        indicateD.classList.remove("active");
        indicateE.classList.remove("active");
        indicateF.classList.add("active");
    }

    else{
        sliderNote = 6;
    }
     return  sliderNote
})

bkwSlider.addEventListener("click", ()=>{
    sliderNote--;
    if(sliderNote ===1){
        paraOne.innerHTML = testimonialData[0].testimonyone;
        paraTwo.innerHTML = testimonialData[0].testimonytwo;
        paraThree.innerHTML = testimonialData[0].testimonythree;
        menteeName.innerHTML = testimonialData[0].name;
        picture.src = testimonialData[0].photo;
        roundphoto.src = testimonialData[0].shotpics;
        testimonies.classList.remove("babalola");
        testimonies.classList.remove("lady");
        testimonies.classList.remove("usaama");
        testimonies.classList.remove("chukwudi");
        

        indicateA.classList.remove("inactive");
        indicateB.classList.remove("active");
        indicateC.classList.remove("active");
        indicateD.classList.remove("active");
        indicateE.classList.remove("active");
        indicateF.classList.remove("active");
    }
    else if(sliderNote ===2){
        paraOne.innerHTML = testimonialData[1].testimony;
        paraTwo.innerHTML = ""
        paraThree.innerHTML = ""
        menteeName.innerHTML = testimonialData[1].name;
        picture.src = testimonialData[1].photo;
        roundphoto.src = testimonialData[1].shotpics;
        testimonies.classList.remove("babalola");
        testimonies.classList.remove("lady");
        testimonies.classList.remove("usaama");
        testimonies.classList.remove("chukwudi");

        indicateA.classList.add("inactive");
        indicateB.classList.add("active");
        indicateC.classList.remove("active");
        indicateD.classList.remove("active");
        indicateE.classList.remove("active");
        indicateF.classList.remove("active");
    }

    else if(sliderNote ===3){
        paraOne.innerHTML = testimonialData[2].testimonyone;
        paraTwo.innerHTML = testimonialData[2].testimonytwo;
        paraThree.innerHTML = ""
        menteeName.innerHTML = testimonialData[2].name;
        picture.src = testimonialData[2].photo;
        roundphoto.src = testimonialData[2].shotpics;
        testimonies.classList.add("babalola");
        testimonies.classList.remove("lady");
        testimonies.classList.remove("usaama");
        testimonies.classList.remove("chukwudi");

        indicateA.classList.add("inactive");
        indicateB.classList.remove("active");
        indicateC.classList.add("active");
        indicateD.classList.remove("active");
        indicateE.classList.remove("active");
        indicateF.classList.remove("active");
    }

    else if (sliderNote === 4){
        paraOne.innerHTML = testimonialData[3].testimonyone;
        paraTwo.innerHTML = ""
        paraThree.innerHTML = ""
        menteeName.innerHTML = testimonialData[3].name;
        picture.src = testimonialData[3].photo;
        roundphoto.src = testimonialData[3].shotpics;
        testimonies.classList.remove("babalola");
        testimonies.classList.add("lady");
        testimonies.classList.remove("usaama");
        testimonies.classList.remove("chukwudi");

        indicateA.classList.add("inactive");
        indicateB.classList.remove("active");
        indicateC.classList.remove("active");
        indicateD.classList.add("active");
        indicateE.classList.remove("active");
        indicateF.classList.remove("active");
    }
    else if(sliderNote === 5){
        paraOne.innerHTML = testimonialData[4].testimonyone;
        paraTwo.innerHTML = ""
        paraThree.innerHTML = ""
        menteeName.innerHTML = testimonialData[4].name;
        picture.src = testimonialData[4].photo;
        roundphoto.src = testimonialData[4].shotpics;
        testimonies.classList.add("usaama");
        testimonies.classList.remove("babalola");
        testimonies.classList.remove("lady");
        testimonies.classList.remove("chukwudi");

        indicateA.classList.add("inactive");
        indicateB.classList.remove("active");
        indicateC.classList.remove("active");
        indicateD.classList.remove("active");
        indicateE.classList.add("active");
        indicateF.classList.remove("active");

    }

    else if (sliderNote ===0){
        sliderNote =1;
    }

    return sliderNote
})

document.addEventListener("DOMContentLoaded", ()=>{
    navButtons[0].style.backgroundColor = "white";
    home.style.color = "rgba(0, 5, 17, 1)"

    const scrollContainer = document.querySelector(".facilitator-body");
    scrollContainer.scrollLeft = 0;
    const indicatorContainer = document.querySelector(".indicator-container");
    let currentIndex = 0;

    for(let i = 0; i<scrollContainer.children.length; i++){
        const indicator = document.createElement("div");
        indicator.classList.add("indicator");
        indicatorContainer.appendChild(indicator);


        // Adding click event to the coreponding element

        indicator.addEventListener("click", ()=>{
            currentIndex = i;
            updateIndicators();
            scrollContainer.scrollLeft =  i*scrollContainer.children[0].offsetWidth;

        });

    }

    // UPDATING indicators based on scroll position

    scrollContainer .addEventListener("scroll", ()=>{
         currentIndex = Math.round(scrollContainer.scrollLeft/scrollContainer.children[0].offsetWidth);
        //  updateIndicators();
         updateIndicators();
    })

    // function to update indicators base on the current scroll position

    const updateIndicators = ()=>{
        const indicators = document.querySelectorAll(".indicator");

        indicators.forEach((indicator,index)=>{
            if (index === currentIndex){
                indicator.style.backgroundColor ="white";

            }

            else{
                indicator.style.backgroundColor = "#FFC13E";
            }
        })
        
    }

})
