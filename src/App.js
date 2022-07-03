import Container from "@material-ui/core/Container";
import "./App.css";
import Navigation from "./context/Navigation";
function App() {
  return (
    <div className="App">
      <Container>
        <Navigation/>
      </Container>
    </div>
  );
}

export default App;
