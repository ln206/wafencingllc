
$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop':  $target.offset().top //no need of parseInt here
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });

    jQuery("#gallery").unitegallery();
});

var shiftWindow = function() { scrollBy(0, -50) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);

// var gallery_api;
// jQuery(document).ready(function(){ 
//     gallery_api = jQuery("#gallery").unitegallery();
//     gallery_api.play(); 
// }); 
