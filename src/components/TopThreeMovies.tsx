import MovieCard from "./MovieCard"

export default function TopThreeMovies() {
    return (
        <>
        <h1 className="koteret">Top 3 Movies</h1>
        <div>
            <ul className="div special">
                <MovieCard className="movies"></MovieCard>
                <MovieCard className="movies"></MovieCard>
                <MovieCard className="movies"></MovieCard>
            </ul>
        </div>
        </>
    )
}