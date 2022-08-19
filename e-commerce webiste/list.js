//script for layout by natsasion
//we separate this file with another one to make it easy to manage


document.querySelector('#typeSub').style.display = "none";
document.querySelector('#typeSub2').style.display = "none";


const typeContent = document.querySelector('#dropdown1');
const typeClick = document.querySelector('#typeSub');


typeContent.addEventListener('click', function () {
    if (typeClick.style.display === 'none') {
        typeClick.style.display = 'block';
    } else {
        typeClick.style.display = 'none';
    }
})

const brandsContent = document.querySelector('#dropdown2');
const brandsClick = document.querySelector('#typeSub2');


brandsContent.addEventListener('click', function () {
    if (brandsClick.style.display === 'none') {
        brandsClick.style.display = 'block';
    } else {
        brandsClick.style.display = 'none';
    }
})

