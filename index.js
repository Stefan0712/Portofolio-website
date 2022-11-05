

const changeScreen = (from, to) =>{
    if(from==='main-screen' && to==="bottom-screen"){
        document.querySelector('.main-screen').classList.add('moveUp')
        document.querySelector('.bottom-screen').classList.remove('moveDown')
    }else if(from==='bottom-screen' && to==="main-screen"){
        document.querySelector('.main-screen').classList.remove('moveUp')
        document.querySelector('.bottom-screen').classList.add('moveDown')
    }else if(from==='main-screen' && to==="right-screen"){
        document.querySelector('.main-screen').classList.add('moveLeft')
        document.querySelector('.right-screen').classList.remove('moveRight')
    }else if(from==='right-screen' && to==="main-screen"){
        document.querySelector('.main-screen').classList.remove('moveLeft')
        document.querySelector('.right-screen').classList.add('moveRight')
    }else if(from==='main-screen' && to==="left-screen"){
        document.querySelector('.main-screen').classList.add('moveRight')
        document.querySelector('.left-screen').classList.remove('moveLeft')
    }else if(from==='left-screen' && to==="main-screen"){
        document.querySelector('.main-screen').classList.remove('moveRight')
        document.querySelector('.left-screen').classList.add('moveLeft')
    }
}
