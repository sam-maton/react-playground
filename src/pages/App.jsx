import { Outlet } from 'react-router';

function App() {
  return (
    <>
      <header className="bg-blue-500 text-white p-4">
        <h1 className="text-2xl font-bold">Header</h1>
      </header>
      <main className="p-4 flex justify-center">
        <div className="w-full max-w-4xl">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default App;
