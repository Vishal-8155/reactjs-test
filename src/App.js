import "./App.css";
import Q2 from "./component/Q2";
import Q3 from "./component/Q3";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import MainContent from "./component/MainContent";
import Footer from "./component/Footer";
import './App.css'; 

function App() {
  return (
    <div className="app-container">
      <h3>Q1</h3>
      <Header /> 
      <Navbar />
      <MainContent />
      <Footer />
      <h3>Q2</h3>
      <Q2 /> <hr />
      <h3>Q3</h3>
      <Q3 />
    </div>
  );
}

export default App;
