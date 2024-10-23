import React, { useState, useEffect } from 'react';

function Calculator() {
    const [input, setInput] = useState('');
    const [result, setResult] = useState(null);
    const [history, setHistory] = useState([]);

    const handleCalculate = () => {
        try {
            const evalResult = eval(input); // Caution: eval can be dangerous
            setResult(evalResult);
            saveToHistory(input, evalResult);
        } catch (error) {
            alert('Invalid calculation');
        }
    };

    const saveToHistory = async (operation, result) => {
        try {
            const response = await fetch('http://localhost:5000/api/history', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ operation, result }),
            });

            if (!response.ok) {
                throw new Error('Failed to save history');
            }

            fetchHistory(); // Fetch the updated history
        } catch (error) {
            console.error(error);
        }
    };

    const fetchHistory = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/history');
            if (!response.ok) {
                throw new Error('Failed to fetch history');
            }

            const data = await response.json();
            setHistory(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchHistory();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <h1 className="text-4xl font-bold mb-6">MERN Calculator</h1>
            <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Enter calculation" 
                className="border border-gray-300 rounded-lg p-2 mb-4 w-1/2 text-center"
            />
            <button 
                onClick={handleCalculate} 
                className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-200"
            >
                Calculate
            </button>
            {result !== null && <h2 className="text-2xl font-medium mt-4">Result: {result}</h2>}
            <h2 className="text-xl font-semibold mt-6">Calculation History</h2>
            <ul className="mt-4 w-1/2 bg-white border border-gray-300 rounded-lg shadow-lg">
                {history.map((entry) => (
                    <li key={entry._id} className="p-2 border-b last:border-b-0">
                        <span className="font-medium">{entry.operation}</span> = <span>{entry.result}</span> 
                        <span className="text-gray-500 text-sm"> (at {new Date(entry.timestamp).toLocaleString()})</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Calculator;
