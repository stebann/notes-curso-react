import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import TodoApp from "./components/TodoApp";
import "./index.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="notas" element={<TodoApp />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
