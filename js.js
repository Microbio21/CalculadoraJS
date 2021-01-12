// let abrir = document.getElementById('abrir');
 // let listado = document.getElementById('listado');
 // abrir.addEventListener('click', ()=> {
//     listado.classList.toggle('on');
// });

function calcular() {
    document.getElementById('calcular').addEventListener('click', ()=> {
        let opciones = document.getElementById('opciones').value;
        let n1 = parseFloat(document.getElementById('n1').value);
        let n2 = parseFloat(document.getElementById('n2').value);
        let respuesta = document.getElementById('dato');
        let r;
        if(opciones == '+') {
            r = (n1 + n2);
        }else if(opciones == '-') {
            r = (n1 - n2);
        }else if(opciones == '/') {
            r = (n1 / n2);
        }else if(opciones == '*') {
            r = (n1 * n2);
        }else if(opciones == '%') {
            r = (n1 * n2) / 100 + '%';
        }

        respuesta.innerHTML = r;
    });
}
calcular();


