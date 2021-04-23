const bob = document.querySelector('#kopf')
let pxSpeicher = 0

function moveBob () {
    pxSpeicher += 50
    bob.style.left = pxSpeicher + 'px';
}

bob.addEventListener('click', moveBob)