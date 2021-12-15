const card = document.querySelector('.card') || document.querySelector('.card-nft')

card.addEventListener('mousemove', cardMouseMove)
card.addEventListener('mouseleave', returnCard)
card.addEventListener('mouseenter', setTransition())

function returnCard() {
    setTransition()
    card.style.transform = `rotateX(0deg) rotateY(0deg)`
}

function cardMouseMove(e) {
    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;
    const centerX = card.offsetLeft + cardWidth/2   
    const centerY = card.offsetTop + cardHeight/2 
    const mouseX = e.clientX - centerX
    const mouseY = e.clientY - centerY

    const rotateX = (25 * mouseY / (cardHeight/2)).toFixed(2)
    const rotateY = ((-1) * 25 * mouseX / (cardWidth/2)).toFixed(2)

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05,1.05)`
}

function setTransition() {
    clearTimeout(card.whatever)
    card.style.transition = `transform 3000ms cubic-bezier(.03,.98,.52,.99)`
    card.whatever = setTimeout(() => {
        card.style.transition = null
    }, 3000)
}

