import * as math from "mathjs";

const bisectionSearch = (Fun, Xi, Xs, Tol, Niter, err) => {
    let s = 0;
    let con = "";
    Niter = Niter > 500? 500: Niter;
    if (Niter <= 0 ) {
        return {
            conclusion: "Las iteraciones deben ser mayor a 0",
            table: null
        };
    } 
    if (math.evaluate(Fun, { x: Xi }).im) { 
        return {
            conclusion: "Xi no esta definido en el dominio de f(x) = " + Xi,
            table: null
        };
    } 
    if (math.evaluate(Fun, { x: Xs }).im) { 
        return {
            conclusion: "Xs no esta definido en el dominio de f(x) = " + Xs,
            table: null
        };
    }
    if (Xi >= Xs) {
        return {
            conclusion: '"Xs debe ser mayor que Xi" = Xi = ' + Xi + " Xs = " + Xs,
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
    let x = {x: Xi};
    if(Number.isNaN(x.x)){
        return {
            conclusion: "Valor no permitido" + x.x,
            table: null
        };
    }
    let fI = math.evaluate(Fun, x);
    x = {x: Xs};
    let fS = math.evaluate(Fun, x);
    if (fI === 0){
        s = Xi;
        con = s + " es raiz de f(x)";
    }else if(fS === 0){
        s = Xs;
        con = s + " es raiz de f(x)";
    }else{
        let Xm = (Xi + Xs)/2;
        x.x = Xm;
        if(Number.isNaN(x.x)){
            return {
                conclusion: "Valor no permitido" + x.x,
                table: null
            };
        }
        let fM = math.evaluate(Fun, x);
        if (fM.im) { 
            return {
                conclusion: "f(x) no esta definido en el dominio de la función = " + x.x,
                table: null
            };
        }
        let E = 100;
        results.push(
            {
                "Niter":count,
                "m": Xm,
                "mEval": fM,
                "Xi": Xi,
                "XiEval" : fI,
                "Xs": Xs,
                "XsEval": fS,
                "E": ""
            }
        );
        while (E > Tol && fM !== 0 && count < Niter){
            if (fI * fM < 0){
                Xs=Xm;
                x.x = Xs;
                fS = math.evaluate(Fun, x);
            }else{
                Xi = Xm;
                x.x = Xi;
                fS = math.evaluate(Fun, x);
            }
            if(Number.isNaN(x.x)){
                return {
                    conclusion: "Valor no permitido" + x.x,
                    table: results
                };
            }
            if (fS.im) { 
                return {
                    conclusion: "f(x) no esta definido en el dominio de la función = " + x.x,
                    table: results
                };
            }
            let Xa = Xm;
            Xm = (Xi + Xs)/2;
            x.x = Xm;
            fM = math.evaluate(Fun, x);
            if (fM.im) { 
                return {
                    conclusion: "f(x) no esta definido en el dominio de la función = " + x.x,
                    table: results
                };
            }
            E = err === 1? math.abs(Xm-Xa): math.abs(math.abs(Xm-Xa)/x.x);
            count += 1;
            results.push(
                {
                    "Niter":count,
                    "m": Xm,
                    "mEval": fM,
                    "Xi": Xi,
                    "XiEval" : fI,
                    "Xs": Xs,
                    "XsEval": fS,
                    "E": E
                }
            );
        }
        if (fM === 0){
			s = x.x;
			con = s + " es raiz de f(x)";
        }else if(E < Tol){
            s = x.x
            con = s + " es una aproximacion de un raiz de f(x) con una tolerancia " + Tol;
        }else{
            s=x.x;
            con = "Fracaso en " + Niter + " iteraciones";
        }
    }
    return {
        conclusion: con,
        table: results
    }};

export default bisectionSearch;