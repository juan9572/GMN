import * as math from "mathjs";

const pfSearch = (Fun, GFun, X0, Tol, Niter, err) => {
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
    if (math.evaluate(GFun, { x: X0 }).im) { 
        return {
            conclusion: "X0 no esta definido en el dominio de g(x) = " + X0,
            table: null
        };
    } 
    if (Tol <= 0 ) {
        return {
            conclusion: "La tolerancia deber ser mayor que 0",
            table: null
        };
    }
    if (Fun === GFun) {
        return {
            conclusion: "f(x) no puede ser igual que g(x)",
            table: null
        };
      }
    let results = [];
    let count = 0;
    let x = {x: s};
    let fx = math.evaluate(Fun, x);
    let gx = math.evaluate(GFun, x);
    let E = 100;
    results.push(
        {
            "Niter":count,
            "x": s,
            "xiEvalF": fx,
            "xiEvalG": gx,
            "E": ""
        }
    );
    while (E > Tol && fx !== 0 && count < Niter){
        if (math.evaluate(GFun, x).im) {
            return {
                conclusion: "g(x) no esta definido en el dominio de la función = " + x.x,
                table: results
            };
        }
        x.x = math.evaluate(GFun, x);
        if (math.evaluate(Fun, x).im) {
            return {
                conclusion: "f(x) no esta definido en el dominio de la función = " + x.x,
                table: results
            };
        }
        fx = math.evaluate(Fun, x);
        if (math.evaluate(GFun, x).im) {
            return {
                conclusion: "g(x) no esta definido en el dominio de la función = " + x.x,
                table: results
            };
        }
        gx = math.evaluate(GFun, x);
        E = err === 1? math.abs(x.x - s): math.abs(math.abs(x.x - s) /x.x);
        s = x.x;
        count += 1;
        results.push(
            {
                "Niter":count,
                "x": s,
                "xiEvalF": fx,
                "xiEvalG": gx,
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

export default pfSearch;