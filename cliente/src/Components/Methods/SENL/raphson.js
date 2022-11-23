import * as math from "mathjs";

const raphsonSearch = (Fun, DerF, X0, Tol, Niter, err) => {
    let s = X0;
    let con = "";
    Niter = Niter > 500? 500: Niter;
    if (Niter <= 0 ) {
        return {
            conclusion: "Las iteraciones deben ser mayor a 0",
            table: null
        };
    } 
    if (math.evaluate(Fun, { x: X0 }).im) { 
        return {
            conclusion: "X0 no esta definido en el dominio de f(x) = " + X0,
            table: null
        };
    } 
    if (Tol <= 0 ) {
        return {
            conclusion: "La tolerancia deber ser mayor que 0",
            table: null
        };
    } 
    let results = [];
    let count = 0;
    let x = {x: s};
    if(Number.isNaN(x.x)){
        return {
            conclusion: "Valor no permitido" + x.x,
            table: null
        };
    }
    let fx = math.evaluate(Fun, x);
    if (fx.im) {
        return {
            conclusion: "f(x) no esta definido en el dominio de la función = " + x.x,
            table: null
        };
    }
    let fxDF = math.evaluate(DerF, x);
    if (fxDF.im) {
        return {
            conclusion: "f'(x) no esta definido en el dominio de la función = " + x.x,
            table: results
        };
    }
    let E = 100;
    results.push(
        {
            "Niter":count,
            "xi": s,
            "xiEval": fx,
            "xiDF": fxDF,
            "E": ""
        }
    );
    while (E > Tol && fx !== 0 && fxDF !== 0 && count < Niter){
        x.x = (x.x - (fx/fxDF))
        if(Number.isNaN(x.x)){
            return {
                conclusion: "Valor no permitido" + x.x,
                table: results
            };
        }
        fx = math.evaluate(Fun, x);
        if (fx.im) {
            return {
                conclusion: "f(x) no esta definido en el dominio de la función = " + x.x,
                table: results
            };
        }
        fxDF = math.evaluate(DerF, x);
        if (fxDF.im) {
            return {
                conclusion: "f'(x) no esta definido en el dominio de la función = " + x.x,
                table: results
            };
        }
        E = err === 1? math.abs(x.x - s): math.abs(math.abs(x.x - s) /x.x);
        s = x.x;
        count += 1;
        results.push(
            {
                "Niter":count,
                "xi": s,
                "xiEval": fx,
                "xiDF": fxDF,
                "E": E
            }
        );
    }
    if (fx === 0){
        s = x.x;
        con = s + " es raiz de f(x)";
    }
    else if (E < Tol){
        s = x.x;
        con = s + " es una aproximacion de un raiz de f(x) con una tolerancia " + Tol;
    }
    else{
        con = "Fracaso en " + Niter + " iteraciones ";
    }
    return {
        conclusion: con,
        table: results
    }};

export default raphsonSearch;