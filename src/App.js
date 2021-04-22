import Header from './components/Header';
import { Quiz } from './components/Quiz';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className='App text-center my-5'>
      <Header />
      <Button variant='outline-primary'>Javascript</Button>
      <Quiz />
    </div>
  );
}

export default App;
