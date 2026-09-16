import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import ScrollToTop from './components/ScrollToTop';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('./pages/Home'));
const CV = lazy(() => import('./pages/CV'));

function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<div className="flex h-screen w-full items-center justify-center bg-background"><div className="h-8 w-8 animate-spin rounded-full border-4 border-sage border-t-transparent"></div></div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<CV />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </Router>
      <Toaster />
    </QueryClientProvider>
  )
}

export default App;