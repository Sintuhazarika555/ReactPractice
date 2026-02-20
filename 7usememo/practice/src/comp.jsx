import React, { useState, useMemo } from 'react';

const comp = () => {
  const [text, setText] = useState("React is great. React is fast.");
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 1. The "Expensive" Function
  const countOccurrences = (str) => {
    console.log("Expensive calculation running...");
    // Simulating a heavy task (like a large loop or complex regex)
    for (let i = 0; i < 100000000; i++) {} 
    return str.split(" ").length;
  };

  // 2. Applying useMemo
  // This will ONLY run when 'text' changes.
  // Clicking the theme toggle will NOT trigger this log.
  const wordCount = useMemo(() => {
    return countOccurrences(text);
  }, [text]);

  // 3. UI Styling
  const themeStyle = {
    backgroundColor: isDarkMode ? '#2c3e50' : '#ecf0f1',
    color: isDarkMode ? 'white' : 'black',
    padding: '20px',
    height: '100vh'
  };

  return (
    <div style={themeStyle}>
      <h2>🚀 useMemo Word Analyzer</h2>
      
      <textarea 
        rows="4" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        style={{ width: '100%', marginBottom: '10px' }}
      />

      <p>Word Count: <strong>{wordCount}</strong></p>

      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>

      <p><small>Check the console to see when the calculation runs!</small></p>
      <p>here on changing theme the console does not run the expensive calculation because useMemo memoizes the result based on the dependencies (text in this case).</p>
    </div>
  );
};

export default comp;