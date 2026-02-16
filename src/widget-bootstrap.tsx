import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from '@emotion/styled';
import TodaysWordWidget from './exports/TodaysWord';

const PreviewContainer = styled.div`
  padding: 40px;
  display: flex;
  justify-content: center;
  background: #f5f5f5;
  min-height: 100vh;
`;

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <PreviewContainer>
        <TodaysWordWidget />
      </PreviewContainer>
    </React.StrictMode>
  );
}
