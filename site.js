// ============ MUDA COR DA TOPBAR ============


var menu = false,
    nomeBloco = document.createElement("div");
nomeBloco.id = "topbar";

onscroll = function() {
    var navScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (navScroll > 70) {
        document.getElementById("topbar").classList.add("menu-bar");
        document.getElementById("img-black").style.display = "block";
        document.getElementById("img-white").style.display = "none";
        document.getElementById("bt_menu").style.color = "black";


    } else {
        document.getElementById("topbar").classList.remove("menu-bar");
        document.getElementById("img-black").style.display = "none";
        document.getElementById("img-white").style.display = "block";
        document.getElementById("bt_menu").style.color = "white";


    }

}



// ============ CONTADOR DE CASOS ============

var i = 0;
var contador = setInterval(function() {
    var valorFinal = 368
    if (i < valorFinal) {
        i = i + valorFinal * 0.01; //ajusta o valor que vai ser incrementado de acordo com  o valor final
        document.getElementById("counter").innerHTML = i.toFixed(0);
    } else {
        document.getElementById("counter").innerHTML = valorFinal;
        clearInterval(contador);
    }
}, 5);


var j = 0;
var contador1 = setInterval(function() {
    var valorFinal1 = 99
    if (j < valorFinal1) {

        j = j + valorFinal1 * 0.01; //ajusta o valor que vai ser incrementado de acordo com  o valor final
        document.getElementById("counter1").innerHTML = j.toFixed(0);
    } else {
        document.getElementById("counter1").innerHTML = valorFinal1;
        clearInterval(contador1);
    }
}, 5);


var k = 0;
var contador2 = setInterval(function() {
    var valorFinal2 = 199
    if (k < valorFinal2) {
        k = k + valorFinal2 * 0.01; //ajusta o valor que vai ser incrementado de acordo com  o valor final
        document.getElementById("counter2").innerHTML = k.toFixed(0);
    } else {
        document.getElementById("counter2").innerHTML = valorFinal2;
        clearInterval(contador2);
    }
}, 5);


var l = 0;
var contador3 = setInterval(function() {
    var valorFinal3 = 12000000
    if (l < valorFinal3) {
        l = l + valorFinal3 * 0.01; //ajusta o valor que vai ser incrementado de acordo com  o valor final
        document.getElementById("counter3").innerHTML = l.toFixed(0);
    } else {
        document.getElementById("counter3").innerHTML = valorFinal3;
        clearInterval(contador3);
    }
}, 5);


// ============ MODAL VIDEO ============  

var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementsByClassName('modalBtn')[0];
var closeBtn = document.getElementsByClassName('closeBtn')[0];

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal() {
    modal.style.display = 'block';
}

function closeModal() {
    modal.style.display = 'none';
}

function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

// ============ SCROLL MENU ============ 

const menuItems = document.querySelectorAll('.nav-bar a');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(element) {
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}

function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.target) - 80;
    scrollToPosition(to);
}

function scrollToPosition(to) {
    window.scroll({
        top: to,
        behavior: "smooth",
    });
}


// ============ BOTÃO MENU ============
var bt_menu = document.querySelector('#bt_menu');
var drawer = document.querySelector('.drawer');

function openDrawer() {
    drawer.classList.add('open');
}

function closeDrawer() {
    drawer.classList.remove('open');
}

bt_menu.addEventListener('click', openDrawer);
drawer.addEventListener('click', closeDrawer);