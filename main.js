
function EnviarMensaje() {
    var nom = document.getElementById('nombre').value;
    var tele = document.getElementById('tele').value;
    var ce = document.getElementById('ce').value;    
    alert('Apreciado' +nom+ 'hemos recibido su mensaje. Nos comunicaremos al telefono'
    +tele+' o direccion de email' +ce+ 'en los proximos dias');
}