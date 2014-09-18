window.countNQueensSolutions = function(n) {
  if (n === 0) {
    return 1;
  }
  var blockedColumns = 0;
  var blockedMajor = 0;
  var blockedMinor = 0;
  var solutionCount = 0;

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;

  function goDeeper(i){
    for (var j = 0; j < n; j++) {
      if(Math.pow(2,j)|blockedColumns!==blockedColumns && blockedMajor|Math.pow(2,j+i)!== blockedMajor && blockedMinor|Math.pow(2,j-i) !== blockedMinor){
        if (i === n-1){
          solutionCount++;
        } else {
          blockedColumns = blockedColumns|Math.pow(2,j);
          blockedMajor = blockedColumns|Math.pow(2,j+i);
          blockedMinor = blockedColumns|Math.pow(2,j-i);
          goDeeper(i+1);
          blockedColumns = blockedColumns^Math.pow(2,j);
          blockedMajor = blockedColumns^Math.pow(2,j+i);
          blockedMinor = blockedColumns^Math.pow(2,j-i);
        }
      }
    };
  }

};
  for(var j=0; j<Math.floor(n/2); j++){
    blockedColumns.push(j);
    blockedMajor.push(j);
    blockedMinor.push(j);
    goDeeper(1);
    blockedColumns.pop();
    blockedMajor.pop();
    blockedMinor.pop();
  }
  solutionCount*=2;
  if(n%2===1){
    blockedColumns.push(j);
    blockedMajor.push(j);
    blockedMinor.push(j);
    goDeeper(1);ch
  }
