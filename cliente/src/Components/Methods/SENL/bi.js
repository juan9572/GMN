import * as math from "mathjs";

const incrementalSearch = (Fun, X0, Delta, Niter) => {
    let s = 0;
    let con = "";
    Niter = Niter > 500? 500: Niter;
    if (Niter <= 0 ) {
        return {
            conclusion: "Las iteraciones deben ser mayor a 0",
            table: null
        };
    } 
    if (Delta <= 0 ) {
        return {
            conclusion: "El delta debe ser mayor que 0",
            table: null
        };
    } 
    let results = [];
    let count = 0;
    let x = {x: X0};
    let fX = math.evaluate(Fun, x);
    if (fX.im) { 
        return{
            conclusion: ("f(x) no esta definido en el dominio de la función = " + x.x),
            table: null
        };
    }
    results.push(
        {
            "Niter":count,
            "x":x.x,
            "xEval":fX,
            "cond":""
        }
    );
    if (fX === 0){
        s = x.x;
         con = s + "es raiz de f(x)";
        return {
            conclusion: con,
            table: results
        };
    }else{
        let X1 = X0 + Delta;
        x.x = X1;
        let count = 1;
        let f1 = math.evaluate(Fun, x);
        if (f1.im) {
            return{
                conclusion: ("f(x) no esta definido en el dominio de la función = " + x.x),
                table: results
            };
        }
        while (fX * f1 > 0 && count < Niter){
            X0 = X1;
            fX = f1;
            X1 = X0 + Delta;
            x.x = X1;
            f1 = math.evaluate(Fun, x);
            if (f1.im) { 
                return{
                    conclusion: ("f(x) no esta definido en el dominio de la función: xi = " + x.x),
                    table: results
                }
            }
            results.push(
                {
                    "Niter":count,
                    "x":x.x,
                    "xEval":f1,
                    "cond":fX * f1
                }
            );
            count += + 1;
        }
        if(f1 === 0){
            con = X1 + "es raiz de f(x)";
        }
        else if (fX * f1 < 0){
            con = "Existe una raiz de f(x) entre " + X0 + " y " + X1;
        }
        else{
            con = "Fracaso en " + Niter + " iteraciones ";
        }
    }
    return {
        conclusion: con,
        table: results
    }};

export default incrementalSearch;