import "./App.css";
import Categories from "./components/Categories";
import GenreListMovies from "./components/GenreListMovies";
import Header from "./components/Header";
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <Header />
      <Slider />
      <Categories />
      <GenreListMovies />
    </>
  );
}

export default App;
