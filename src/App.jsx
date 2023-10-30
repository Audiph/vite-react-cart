// components
import Navbar from './Navbar';
import CartContainer from './CartContainer';
import { useGlobalContext } from './utils/context';

function App() {
  const { loading } = useGlobalContext();

  if (loading) return <div className="loading" style={{ marginTop: '6rem' }} />;

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  );
}

export default App;
