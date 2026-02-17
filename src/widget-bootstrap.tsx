import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from '@emotion/styled';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@imspdr/ui';
import TodaysWordWidget from './exports/TodaysWord';
import MiniWordWidget from './exports/MiniWordWidget';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
      retry: 3,
      refetchOnWindowFocus: false,
    },
  },
});

const PreviewContainer = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  background: #f5f5f5;
  min-height: 100vh;
`;

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <PreviewContainer>
            <div style={{ width: '300px' }}>
              <TodaysWordWidget />
            </div>
            <div style={{ width: '80px' }}>
              <MiniWordWidget />
            </div>
          </PreviewContainer>
        </ThemeProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
}
