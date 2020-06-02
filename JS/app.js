// btn_menu

let btn_menu = document.querySelector(".btn-menu");
let links = document.querySelector(".links")

btn_menu.addEventListener("click", function(){
    links.classList.toggle("linksOut")
});

// smoth scroll
$(document).ready(function(){
    $("a").on('click', function(event) {
  
      if (this.hash !== "") {
        
        event.preventDefault();
  
        var hash = this.hash;
  
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){
  
            window.location.hash = hash;
        });
      } // End if
    });
  });