
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let new_array = [];
  for (i in matrix) {
    if (i%2 === 0) {
      for (j in matrix[i]) {
        new_array.push(matrix[i][j])
      }
    } else {
      for (let a = matrix[i].length - 1; a >= 0; a--) {
        new_array.push(matrix[i][a])
      }
    }
  }
  return new_array;
}
