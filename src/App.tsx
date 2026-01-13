import { FC } from "react";

import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { ModalProvider, ThemeProvider, ToastProvider } from "@imspdr/ui";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header";
import ListPage from "./pages/ListPage";
import QuizPage from "./pages/QuizPage";
import UploadPage from "./pages/UploadPage";
import { LayoutContainer, MainContent } from "./styled";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 10, // 10 minutes
      retry: 3,
      refetchOnWindowFocus: false,
    },
  },
});

const App: FC = () => {
  const basename = process.env.NODE_ENV === "production" ? "/kospi200" : "/";

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <ToastProvider>
          <ModalProvider>
            <BrowserRouter basename={basename}>
              <AppLayout />
            </BrowserRouter>
          </ModalProvider>
        </ToastProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

const AppLayout: FC = () => {
  const navigate = useNavigate();

  return (
    <LayoutContainer>
      <Header onHomeClick={() => navigate("/list")} />
      <MainContent>
        <Routes>
          <Route path="/list" element={<ListPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/" element={<Navigate to="/list" replace />} />
        </Routes>
      </MainContent>
    </LayoutContainer>
  );
};

export default App;
