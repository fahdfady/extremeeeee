const bannerBlob = document.querySelectorAll(".blob");

onmousemove = (MouseEvent) => {
    let divide = 40;

    let x = MouseEvent.clientX / divide;
    let y = MouseEvent.clientY / divide;

    let x2 = -MouseEvent.clientX / divide;
    let y2 = -MouseEvent.clientY / divide;

    for (let i = 0; i < bannerBlob.length; i++) {};

    bannerBlob[0].style.transform = "translate3d(" + x2 + 'px,' + y2 + 'px, 0px)';
    bannerBlob[1].style.transform = "translate3d(" + x + 'px,' + y2 + 'px, 0px)';
    bannerBlob[2].style.transform = "translate3d(" + x + 'px,' + y + 'px, 0px)';
    bannerBlob[3].style.transform = "translate3d(" + x2 + 'px,' + y + 'px, 0px)';
};