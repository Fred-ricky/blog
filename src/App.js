import Navbar from './navbar';
import Home from './home';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
function App() {


  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <switch>
          <Route path="/">
            <Home />

          </Route>
        </switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
