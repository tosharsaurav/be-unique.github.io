// sidebar work
$(document).ready(function () {
    
    $(".fa-bars").click(function () {
        $(this).toggleClass("fa-times");
        $("#sidebar").toggleClass("slider");
    });

    $(".menunav li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
     
});


const togglebtn = document.getElementById("togglebtn");
const sidebar = document.getElementById("sidebar");

document.onclick = function (e) {
    if (e.target.id !== "sidebar" && e.target.id !== "togglebtn") {
     togglebtn.classList.remove("fa-times");
     sidebar.classList.remove("slider");   
    }
}

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 100) {
        $("#nav").addClass("sticky");
    } else {
        $("#nav").removeClass("sticky");
    }
});

// theam dropdown//
$(document).ready(function () {
    $(".dropdown a").click(function () {
        $(".dropdown ul").toggleClass("active");
    });
});

// theam customaization

let theamColor = document.querySelectorAll('.theam span');

theamColor.forEach(color => color.addEventListener('click', () => {
    let background = color.style.background;
    document.querySelector('body').style.background = background;
}));

$(document).ready(function () {
    
    $('.theam span').click(function(){
          $(this).addClass('activeTheam').siblings().removeClass('activeTheam');      
      });

});

// ============

//typejs plugin code

var typed = new Typed('.typejs', {
        strings: [
          "freasher",
          "beginner",
          "learner",
          "web desginer"
        ],
        typeSpeed: 100,
        backSpeed: 100,
        loop:true

});

// circle progressbar plugin code

$(function(){

  $('.circlechart').circlechart();

});

 // jquery mixtrup gallery plugin
  var mixer = mixitup('.gallery');

// magtific popup plugin code

$(document).ready(function () {

    $('.list').click(function(){
          $(this).addClass('active').siblings().removeClass('active');      
      });

     $('.imageSection').magnificPopup({

        delegate: "a",
        type: "image",
        imageSection: {
          enabled: true
        }

      });
});


// social icon customaization start

$(document).ready(function () {
    
    $('.share .toggleIcon').click(function(){
        $(".share a i").toggleClass('activeIcon');
         $(this).toggleClass('toggleIconClr');
    });
    
});

// social icon customaization end

// jquery aos plugin codes

AOS.init({
  offset:50,
  delay: 2,
  duration: 800
});


// scroll top sectio codes

$(window).scroll(function () {

  if ($(this).scrollTop()>500) {
    $('.scrollUp').fadeIn(400);
  } else {
    $('.scrollUp').fadeOut(300);
  }
});

$('.scrollUp').click(function () {
  $('html, body').animate({ scrollTop: 0 }, 400);
});



// =============================
// preloader codes


