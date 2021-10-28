$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["DATA SCIENCE ENTHUSIAST", "COMPUTER SCIENCE ENGINEER", "LOVE STATISTICS"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

/* Function calling for projects */
function project1() {
    window.open("https://github.com/anushka012399/Facial_Emotion_Recognition", "_blank");
}
function project2() {
    window.open("https://github.com/anushka012399/Credit_Card_Fraud_Detection", "_blank");
}
function project3() {
    window.open("https://github.com/anushka012399/Battle_Of_Neighborhood", "_blank");
}
function project4() {
    window.open("https://github.com/anushka012399/Health_Insurance_Bill_Prediction", "_blank");
}
function project5() {
    window.open("https://github.com/anushka012399/Mobile_App_Success_Prediction", "_blank");
}
function credly() {
    window.open("https://www.credly.com/users/anushka-patil.b34c5090/badges?sort=-state_updated_at&page=1", "_blank");
}
