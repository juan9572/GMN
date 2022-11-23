import * as math from "mathjs";

const rfSearch = (Fun, a, b, Tol, Niter, err) => {
    let s = 0;
    let con = "";
    Niter = Niter > 500? 500: Niter;
    if (Niter <= 0 ) {
        return {
            conclusion: "Las iteraciones deben ser mayor a 0",
            table: null
        };
    }
    if (a >= b) {
        return {
            conclusion: '"b debe ser mayor que a" = a = ' + a + " b = " + b,
            table: null
        };
    } 
    if (math.evaluate(Fun, { x: a }).im) { 
        return {
            conclusion: "a no esta definido en el dominio de f(x) = " + a,
            table: null
        };
    } 
    if (math.evaluate(Fun, { x: b }).im) { 
        return {
            conclusion: "b no esta definido en el dominio de f(x) = " + b,
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
    let x = {x: a};
    let E = Tol + 1;
    let fXa = math.evaluate(Fun, x);
    x = {x: b};
    let fXb = math.evaluate(Fun, x);
    if (fXa === 0){
        s = a;
        con = s + " es raiz de f(x)";
    }else if(fXb === 0){
        s = b;
        con = s + " es raiz de f(x)";
    }else{
        let Xr = b - fXb * ((b - a) / (fXb - fXa));
        x.x = Xr;
        let fR = math.evaluate(Fun, x);
        if (fR.im) { 
            return {
                conclusion: "f(x) no esta definido en el dominio de la función = " + x.x,
                table: null
            };
        }
        results.push(
            {
                "Niter":count,
                "a": a,
                "xm": Xr,
                "b": b,
                "xmEval" : fR,
                "E": ""
            }
        );
        while (E > Tol && fR !== 0 && count < Niter){
            if (fR < 0){
                a = Xr
                fXa = fR
            }else{
                b = Xr;
                fXb = fR;
            }
            s = Xr;
            Xr = b - fXb * ((b - a) / (fXb - fXa));
            x.x = Xr;
            fR = math.evaluate(Fun, x);
            if (fR.im) { 
                return {
                    conclusion: "f(x) no esta definido en el dominio de la función = " + x.x,
                    table: results
                };
            }
            E = err === 1? math.abs(s-Xr): math.abs(math.abs(s-Xr)/Xr);
            s = Xr;
            count += 1;
            results.push(
                {
                    "Niter":count,
                    "a": a,
                    "xm": Xr,
                    "b": b,
                    "xmEval" : fR,
                    "E": E
                }
            );
        }
        if (fR === 0){
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

export default rfSearch;