import React, { useState } from 'react';

export default function App() {
  const [rules, setRules] = useState('');
  const [preview, setPreview] = useState('');

  const handlePreview = () => {
    setPreview(rules);
  };

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Motor de Reglas de Seguros</h1>
      <textarea
        rows="10"
        cols="60"
        value={rules}
        onChange={(e) => setRules(e.target.value)}
        placeholder="Escribe tus reglas en lenguaje natural..."
      />
      <br />
      <button onClick={handlePreview} style={{ marginTop: '1rem' }}>
        Vista Previa
      </button>
      <h2>Vista Previa:</h2>
      <pre>{preview}</pre>
    </main>
  );
}
