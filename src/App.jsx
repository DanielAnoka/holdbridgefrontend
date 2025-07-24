import { BrowserRouter } from "react-router-dom";
import Router from "./router";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Router />
    </BrowserRouter>
  );
}

export default App;
