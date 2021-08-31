"use strict";
class FigurasG {
    constructor(aq, ar, br, btri, htri, bp, hp, BTra, btrap, htra, rcir) {
        this.aq = aq;
        this.ar = ar;
        this.br = br;
        this.btri = btri;
        this.htri = htri;
        this.bp = bp;
        this.hp = hp;
        this.BTra = BTra;
        this.btrap = btrap;
        this.htra = htra;
        this.rcir = rcir;
    }
    getareaquadrado() {
        let quadrado = this.aq * this.aq;
        return quadrado + ' area do quadrado';
    }
    getarearectangulo() {
        let rectangulo = this.ar * this.br;
        return rectangulo + ' area do rectangulo';
    }
    getareatriangulo() {
        let triangulo = (this.btri * this.htri) / 2;
        return triangulo + ' area do triangulo';
    }
    getareaparalelogramo() {
        let paralelogramo = this.bp * this.hp;
        return paralelogramo + ' area do paralelogramo';
    }
    gettrapezio() {
        let trapezio = ((this.BTra + this.btrap) / 2) * this.htra;
        return trapezio + ' area do trapezio';
    }
    getcirculo() {
        let circulo = 3.14 * (this.rcir * this.rcir);
        return circulo + ' area do circulo';
    }
}
const figurasg = new FigurasG(4, 5, 6, 3, 2, 8, 3, 10, 3, 4, 9);
console.log(figurasg.getareaquadrado());
console.log(figurasg.getarearectangulo());
console.log(figurasg.getareatriangulo());
console.log(figurasg.getareaparalelogramo());
console.log(figurasg.gettrapezio());
console.log(figurasg.getcirculo());
