const cardBtn = document.querySelectorAll('.title .btn button')
const cardContent = document.querySelectorAll('#card ul')
const card2 = document.querySelector('#card .arbor')
const card3 = document.querySelector('#card .vegetarian')
console.log(cardContent, cardBtn)

card2.style.display = 'none'
card3.style.display = 'none'

cardBtn.forEach(function(target, index, array){
    target.addEventListener('click',function(){
        for(let i of cardBtn){i.classList.remove('active')}
        target.classList.add('active')
        for(let i of cardContent){i.style.display = 'none'}
        cardContent[index].style.display = 'flex'
    })
})