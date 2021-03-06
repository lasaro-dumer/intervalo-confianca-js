var myMath = require('./myMath');

exports.execute = function(req, res){
    //[0.100, 0.050, 0.025, 0.010, 0.005]
    var popN = req.query.popN;
    var tamAmostra = req.query.tamAmostra;
    var IC = req.query.IC;
    var interCount = req.query.interCount;
    var retornarAmostras = req.query.retornarAmostras == 'true';
    var retornarICs = req.query.retornarICs == 'true';
    var raw = req.query.raw == 'true';

    console.log({retornarICs:retornarICs,retornarAmostras:retornarAmostras,raw:raw})

    if( !(popN) || !(tamAmostra) || !(interCount) || !(IC)){
        res.send('Parametros insuficientes');
    }else{
        var t = myMath.getT(tamAmostra,IC);

        var populacao = [];
        var soma = 0;
        for (var i = 0; i < popN; i++) {
            populacao.push(myMath.randomIntInc(1,10000));
            soma += populacao[i];
        }

        var mi = soma / popN;

        var sqrtN = Math.sqrt(tamAmostra);

        var ICs = [];
        var amostras = [];
        var qtdContemMi = 0;
        for (var i = 0; i < interCount; i++) {
            var amostra = [];
            var naAmostra = [];
            var somaAmostra = 0;
            while(naAmostra.length < tamAmostra){
                var j = myMath.randomIntInc(0,popN-1);
                if(naAmostra.indexOf(j) == -1){
                    amostra.push(populacao[j]);
                    naAmostra.push(j);
                    somaAmostra += populacao[j];
                }
            }
            var X = somaAmostra / tamAmostra;

            var s = myMath.variancia(amostra,X).desvioPadrao;
            var desvio = t * (s/sqrtN);
            var intervalo = {inicio:X-desvio,fim:X+desvio};
            amostras.push(amostra);
            ICs.push(intervalo);
            if(intervalo.inicio<= mi && intervalo.fim>=mi){
                qtdContemMi++;
            }
        }

        var resultados = {popN:popN,tamAmostra:tamAmostra,IC:IC,interCount:interCount,t:t,mi:mi,qtdICs:ICs.length,amostras:undefined,ICs:undefined,
                         qtdContemMi:qtdContemMi,porcentagemComMi:((qtdContemMi*100)/interCount)};

        //console.log(resultados);

        if(retornarICs)
            resultados.ICs = ICs;
        if(retornarAmostras)
            resultados.amostras=amostras;

        if(raw)
            res.send(resultados);
        else
            res.render('resultados', resultados);
    }
}
