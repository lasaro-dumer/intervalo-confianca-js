/*
* GET home page.
*/
//gl = [0.100, 0.050, 0.025, 0.010, 0.005]
var gl1 = [3.078, 6.314, 12.706, 31.821, 63.657];
var gl2 = [1.886, 2.920, 4.303, 6.965, 9.925];
var gl3 = [1.638, 2.353, 3.182, 4.541, 5.841];
var gl4 = [1.533, 2.132, 2.776, 3.747, 4.604];
var gl5 = [1.476, 2.015, 2.571, 3.365, 4.032];
var gl6 = [1.440, 1.943, 2.447, 3.143, 3.707];
var gl7 = [1.415, 1.895, 2.365, 2.998, 3.499];
var gl8 = [1.397, 1.860, 2.306, 2.896, 3.355];
var gl9 = [1.383, 1.833, 2.262, 2.821, 3.250];
var gl10 = [1.372, 1.812, 2.228, 2.764, 3.169];
var gl11 = [1.363, 1.796, 2.201, 2.718, 3.106];
var gl12 = [1.356, 1.782, 2.179, 2.681, 3.055];
var gl13 = [1.350, 1.771, 2.160, 2.650, 3.012];
var gl14 = [1.345, 1.761, 2.145, 2.624, 2.977];
var gl15 = [1.341, 1.753, 2.131, 2.602, 2.947];
var gl16 = [1.337, 1.746, 2.120, 2.583, 2.921];
var gl17 = [1.333, 1.740, 2.110, 2.567, 2.898];
var gl18 = [1.330, 1.734, 2.101, 2.552, 2.878];
var gl19 = [1.328, 1.729, 2.093, 2.539, 2.861];
var gl20 = [1.325, 1.725, 2.086, 2.528, 2.845];
var gl21 = [1.323, 1.721, 2.080, 2.518, 2.831];
var gl22 = [1.321, 1.717, 2.074, 2.508, 2.819];
var gl23 = [1.319, 1.714, 2.069, 2.500, 2.807];
var gl24 = [1.318, 1.711, 2.064, 2.492, 2.797];
var gl25 = [1.316, 1.708, 2.060, 2.485, 2.787];
var gl26 = [1.315, 1.706, 2.056, 2.479, 2.779];
var gl27 = [1.314, 1.703, 2.052, 2.473, 2.771];
var gl28 = [1.313, 1.701, 2.048, 2.467, 2.763];
var gl29 = [1.311, 1.699, 2.045, 2.462, 2.756];
var gl30 = [1.310, 1.697, 2.042, 2.457, 2.750];
var gl40 = [1.303, 1.684, 2.021, 2.423, 2.704];
var gl50 = [1.299, 1.676, 2.009, 2.403, 2.678];
var gl60 = [1.296, 1.671, 2.000, 2.390, 2.660];
var gl120 = [1.289, 1.658, 1.980, 2.358, 2.617];
var Infinito = [1.282, 1.645, 1.960, 2.326, 2.576];

exports.execute = function(req, res){
  var popN = req.query.popN;
  var tamAmostra = req.query.tamAmostra;
  var interCount = req.query.interCount;

  //var populacao[popN];
  


  if( !(popN) || !(tamAmostra) || !(interCount)){
    res.send('Parametros insuficientes');
  }else{
    res.send('teste');
  }
}