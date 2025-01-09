import "./App.css";
import AllTasks from "./pages/allTasks";
import Home from "./pages/home";
import ImportantTasks from "./pages/importantTasks";
import CompletedTasks from "./pages/completedTasks";
import InCompleteTasks from "./pages/incompleteTasks";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<AllTasks />} />
            <Route path="importantTasks" element={<ImportantTasks />} />
            <Route path="completedTasks" element={<CompletedTasks />} />
            <Route path="incompleteTasks" element={<InCompleteTasks />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
