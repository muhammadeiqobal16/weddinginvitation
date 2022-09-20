document.addEventListener(`DOMContentLoaded`, function(){

    const bgMusic = document.getElementById(`bgMusic`);
    const openBtn = document.querySelector(`.openBtn`);
    openBtn.addEventListener(`click`, function(){
        bgMusic.play();
        const mainLetter = document.getElementById(`mainLetter`);
        const coverLetter = document.getElementById(`coverLetter`);
        coverLetter.classList.add(`openCover`);
        setTimeout(function(){
            mainLetter.removeAttribute(`hidden`);
            mainLetter.classList.add(`fadeEffect`);
            coverLetter.toggleAttribute(`hidden`);
        }, 1000);
    })

    window.addEventListener(`scroll`, function(){
        revealBot();
        revealLeft();
        revealRight();
        revealFade();
        revealTransform();
    });
    
    function revealLeft(){
        let reveals = document.querySelectorAll(`.revealLeft`);
    
        for(let i = 0; i < reveals.length; i++){
            let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 100;
    
            if(revealTop < windowHeight - revealPoint){
                reveals[i].classList.add(`activeLeft`);
            }else{
                reveals[i].classList.remove(`activeLeft`);
            }
        }
    }
    
    function revealRight(){
        let reveals = document.querySelectorAll(`.revealRight`);
    
        for(let i = 0; i < reveals.length; i++){
            let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 100;
    
            if(revealTop < windowHeight - revealPoint){
                reveals[i].classList.add(`activeRight`);
            }else{
                reveals[i].classList.remove(`activeRight`);
            }
        }
    }
    
    function revealBot(){
        let reveals = document.querySelectorAll(`.revealBot`);
    
        for(let i = 0; i < reveals.length; i++){
            let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 100;
    
            if(revealTop < windowHeight - revealPoint){
                reveals[i].classList.add(`activeBot`);
            }else{
                reveals[i].classList.remove(`activeBot`);
            }
        }
    }
    
    function revealFade(){
        let reveals = document.querySelectorAll(`.revealFade`);
    
        for(let i = 0; i < reveals.length; i++){
            let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 100;
    
            if(revealTop < windowHeight - revealPoint){
                reveals[i].classList.add(`activeFade`);
            }else{
                reveals[i].classList.remove(`activeFade`);
            }
        }
    }
    
    function revealTransform(){
        let reveals = document.querySelectorAll(`.revealTransform`);
    
        for(let i = 0; i < reveals.length; i++){
            let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 100;
    
            if(revealTop < windowHeight - revealPoint){
                reveals[i].classList.add(`activeTransform`);
            }else{
                reveals[i].classList.remove(`activeTransform`);
            }
        }
    }
});