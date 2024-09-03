import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { routesDeveloper } from "./routes/RoutesDeveloper";
import { StoreProvider } from "./store/StoreContext";


function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <Router>
            <Routes>
              {routesDeveloper.map(({ ...routesProps }, key) => {
                return <Route key={key} {...routesProps} />;
              })}
              <Route path="*" element={<h1>404</h1>} />
            </Routes>
          </Router>
        </StoreProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
