import './App.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import Main from './components/Main/Main';
import { MidSection } from './components/MidSection';

function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <MidSection />
        <Footer />
    </div>
  );
}

export default App;
