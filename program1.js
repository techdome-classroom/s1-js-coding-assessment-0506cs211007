const dispatch2 = [
    ["L","L","W","W","W"],
    ["L","L","W","W","W"],
    ["W","W","L","W","W"],
    ["W","W","W","L","L"],
];

const getTotalIsles = function (dispatch2) {


  // write your code here
  
    if (!grid || grid.length === 0) return 0;

    let count = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    const dfs = (r, c) => {
        if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 'W') return;
        grid[r][c] = 'W'; // Mark as visited
        // Explore all four directions
        dfs(r + 1, c);
        dfs(r - 1, c);
        dfs(r, c + 1);
        dfs(r, c - 1);
    };

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 'L') {
                count++;
                dfs(i, j);
            }
        }
    }

    return count;
};

// // Example usage:
// const dispatch1 = [
//     ["L","L","L","L","W"],
//     ["L","L","W","L","W"],
//     ["L","L","W","W","W"],
//     ["W","W","W","W","W"],
// ];

// const dispatch2 = [
//     ["L","L","W","W","W"],
//     ["L","L","W","W","W"],
//     ["W","W","L","W","W"],
//     ["W","W","W","L","L"],
// ];

// console.log(numIslands(dispatch1)); // Output: 1
// console.log(numIslands(dispatch2)); // Output: 3




module.exports = getTotalIsles;