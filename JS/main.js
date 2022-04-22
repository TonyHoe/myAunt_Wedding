window.addEventListener("load", function () {
    var btn_Play = document.querySelector('#modal-play .ic-play');
    var main_page = document.getElementById('main_page');
    var background__heart = document.getElementById('back-ground__heart');

    btn_Play.onclick = () => {
        var spinner = document.getElementById('spinner');
        var beginPage = document.getElementById('begin');
        var audioBox = document.querySelector('#audio-container .audio-content');
        //_ SLIDER
        var slider = document.getElementById('#slider');
        var sliderMain = document.querySelector('.slider-main');
        var sliderItems = document.querySelectorAll('.slider_item');
        var prevBtn = document.querySelector('.slider-prev');
        var nextBtn = document.querySelector('.slider-next');
        var slidersLength = sliderItems.length;
        let positionX = 0;
        let index = 0;

        // Hiện loading
        btn_Play.style.display = 'none';
        spinner.style.display = 'block';

        // thời gian hiện layout
        setTimeout(() => {
            beginPage.style.display = 'none'
            main_page.style.display = 'block'
            background__heart.style.display = 'block'
            audioBox.play();

            // Slider
            var sliderItemWidth = sliderItems[0].offsetWidth;
            nextBtn.addEventListener("click", function () {
                HandleChangeSlide(1);
            });

            prevBtn.addEventListener("click", function () {
                HandleChangeSlide(-1);
            });

            function HandleChangeSlide(direction) {
                if (direction === 1) {
                    positionX -= sliderItemWidth;
                    index++;
                    sliderMain.style = `transform: translateX(${positionX}px)`
                    if (index >= slidersLength) {
                        positionX = 0;
                        sliderMain.style = `transform: translateX(${positionX}px)`
                        index = 0;
                    }
                } else if (direction === -1) {
                    positionX += sliderItemWidth;
                    index--;
                    sliderMain.style = `transform: translateX(${positionX}px)`
                    if (index <= 0) {
                        positionX = 0;
                        sliderMain.style = `transform: translateX(${positionX}px)`
                        index = 0;
                    }
                }
            }
            //_ auto change slide
            setInterval(function () {
                HandleChangeSlide(1);
            }, 5000);

        }, 4500);
    }
})