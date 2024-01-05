import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { LoginUserProvider } from "./providers/LoginUserProvider";

function App() {

  return (
    <BrowserRouter>
      <LoginUserProvider>
        <Router/>
      </LoginUserProvider>
    </BrowserRouter>
  );
}

export default App
