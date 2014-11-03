(function($){
    var images = [1,2,3];

    var hideImages = function(){
        var i = 1;
        for(i;i<=10;i++){
            var image = "#img"+ String(i);
            $(image).hide();
        }
    };


    var showImages = function(images){
        var i = 0;
        var id = '#img';
        console.log('\n');
        for(i;i<3;i++){
            $(id+images[i]).show();
            console.log(images[i]);
        }
    };

    var cycleForward = function(images){
        if (images[0] === 10){
            images[0] = 1;
            images[1] ++;
            images[2] ++;
        }else if (images[1] === 10){
            images[0] ++;
            images[1] = 1;
            images[2] ++;
        }else if (images[2] === 10){
            images[0] ++;
            images[1] ++;
            images[2] = 1;
        }else{
            images[0] ++;
            images[1] ++;
            images[2] ++;
        }
    };

    var cycleBack = function(images){
        if (images[0] === 1){
            images[0] = 10;
            images[1] --;
            images[2] --;
        }else if (images[1] === 1){
            images[0] --;
            images[1] = 10;
            images[2] --;
        }else if (images[2] === 1){
            images[0] --;
            images[1] --;
            images[2] = 10;
        }else{
            images[0] --;
            images[1] --;
            images[2] --;
        }
    };

    function smoothScroll(){
        $('a[href*=#]:not([href=#])').on('click', function(e) {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }

            e.preventDefault();
            return false;
        });
    }

    function init(){
        hideImages();
        showImages(images);
        smoothScroll();

        // event listeners
        $('#forward-button').on('click', function(e){
            cycleForward(images);
            hideImages();
            showImages(images);

            e.preventDefault();
            return false;
        });

        $('#back-button').on('click', function(e){
            cycleBack(images);
            hideImages();
            showImages(images);

            e.preventDefault();
            return false;
        });
    }

    init();

})(jQuery);