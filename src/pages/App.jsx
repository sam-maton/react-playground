import { Outlet } from 'react-router';

function App() {
  return (
    <main>
      <header>
        <h1>Header</h1>
      </header>
      <Outlet />
    </main>
  );
}

export default App;
