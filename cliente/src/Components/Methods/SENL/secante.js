import * as math from "mathjs";

const secanteSearch = (Fun, X0, X1, Tol, Niter, err) => {
    let s = 0;
    let con = "";
    Niter = Niter > 500? 500: Niter;
    if (Niter <= 0 ) {
        return {
            conclusion: "Las iteraciones deben ser mayor a 0",
            table: null
        };
    }
    if (X0 === X1) {
        return {
            conclusion: "X0 debe ser distinto de X1",
            table: null
        };
    } 
    if (math.evaluate(Fun, { x: X0 }).im) { 
        return {
            conclusion: "X0 no esta definido en el dominio de f(x) = " + X0,
            table: null
        };
    } 
    if (math.evaluate(Fun, { x: X1 }).im) { 
        return {
            conclusion: "X1 no esta definido en el dominio de f(x) = " + X1,
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
    let x = {x: X0};
    if(Number.isNaN(x.x)){
        return {
            conclusion: "Valor no permitido" + x.x,
            table: null
        };
    }
    let fX0 = math.evaluate(Fun, x);
    x = {x: X1};
    if(Number.isNaN(x.x)){
        return {
            conclusion: "Valor no permitido" + x.x,
            table: null
        };
    }
    let fX1 = math.evaluate(Fun, x);
    if (fX0 === 0){
        s = X0;
        con = s + " es raiz de f(x)";
    }else if(fX1 === 0){
        s = X1;
        con = s + " es raiz de f(x)";
    }else{
        let Xa = X1 - fX1 * ((X1 - X0) / (fX1 - fX0));
        x.x = Xa;
        if(Number.isNaN(x.x)){
            return {
                conclusion: "Valor no permitido" + x.x,
                table: results
            };
        }
        let fXa = math.evaluate(Fun, x);
        if (fXa.im) { 
            return {
                conclusion: "f(x) no esta definido en el dominio de la función = " + x.x,
                table: null
            };
        }
        results.push(
            {
                "Niter":count,
                "x": X0,
                "xEval" : fX0,
                "E": ""
            }
        );
        count += 1;
        results.push(
            {
                "Niter":count,
                "x": X1,
                "xEval" : fX1,
                "E": ""
            }
        );
        let E = math.abs(X1 - Xa);
        count += 1;
        results.push(
            {
                "Niter":count,
                "x": Xa,
                "xEval" : fXa,
                "E": err === 1? E: math.abs(E/Xa)
            }
        );
        if (fXa === 0){
            s = x.x;
			con = s + " es raiz de f(x)";
        }else{
            while (E > Tol && fXa !== 0 && count < Niter){
                X0 = X1;
                fX0 = fX1;
                X1 = Xa;
                fX1 = fXa;
                count += 1;
                if (fX1 - fX0 !== 0){
                    Xa = X1 - fX1 * ((X1 - X0) / (fX1 - fX0));
                    x.x = Xa
                    if(Number.isNaN(x.x)){
                        return {
                            conclusion: "Valor no permitido" + x.x,
                            table: results
                        };
                    }
                    fXa = math.evaluate(Fun, x);
                    if (fXa.im) { 
                        return {
                            conclusion: "f(x) no esta definido en el dominio de la función = " + x.x,
                            table: results
                        };
                    }
                    E = math.abs(X1 - Xa);
                    count += 1;
                    results.push(
                        {
                            "Niter":count,
                            "x": Xa,
                            "xEval" : fXa,
                            "E": err === 1? E: math.abs(E/Xa)
                        }
                    );
                }else{
                    con = "No se puede dividir por 0, error con los parametros o función";
                    break;
                }
            }
            if (fXa===0){
                s = x.x;
                con = s + " es raiz de f(x)";
            }
            else if (math.abs(fXa) <= Tol){
                s = x.x;
                con = Xa + " es una aproximacion de un raiz de f(x) con una tolerancia " + Tol
            }
            else{
                con = "Fracaso en " + Niter + " iteraciones"
            }
        }
    }
    return {
        conclusion: con,
        table: results
    }};

export default secanteSearch;