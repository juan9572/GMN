import * as math from "mathjs";

const nmrSearch = (Fun, DerF, DerS, X0, Tol, Niter, err) => {
    let s = X0;
    let con = "";
    if (Niter < 0 ) {
        throw Error("Max iterations is < 0");
    } 
    if (math.evaluate(Fun, { x: X0 }).im) { 
        throw Error("a isn´t define in the domine of the function: Xi = " + X0);
    } 
    if (Tol < 0 ) {
        throw Error("tol is an incorrect value: tol = " + Tol);
    } 
    let results = [];
    let count = 0;
    let x = {x: s};
    let fx = math.evaluate(Fun, x);
    let fxDF = math.evaluate(DerF, x);
    let fxDS = math.evaluate(DerS, x);
    let E = 100;
    results.push(
        {
            "Niter":count,
            "xi": s,
            "xiEval": fx,
            "xiDF": fxDF,
            "xiDS": fxDS,
            "E": ""
        }
    );
    while (E > Tol && fx !== 0 && fxDF !== 0 && count < Niter){
        x.x = (x.x - ((fx * fxDF) / (math.pow(fxDF, 2) - fx * fxDS)))
        fx = math.evaluate(Fun, x);
        fxDF = math.evaluate(DerF, x);
        fxDS = math.evaluate(DerS, x);
        E = err === 1? math.abs(x.x - s): math.abs(math.abs(x.x - s) /x.x);
        s = x.x;
        count += 1;
        results.push(
            {
                "Niter":count,
                "xi": s,
                "xiEval": fx,
                "xiDF": fxDF,
                "xiDS": fxDS,
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

export default nmrSearch;