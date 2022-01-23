let si = document.querySelector('#si');
let no = document.querySelector('#no');

si.addEventListener('click', fnSi)

function fnSi() {
    swal("Sabia que ibas a querer", "Gracias por aceptar, Te amo", "success");
}
no.addEventListener('mouseover', fnNo)

function fnNo() {
    let x = Math.round(Math.random() * 105);
    let y = Math.round(Math.random() * 100);
    no.style.left = x + '%';
    no.style.top = y + '%';
}