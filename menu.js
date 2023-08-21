
var menuItem = document.querySelectorAll('.item-menu')

function selectItem() {
    menuItem.forEach((item) =>
    item.classList.remove('ativo')    
    )
    this.classList.add('ativo')
}

menuItem.forEach((item) =>
    item.addEventListener('click',selectItem)
)

// Expandir o menu

var btnExp = document.querySelector('#btn-exp');
var menuSide = document.querySelector('.menu-lateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})