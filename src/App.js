import logo from './logo.svg';
import './App.css';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Error404 from './components/Error/Error404';
import About from './components/About/About'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        {/* <Error404 /> */}
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
