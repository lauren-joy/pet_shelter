import {Router} from '@reach/router';
import Main from './views/Main';
import Create from './views/Create';
import Edit from './views/Edit';
import Detail from './views/Detail'
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Main path = "/"/>
        <Create path = "/create"/>
        <Edit path = "/:id/update"/>
        <Detail path = "/:id/getone" />
      </Router>
    </div>
  );
}

export default App;
