import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/navbar';
import Caro from './components/car/car';
import Button from './components/buttons/buttons';
import List from './components/list/list';
import Foot from './components/footer/footer';


function App() {
  return (
    <>
      <Navbar />
      <Caro />
      <Button />
      <List />
      <Foot />
    </>
  );
}

export default App;
