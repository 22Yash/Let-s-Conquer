
import React, { useState, useEffect } from 'react';
import './App.css';

const width = 6; // 6x6 grid
const colors = ['blue', 'green', 'red', 'yellow']; // block colors

// Generate random color
const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

function App() {
  const [grid, setGrid] = useState([]);
  const [currentBlock, setCurrentBlock] = useState(null);
  const [targetBlock, setTargetBlock] = useState(null);

  // Initialize grid with random colors
  const createBoard = () => {
    const randomGrid = Array.from({ length: width * width }, () => randomColor());
    setGrid(randomGrid);
  };

  // Check for matches of at least 3 in a row
  const checkForRowMatch = () => {
    for (let i = 0; i < width * width - 2; i++) {
      const row = [i, i + 1, i + 2];
      const decidedColor = grid[i];
      const notValid = [4, 5, 10, 11, 16, 17, 22, 23, 28, 29, 34, 35];

      if (notValid.includes(i)) continue; // Skip checking for overflow at the end of rows
      if (row.every(index => grid[index] === decidedColor && decidedColor)) {
        row.forEach(index => (grid[index] = null)); // Set matched blocks to null
        return true;
      }
    }
  };

  // Check for matches of at least 3 in a column
  const checkForColumnMatch = () => {
    for (let i = 0; i < width * (width - 2); i++) {
      const column = [i, i + width, i + width * 2];
      const decidedColor = grid[i];

      if (column.every(index => grid[index] === decidedColor && decidedColor)) {
        column.forEach(index => (grid[index] = null)); // Set matched blocks to null
        return true;
      }
    }
  };

  // Drop blocks down after a match
  const moveBlocksDown = () => {
    for (let i = 0; i < width * (width - 1); i++) {
      if (grid[i + width] === null) {
        grid[i + width] = grid[i];
        grid[i] = null;
      }
    }
  };

  // Fill empty spots with new random colors
  const refillGrid = () => {
    grid.forEach((color, i) => {
      if (color === null) {
        grid[i] = randomColor();
      }
    });
  };

  // Handle block swapping
  const dragStart = (e) => {
    setCurrentBlock(e.target);
  };

  const dragDrop = (e) => {
    setTargetBlock(e.target);
  };

  const dragEnd = () => {
    const currentBlockId = parseInt(currentBlock.getAttribute('data-id'));
    const targetBlockId = parseInt(targetBlock.getAttribute('data-id'));

    const validMoves = [
      currentBlockId - 1,
      currentBlockId + 1,
      currentBlockId - width,
      currentBlockId + width
    ];

    if (validMoves.includes(targetBlockId)) {
      grid[targetBlockId] = currentBlock.style.backgroundColor;
      grid[currentBlockId] = targetBlock.style.backgroundColor;

      setGrid([...grid]);

      const validRowMatch = checkForRowMatch();
      const validColumnMatch = checkForColumnMatch();

      if (!validRowMatch && !validColumnMatch) {
        grid[currentBlockId] = currentBlock.style.backgroundColor;
        grid[targetBlockId] = targetBlock.style.backgroundColor;
        setGrid([...grid]);
      }
    }
  };

  useEffect(() => {
    createBoard();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      checkForRowMatch();
      checkForColumnMatch();
      moveBlocksDown();
      refillGrid();
      setGrid([...grid]);
    }, 100);

    return () => clearInterval(timer);
  }, [grid]);

  return (
    <div className="app">
      <div className="grid">
        {grid.map((color, index) => (
          <div
            key={index}
            style={{ backgroundColor: color }}
            className="block"
            data-id={index}
            draggable={true}
            onDragStart={dragStart}
            onDragOver={(e) => e.preventDefault()}
            onDrop={dragDrop}
            onDragEnd={dragEnd}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;
