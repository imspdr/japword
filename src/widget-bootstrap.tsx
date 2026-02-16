import React from 'react';
import ReactDOM from 'react-dom/client';
import TodaysWordWidget from './exports/TodaysWord';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <div style={{ padding: '40px', display: 'flex', justifyContent: 'center', background: '#f5f5f5', minHeight: '100vh' }}>
        <TodaysWordWidget />
      </div>
    </React.StrictMode>
  );
}
