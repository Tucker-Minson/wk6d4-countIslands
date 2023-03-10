function getNeighbors(row, col, matrix) {
  let neighbors = [];
  // Check top
  if (row > 0 && matrix[row - 1][col] === 1) {
    neighbors.push([row -1, col]);
  }
  // Check top right
  if (row > 0 && col < matrix[0].length - 1 && matrix[row - 1][col + 1] === 1) {
    neighbors.push([row - 1, col + 1]);
  }
  // Check right
  if (col < matrix[0].length - 1 && matrix[row][col + 1] === 1) {
    neighbors.push([row ,col + 1]);
  }
  // Check bottom right
  if (row < matrix.length - 1 && col < matrix[0].length - 1 && matrix[row + 1][col + 1] === 1) {
    neighbors.push([row + 1, col + 1]);
  }
  // Check bottom
  if (row < matrix.length - 1 && matrix[row + 1][col] === 1) {
    neighbors.push([row + 1, col]);
  }
  // Check bottom left
  if (row < matrix.length - 1 && col > 0 && matrix[row + 1][col - 1] === 1) {
    neighbors.push([row + 1, col - 1]);
  }
  // Check left
  if (col > 0 && matrix[row][col - 1] === 1) {
    neighbors.push([row, col - 1]);
  }
  // Check top left
  if (row > 0 && col > 0 && matrix[row - 1][col - 1]) {
    neighbors.push([row - 1, col - 1])
  }
  // Return neighbors
  return neighbors;
}

function countIslands(matrix) {
  let visited = new Set();
  // Initialize count to 0
  let count = 0;
  // Iterate through all indices in matrix
  for (let row = 0; row < matrix.length; row ++) {
    for (let col = 0; col < matrix[row].length; col ++) {

      if (matrix[row][col] === 1 && !visited.has([row, col].toString())) {
        count ++;
        let currIdx = [row, col];
        let stack = [currIdx];
        visited.add(currIdx.toString())

        while (stack.length) {
          let currNode = stack.pop();
          let nbhrs = getNeighbors(currNode[0], currNode[1], matrix);

          nbhrs.forEach(nbhr => {
            if (!visited.has(nbhr.toString())) {
              stack.push(nbhr);
              visited.add(nbhr.toString());
            }
          })
        }
      }
    }
  }
  return count
    // If an index contains a 1 and has not been visited,
    // increment island count
      // DO THE THING (increment island count by 1)
      // Initialize a stack with current index
      // Add stringified version of current index to the visited set
      // While stack contains elements
        // Pop element from stack
        // Get valid neighbors of current element
        // Iterate over neigbors
          // If neighbor has not been visited
            // Add neighbor to stack
            // Mark neighbor as visited
  // Return island count

  // Your code here
}

// Uncomment the lines below for local testing
const matrix = [
                [1,1,1,0,0],
                [0,1,1,0,1],
                [0,1,1,0,1]
              ]

// [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
console.log(getNeighbors(1, 1, matrix));
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

// matrix3 = [
//   [0,0,1,0,0,1,1],
//   [1,1,0,0,1,0,1],
//   [0,0,0,1,0,0,1],
//   [1,0,1,0,0,1,1],
// ]

module.exports = [countIslands, getNeighbors];
