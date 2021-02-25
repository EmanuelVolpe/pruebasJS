"use strict";
class Producto {
    constructor(nombre, precio, anio){
        this.nombre = nombre;
        this.precio = precio;
        this.anio = anio;
    }

    getNombre(){
        return this.nombre;
    }

    getPrecio(){
        return this.precio;
    }

    getAnio(){
        return this.anio;
    }
}

class UI { //Clase de Interfaz

    agregaProducto(producto){
        const lista = document.querySelector('#lista-productos');
        const elem = document.createElement('div')
        elem.innerHTML = `
                            <div class="card text-center mb-4">
                                <div class="card-body">
                                    <strong>Producto:<strong>${producto.getNombre()} 
                                    <strong>Precio:<strong>${producto.getPrecio()} 
                                    <strong>Anio:<strong>${producto.getAnio()}
                                    <a href="#" class="btn btn-danger" name="delete">DELETE</a>
                                </div>
                            </div>`;
        lista.appendChild(elem);
        this.muestraMensaje("Producto agregado con exito");
    }

    resetearFormulario(){
        document.querySelector('#producto-form').reset();
    }

    eliminaProducto(producto){
        if(producto.name === "delete"){
            producto.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
        }
        this.muestraMensaje("Producto eliminado con exito");

    }

    muestraMensaje(mensaje){
        const par = document.createElement("h1");
        par.innerHTML += mensaje;
        const contenedor = document.querySelector(".container");
        const app = document.querySelector("#app");
        contenedor.insertBefore(par, app);
        setTimeout(function(){
            document.querySelector("h1").remove()},3000);
    }
}

let lista = [];

const formulario = document.querySelector('#producto-form');

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    const nombre = document.querySelector('#nombre').value;
    const precio = document.querySelector('#precio').value;
    const anio = document.querySelector('#anio').value;
    
    const p = new Producto(nombre, precio, anio);
    lista.push(p);
    console.log(lista);

    const vista = new UI();
    vista.agregaProducto(p);
    vista.resetearFormulario();
    
});

const list = document.querySelector('#lista-productos');
list.addEventListener('click', function(e) {
    const vista = new UI();
    vista.eliminaProducto(e.target);
});