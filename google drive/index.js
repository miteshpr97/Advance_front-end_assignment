
let i=0;
let btn= document.getElementById('click-btn')
btn.addEventListener('click', function() {
    if(i==0) {
        let divide = document.querySelector('.divide')
        let list = document.querySelector('.list')
        divide.style.display = "none"
        list.style.display = 'flex'
        i=1;

    }

    else if(i=='1') {
        let divide = document.querySelector('.divide')
        let list = document.querySelector('.list')
        divide.style.display = "flex"
        list.style.display = 'none'
        i=0;

    }

});