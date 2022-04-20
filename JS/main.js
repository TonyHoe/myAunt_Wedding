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
    }, 4500);
}