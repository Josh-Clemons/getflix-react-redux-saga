import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import MovieList from '../MovieList/MovieList';
import Detail from '../Detail/Detail';
import TableTest from '../TableTest/TableTest';


function App() {


  return (
    <div className="App">
      <Header />
      <Router>        
        <Route path="/" exact>
          <MovieList />
          {/* <TableTest /> */}
        </Route>
        <Route exact path="/detail">
          <Detail />
        </Route>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
