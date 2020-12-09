import './App.css';
import Header from './Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Banner/Banner';
import News from './News/News';
import Streamer from './Streamer/Streamer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <News/>
      <Streamer/>
    </div>
  );
}

export default App;
