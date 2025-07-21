import React, { useState } from 'react';

export default function App() {
  const [rules, setRules] = useState('');
  const [preview, setPreview] = useState('');

  const handlePreview = () => {
    setPreview(rules);
  };

  const handleSend = async () => {
    try {
      const response = await fetch('https://primary-production-babea.up.railway.app/webhook/webhook-reglas-seguros', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          reglas: rules.split('\n').filter((line) => line.trim() !== ''),
        }),
      });

      if (response.ok) {
        alert('✅ Reglas enviadas correctamente a N8N');
      } else {
        alert('❌ Error al enviar las reglas');
      }
    } catch (error) {
      console.error('Error al enviar:', error);
      alert('❌ Error de conexión al enviar las reglas');
    }
  };

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Motor de Reglas de Seguros</h1>
      <textarea
        rows="10"
        cols="60"
        value={rules}
        onChange={(e) => setRules(e.target.value)}
        placeholder="Escribe tus reglas en lenguaje natural, una por línea..."
      />
      <br />
      <button onClick={handlePreview} style={{ marginTop: '1rem', marginRight: '1rem' }}>
        Vista Previa
      </button>
      <button onClick={handleSend} style={{ marginTop: '1rem' }}>
        Enviar a N8N
      </button>
      <h2>Vista Previa:</h2>
      <pre>{preview}</pre>
    </main>
  );
}

