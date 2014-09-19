self.addEventListener('message', function(e) {
  var blockedColumns = 0;
  var blockedMajor = 0;
  var blockedMinor = 0;
  var solutionCount = 0;

  var n = e.data.n;
  var k = e.data.k;

  blockedColumns = blockedColumns|(1 << n-k-1);
  blockedMajor = blockedMajor|(1 << n-k-1);
  blockedMinor = blockedMinor|(1 << n-k-1);
  goDeeper(1);

  self.postMessage(solutionCount);

  function goDeeper(i){
    for (var j = n-1; j >=0; j--) {
      if(
        (blockedColumns|(1 << j)) !== blockedColumns
        && (blockedMajor|(1 << j+i)) !== blockedMajor
        && (blockedMinor|(1 << j-i)) !== blockedMinor
      ){
        if (i === n-1){
          solutionCount++;
        } else {
          blockedColumns = blockedColumns|(1 << j);
          blockedMajor = blockedMajor|(1 << j+i);
          blockedMinor = blockedMinor|(1 << j-i);
          goDeeper(i+1);
          blockedColumns = blockedColumns^(1 << j);
          blockedMajor = blockedMajor^(1 << j+i);
          blockedMinor = blockedMinor^(1 << j-i);
        }
      }
    };
  }

});
