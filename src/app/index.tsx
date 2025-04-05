import { Route, Routes } from "react-router";
import { MainPage } from "../App";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
};

export default App;
