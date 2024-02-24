import { lazy, Suspense } from "react";

const LazyComponent = lazy(() => import('./components/LazyComponent'))


function App() {
  return (
    <Suspense fallback={<h1>Still Loading…</h1>}>
      <LazyComponent />
    </Suspense>
  );
}

export default App;
