import Header from "./components/Header";
import MoviesList from "./components/MoviesList";
import TopThreeMovies from "./components/TopThreeMovies";
import Footer from "./components/Footer";
// import { HeaderLinks } from "./types/HeaderTypes";
// import { latestMovies } from "./types/latestMovies";
// import { pageTitle } from "./types/pageTitle";

export default function App() {

  // let props: Array<string> = [
    // { url: 'https://bard.google.com', text: 'Bard' },
    // { url: 'https://copilot.microsoft.com', text: 'Copilot' },
    // { url: 'https://phind.com', text: 'Phind' },
    // { url: "https://pi.ai", text: "PI" }

  return (
    <>
      <Header />
      <MoviesList />
      <TopThreeMovies />
      <Footer />
    </>
  )
}