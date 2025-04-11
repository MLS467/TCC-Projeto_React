import NavBar from "./components/Nav/NavBar"
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;

