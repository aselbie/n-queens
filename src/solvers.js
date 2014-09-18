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
  // Base case
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
  var solutionCount = undefined; //fixme

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
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
