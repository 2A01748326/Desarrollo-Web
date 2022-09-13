 const path = require("path");

// Proceso cuando se llame a la ruta 
exports.getAltaConsola = (req, res)=>{
    //res.send('<h1>Formulario de consola</h1>');
    res.sendFile(path.join(__dirname, '..', 'views', 'formulario.html'));
}

exports.postAltaConsola = (req, res)=>{
    console.log(req.body); //los post van en el body
    res.json({estado:"Existoso"});
}

exports.getPaliFlang = (req, res)=>{
    res.sendFile(path.join(__dirname, '..', 'views', 'act2.html'));
}

exports.postPaliFlang = (req, res) =>{
    console.log(req.body);
    console.log(req.body['palindrome']);
    res.json({
        pali: pali(req.body['palindrome']),
        efe: laF(req.body['lenguajeF'])});
}

exports.getConsultaConsola = (req, res)=>{
    res.send('<h1>Datos de las consolas</h1>');
}

function pali(input){
    const inp = input.replace(/\s/g,'');
    //console.log(inp);
    const l = inp.length;
    let i =0; 
    //i<l; i++
    while(i<l){
        if (inp[i] != inp[l-1-i]){
            return false;
        }
        i++;
    }
    return true;
}

function laF(input){
    const inp = input.split(" ");
    const len = inp.length;
    var res = '';
    for(let a = 0; a < len; a++){
        const l = inp[a].length;
        for(let i = 0; i< l; i++){
            if(inp[a][i] == 'f'){
                if(inp[a][i-1] == inp[a][i+1]){
                    //res.pop();
                    res = res.slice(0, -1);
                    continue;
                }
            }
            res+=(inp[a][i]);
        }
        res += " ";
    }
    return res;
}