import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Channels from "./pages/channels";
import Home from "./components/home";
import Chat from "./components/chat";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/channels" element={<Channels />}>
          <Route path="about" element={<Home />} />
          <Route path="about/:id" element={<Chat />} />
        </Route>
        <Route path="*" element={<Navigate to="/channels/about" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
