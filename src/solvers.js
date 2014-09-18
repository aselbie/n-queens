/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var board = new Board({'n': n});

  for (var i = 0; i < n; i++) {
    board.rows()[i][i] = 1;
  };

  var solution = board.rows(); //fixme

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = _.reduce(_.range(2,n+1),function(a,b){
    return a*b;
  },1);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {

  var board = new Board({'n': n});
  goDeeper(0);

  var solution = board.rows(); //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;

  function goDeeper(i){
    for (var j = 0; j < n; j++) {
      board.togglePiece(i, j);
      if (!board.hasAnyQueenConflictsOn(i,j)) {
        if (i === n-1) {
          break;
        } else {
          goDeeper(i+1);
        }
      }
      board.togglePiece(i, j);
    };
  }
  // make a board of size n
  // recursiveFunction(i)
    // For each square in row i
      // Place a queen at that square
      // If there are no conflicts
        // If this is the last row
          // return the board
        // If this is not the last row
          // recursiveFunction(i+1)
      // Remove the queen from that square
  // return the board;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  if (n === 0) {
    return 1;
  }
  var blockedColumns = [];
  var blockedMajor = [];
  var blockedMinor = [];
  var solutionCount = 0;
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
    goDeeper(1);
  }
  
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;

  function goDeeper(i){
    for (var j = 0; j < n; j++) {
      if(blockedColumns.indexOf(j)<0 && blockedMajor.indexOf(j-i)<0 && blockedMinor.indexOf(j+i)<0){
        if (i === n-1){
          solutionCount++;
        } else {
          blockedColumns.push(j);
          blockedMajor.push(j-i);
          blockedMinor.push(j+i);
          goDeeper(i+1);
          blockedColumns.pop();
          blockedMajor.pop();
          blockedMinor.pop();
        }
      }
    };
      // j is not in blockedColumns
      // if j-i is not in the blockedMajorDiagonals array
      // if j+i is not in the blockedMinorDiagonals array
        // board.togglePiece(i, j);
          // Push j to blockedColumns array;
          // Push j - i to blockedMajorDiagonals array
          // Push j + i to blockedMinorDiagonals array

          // if (i === n-1) {
            // solutionCount++;
          // } else {
            // goDeeper(i+1);
          // }

        // board.togglePiece(i, j);
        // pop from our blocked arrays
  }

};

window.timeIt = function(f){
  return function() {
    var start = Date.now();
    f.apply(this, arguments);
    console.log('function took ' + (Date.now()-start) + 'ms');
  }
}
