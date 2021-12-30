const cambioVista = (call_0) => {

    let cambio = 'vista' + call_0;

    let vistas = ['vista1', 'vista2', 'vista3'];

    vistas = vistas.filter(value => !cambio.includes(value));

    document.getElementById(cambio).style.display = "block";

    for (let cambios of vistas) {
        document.getElementById(cambios).style.display = "none";
    }
}