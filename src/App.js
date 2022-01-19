import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { bootstrap } from 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" style={{ fontSize: '24px' }} />
      <div className="container my-3">
        <TextForm placeholder="Start typing, or copy and paste the docs here...." heading="Enter the text to analyze below" />
        <About placeholder="Info" bootstrap={bootstrap} />
      </div>
    </>
  );
}

export default App;