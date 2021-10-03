$(document).ready(function(){
    $surface=$('.surface');
    $car=$('.car');
    $img=$('.car img');
    $song=$('#mySong');
    let flag = true;
   
    const cars=['https://github.com/Raven1233/Moving-car-animation/blob/master/Img_05.png?raw=true', 'https://github.com/Raven1233/Moving-car-animation/blob/master/Img_06.png?raw=true'];
    
    $(document).on('keypress',function(f){
        if(f.which == 13){
            $($surface).toggleClass('movement');
            $($car).toggleClass('carmove');
        }
    })
    $(document).on('keypress',function(f){
        if(f.which == 119){
            if(flag){
                flag=false;
                $img.attr('src',cars[0]);
            }
            else{
                flag=true;
                $img.attr('src',cars[1]);
            }
        }
    })
    document.addEventListener('keydown', function(e) {
        if (e.keyCode == 49) {
          document.getElementById('audio').play();
        }
        if (e.keyCode == 50) {
            document.getElementById('audio').pause();
        }
    })



});
