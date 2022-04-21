var btn_Play = document.querySelector('#modal-play .ic-play');
var main_page = document.getElementById('main_page');
var background__heart = document.getElementById('back-ground__heart');

btn_Play.onclick = () => {
    var spinner = document.getElementById('spinner');
    var beginPage = document.getElementById('begin');
    var audioBox = document.querySelector('#audio-container .audio-content');

    btn_Play.style.display = 'none';
    spinner.style.display = 'block';
    setTimeout(() => {
        beginPage.style.display = 'none'
        main_page.style.display = 'block'
        background__heart.style.display = 'block'
        audioBox.play();
    }, 0);
}

window.addEventListener("load", function () {
    const silder = document.querySelector('.silder');
    const silderMain = document.querySelector('.slider-main');
    const silderItems = document.querySelectorAll('.slider-item');
    const silderItem_Width = silderItems[0].offsetWidth;
    const sliderLength = silderItems.length;
    const btnNext = document.querySelector('.slider-next');
    const btnPrev = document.querySelector('.slider-pre');
    let positionX = 0;
    console.log(silderItem_Width);

    btnNext.addEventListener("click", function () {
        HandleChangeSlide(1)
    })

    btnPrev.addEventListener("click", function () {
        HandleChangeSlide(-1)
    })

    function HandleChangeSlide(direction) { /* direction(chiều hướng) */
        if (direction === 1) {
            positionX = positionX - silderItem_Width ;
            console.log(positionX);
        } else if (direction === -1) {
            positionX += silderItem_Width ;
        }
    }
})