import { FC } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@imspdr/ui';
import TodaysWord from './TodaysWord';

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

const TodaysWordWidget: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TodaysWord />
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default TodaysWordWidget;
