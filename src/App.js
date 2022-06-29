import Container from "@material-ui/core/Container";
import Sidebar_menu from './context/Sidebar_menu';
import "./App.css";
import Navigation from "./context/Navigation";
function App() {
  return (
    <div className="App">
      <Container>
        <Sidebar_menu/>
        <Navigation/>
      </Container>
    </div>
  );
}

export default App;
