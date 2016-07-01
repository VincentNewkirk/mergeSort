var bubbleSort = require('./../../bubble_sort/script.js');
function mergeSort(arr) {
  var items = [];
  var oLength = items.length;
  var conArray = [];
  seperator(arr);

   do {
    for (var i = 0; i < items.length; i+=2) {
      // if(arr[i + 1] === undefined){
      //   items = conArray;
      //   console.log(items[0]);
      //   return items[0];
      // }
      var concatted = items[i].concat(items[i+1]);
      var bubbled = bubbleSort(concatted);
      conArray.push(bubbled);
    }
    items = conArray;
    conArray = [];
  } while (items.length > 1);
  console.log(items[0]);
    return items[0];

  function seperator (arr) {
    var pR;
    var pL;
    var split = arr.length/2;

    if (arr.length <= 1){
      items.push(arr);
      return items;
    }

    pL = arr.filter(function(element, index){
      return index < split;
    });

    pR = arr.filter(function(element, index){
      return index >= split;
    });
  //  items.push(pL, pR);
    return seperator(pL), seperator(pR);
  }


  // for (var i = 0; i < items.length; i+=2) {
  //   var concatted = items[i].concat(items[i+1]);
  //   var bubbled = bubbleSort(concatted);
  //   console.log(bubbled);

  //   conArray.push(bubbled);
  // }
  // bubbleSort(items);
  return conArray;
}
module.exports = mergeSort;