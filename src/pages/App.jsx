import { Outlet } from 'react-router';
import Header from '../components/Header';

function App() {
  return (
    <>
      <Header />
      <main className="p-4 pt-20 flex justify-center h-full">
        <Outlet />
      </main>
    </>
  );
}

export default App;
