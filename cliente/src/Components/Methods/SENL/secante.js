import * as math from "mathjs";

const secanteSearch = (Fun, X0, X1, Tol, Niter, err) => {
    let s = 0;
    let con = "";
    if (Niter < 0 ) {
        throw Error("Max iterations is < 0");
    }
    if (X0 === X1) {
        throw Error("x0 is equal to x1: x0 = " + X0 + " ^ x1 = " + X1);
    } 
    if (math.evaluate(Fun, { x: X0 }).im) { 
        throw Error("a isn´t define in the domine of the function: Xi = " + X0);
    } 
    if (math.evaluate(Fun, { x: X1 }).im) { 
        throw Error("b isn´t define in the domine of the function: Xs = " + X1);
    }
    if (Tol < 0 ) {
        throw Error("tol is an incorrect value: tol = " + Tol);
    } 
    let results = [];
    let count = 0;
    let x = {x: X0};
    let fX0 = math.evaluate(Fun, x);
    x = {x: X1};
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
        let fXa = math.evaluate(Fun, x);
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
                    fXa = math.evaluate(Fun, x);
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