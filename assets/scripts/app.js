const links = document.querySelectorAll('.category__items');
const imgBox = document.querySelectorAll('.img__box');

for(let i = 0; i<links.length; i++){
    links[i].addEventListener('click', function(e){
        for(let k=0; k<links.length; k++){
            links[k].classList.remove('active');
        }
        this.classList.add('active');

        const dataFilter = this.getAttribute('data-filter');
        for(let j = 0; j<imgBox.length; j++){
            imgBox[j].classList.add('hide');
            imgBox[j].classList.remove('active');
            if(imgBox[j].getAttribute('data-item') == dataFilter || dataFilter == "all"){
                imgBox[j].classList.remove('hide');
                imgBox[j].classList.add('active');
            }
        }
            
        e.preventDefault();
    });
}