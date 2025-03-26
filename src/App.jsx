import { BrowserRouter } from "react-router-dom";
import AppIndex from "./routes/AppIndex";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppIndex />
      </BrowserRouter>
    </>
  );
};

export default App;
