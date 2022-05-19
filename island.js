function getNeighbors(row, col, graph) {
  let result = []
//   console.log(node)
    // Up
      // let row = node[0]
      // let col = node[1]
      if(row - 1 >= 0) {
        if(graph[row - 1][col] === 1) result.push([row - 1, col])
      }
    // Down
    if(row + 1 <= graph.length - 1) {
      if(graph[row + 1][col] === 1) result.push([row + 1, col])
    }
    // Left
    if(col - 1 >= 0) {
      if(graph[row][col - 1] === 1) result.push([row, col - 1])
    }
    // Right
    if(col + 1 <= graph[row].length - 1) {
      if(graph[row][col + 1] === 1) result.push([row, col + 1])
    }

    // Your code here
    return result
}


function islandSize(row, col, graph) {

  // Create a visited set to store visited nodes
  let visited = new Set();
  // Create a stack, put the starting node in the stack
  let stack = [];
  let node = [row, col]
  stack.push(node)
  // Put the stringified starting node in visited
  visited.add(node.toString())
  // Initialize size to 0
  let size = 0;
  // While the stack is not empty,
  while(stack.length){
    let currentNode = stack.pop()
    let currentValue = graph[currentNode[0]][currentNode[1]]

    let neighbors
    if(currentValue === 1){
      neighbors = getNeighbors(currentNode[0], currentNode[1], graph)
      size++

      console.log("My neighbors is " , neighbors)
    }

        for(let neighbor of neighbors){
            if (!visited.has(neighbor.toString())){

                stack.push(neighbor)
                visited.add(neighbor.toString())
            }
        }
  }
  return size
}

    // Pop the first node

    // DO THE THING (increment size by 1)

    // Then push all the UNVISITED neighbors on top of the stack
    // and mark them as visited
    // HINT: This is what your helper function `getNeighbors` is for
    // HINT: Remember, you're storing your visited nodes as strings!

  // return size

  // Your code here
/*
    let queue = [startNode]
    let visited = new Set();
    visited.add(startNode.toString())
    let resultArr = [];

    while(queue.length){
        let currentValue = queue.shift()
        let currentNode = matrix[currentValue[0]][currentValue[1]]
        resultArr.push(currentValue)
        //console.log(currentValue)

        if(currentNode === endValue) return resultArr;

        let neighbors = findNeighbors(currentValue, matrix)

        //let neighbors of neighbors
        for(let neighbor of neighbors){
            if (!visited.has(neighbor.toString())){
                queue.push(neighbor)
                visited.add(neighbor.toString())
            }
            //I need to go through the entire matrix and check if coordinates are inside "visited"
            //So I need to push the coordinates into "visited"
        }
    }
    return false;
*/
module.exports = [getNeighbors, islandSize];
