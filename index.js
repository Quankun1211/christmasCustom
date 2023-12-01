

const yesBtn = document.getElementById('yes')
const noBtn = document.getElementById('no')
const select = document.querySelector('.select')
const content = document.querySelector('.content')
const giftBox = document.querySelector('.gift-box')
const boxs = document.querySelectorAll('.box')
const gift = document.querySelector('.gift-item')
const giftItems = document.querySelectorAll('.gift-item')
const close = document.querySelectorAll('.close')
const audio = document.getElementById('audio')
const noneSelect = document.querySelector('.none-select')
const backBtn = document.querySelector('.back-btn')
const backGift = document.querySelector('.back-gift-btn')
const noText = document.querySelector('.no-text')
const yesText = document.querySelector('.yes-text')


setTimeout(() =>{
    yesBtn.onclick = () => {
        select.classList.add('none')
        giftBox.classList.remove('none')
    }
},400)
setTimeout(() =>{
    noBtn.onclick = () => {
        select.classList.add('none')
        noneSelect.classList.remove('none')
    }
    noBtn.onmouseover = () => {
        noText.classList.add('none')
        yesText.classList.add('active')
    }

},400)
backBtn.onclick = () => {
    noneSelect.classList.add('none')
    select.classList.remove('none')

}
backGift.onclick = () => {
    giftBox.classList.add('none')
    select.classList.remove('none')

}
boxs.forEach((box, index) => {
    const giftItem = giftItems[index]
    box.onclick = () => {
        giftItem.classList.add('active')
        giftBox.classList.add('none')
    }
})
close.forEach((close, index) => {
    const giftItem = giftItems[index]
    close.onclick = () => {
        giftItem.classList.remove('active')
        giftBox.classList.remove('none')
    }
})



window.onclick = () => {
    audio.play()
}