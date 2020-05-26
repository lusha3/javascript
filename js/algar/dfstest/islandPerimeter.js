/**
 *
 * @param {[][]} grid
 */
var islandPerimeter = function (grids) {
  //岛屿的每个节点进行处理
  for (var r = 0; r < grids.length; r++) {
    for (var c = 0; c < grids[0].length; c++) {
      if (grids[r][c] == 1) {
        return dfs(grids, r, c);
      }
    }
  }

  return 0;
};

function dfs(grid, i, j) {
  //边界条件,如果在边上，周长会加1
  if (!(0 <= i && i < grid.length && 0 <= j && j < grid[0].length)) {
    return 1;
  }
  //水边，周长+1
  if (grid[i][j] == 0) {
    return 1;
  }
  if (grid[i][j] != 1) {
    return 0;
  }

  grid[i][j] = 2;
  return (
    dfs(grid, i - 1, j) +
    dfs(grid, i, j - 1) +
    dfs(grid, i + 1, j) +
    dfs(grid, i, j + 1)
  );
}

var maxAreaOfIsland = function (grids) {
  var max = 0;
  for (var r = 0; r < grids.length; r++) {
    for (var c = 0; c < grids[0].length; c++) {
      if (grids[r][c] == 1) {
        max = Math.max(max, areaDfs(grids, r, c));
      }
    }
  }

  return max;
};

function areaDfs(grid, i, j) {
  if (!(0 <= i && i < grid.length && 0 <= j && j < grid[0].length)) {
    return 0;
  }
  //水边，周长+1
  if (grid[i][j] == 0) {
    return 0;
  }
  if (grid[i][j] != 1) {
    return 0;
  }

  grid[i][j] = 2;
  return (
    1 +
    areaDfs(grid, i - 1, j) +
    areaDfs(grid, i, j - 1) +
    areaDfs(grid, i + 1, j) +
    areaDfs(grid, i, j + 1)
  );
}

var numIslands = function (grids) {
  var count = 0;
  for (var r = 0; r < grids.length; r++) {
    for (var c = 0; c < grids[0].length; c++) {
      if (grids[r][c] == 1) {
        count++;
        numDfs(grids, r, c);
      }
    }
  }

  return count;
};

function numDfs(grid, i, j) {
  if (!(0 <= i && i < grid.length && 0 <= j && j < grid[0].length)) {
    return;
  }
  //水边，周长+1
  if (grid[i][j] == 0) {
    return;
  }
  if (grid[i][j] != 1) {
    return;
  }

  grid[i][j] = 2;

  numDfs(grid, i - 1, j);
  numDfs(grid, i, j - 1);
  numDfs(grid, i + 1, j);
  numDfs(grid, i, j + 1);
}

console.log("2");
var list = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];

console.log(numIslands(list));
