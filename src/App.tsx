import { FC } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Button, Layout, ModalProvider, ThemeProvider, ToastProvider } from "@imspdr/ui";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";
import QuizPage from "./pages/QuizPage";
import UploadPage from "./pages/UploadPage";
import HeaderSearch from "@/components/HeaderSearch";
import { useAppLayout } from "./hooks/useAppLayout";

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
  const basename = process.env.NODE_ENV === "production" ? "/japword" : "/";

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
  const { user, handleLogout, handleHomeClick } = useAppLayout();

  return (
    <Layout
      title="일본어 연습"
      onHomeClick={handleHomeClick}
      middleContent={<HeaderSearch />}
      rightContent={
        user && (
          <Button variant="ghost" onClick={handleLogout}>
            로그아웃
          </Button>
        )
      }
    >
      <Routes>
        <Route path="/list" element={<ListPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/" element={<Navigate to="/list" replace />} />
      </Routes>
    </Layout>
  );
};

export default App;
