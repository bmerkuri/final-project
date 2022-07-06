import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page from "./pages/Page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/questions" element={<Page />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
