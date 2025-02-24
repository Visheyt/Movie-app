import { addRequestInfo, requestInit } from "./baseApi";

const POPULAR_MOVIE_ENDPOINT = "/discover/movie";

export interface TrendingMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
interface TrendingMoviesResponse {
  page: number;
  results: TrendingMovie[];
  totalPages: number;
  totalResults: number;
}
export const getPopularMovies: () => Promise<TrendingMovie[]> = async () => {
  try {
    const response = await fetch(
      addRequestInfo(POPULAR_MOVIE_ENDPOINT, "en-US"),
      requestInit
    );
    if (!response.ok) {
      throw new Error("I can`t get popular movies");
    }
    const data: TrendingMoviesResponse = await response.json();
    return data.results;
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : "Unknown error");
  }
};
