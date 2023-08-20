var img = document.getElementById('img');

    var images = ['imgslider/image5.jpg', 'imgslider/image6.jpg', 'imgslider/image7.jpg', 'imgslider/image8.jpg'];

    var x = 0;

    function slide(){
        if(x<images.length) {
            
            x = x+1;
            
        }else{
            x = 1;
        }
        
        img.innerHTML = "<img src="+images[x-1]+">";
    }

//    auto slide

    setInterval(slide, 2000);