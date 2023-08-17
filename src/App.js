import './App.css';
import {Navbar} from './components'
function App() {
  return (
    <div className="App">
   <div className='appnav'> <Navbar></Navbar></div>
      <div className='apptext'>
        <h2>Shelf</h2>
        <h1>Sense</h1>
        <p>To stock up your shelves !</p>
      </div>
    </div>
  );
}

export default App;
