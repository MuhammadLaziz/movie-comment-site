import './App.css';
import Comment from './components/comment/Comment';
import Header from './components/header/Header.jsx'
import Movie from './components/movieList/Movie';

function App() {

  return (
    <div className="App">
      <Header />
      <hr />
      <div className="main">
        <Movie />
        <Comment />
      </div>
    </div>
  );
}

export default App;
