import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom';
import HomePage from "./HomePage";
import ThanksPage from "./Components/ThanksPage/ThanksPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thankyoupage" element={<ThanksPage/>} />
      </Routes>
    </div>
  );
}

export default App;
