import './App.css';
import Header from './Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Banner/Banner';
import News from './News/News';
import Streamer from './Streamer/Streamer';
import PopularProduct from './PopularProduct/PopularProduct';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <News/>
      <Streamer/>
      <section id="split">
          <div className="stripe"></div>
      </section>
      <PopularProduct/>
    </div>
  );
}

export default App;
