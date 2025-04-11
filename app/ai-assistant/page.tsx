'use client';

import { useState } from 'react';

export default function AIAssistantPage() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setResponse(''); // Clear previous response

    try {
      const res = await fetch('http://localhost:5000/api/assistant', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      console.log('Response from backend:', data);

      if (data.reply || data.response) {
        setResponse(data.reply || data.response);
      } else if (data.error) {
        setResponse(`Error: ${data.error}`);
      } else {
        setResponse('No response from AI.');
      }

    } catch (err) {
      console.error('Fetch error:', err);
      setResponse('Something went wrong while contacting the server.');
    }

    setLoading(false);
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">AI Assistant</h1>
      <textarea
        className="w-full border p-2 rounded mb-2"
        rows={4}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask me anything..."
      />
      <button
        onClick={handleSend}
        className="bg-blue-600 text-white px-4 py-2 rounded"
        disabled={loading}
      >
        {loading ? 'Thinking...' : 'Send'}
      </button>

      {response && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <strong>AI says:</strong>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}
