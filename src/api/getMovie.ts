import { addRequestInfo, requestInit } from "./baseApi";

const MOVIE_ENDPOINT = "/search/movie";

export const getMovie: (query: string) => Promise<unknown[]> = async (
  query
) => {
  try {
    const response = await fetch(
      addRequestInfo(MOVIE_ENDPOINT, "en-US", query),
      requestInit
    );
    if (!response.ok) {
      throw new Error("I can`t get movie");
    }
    return response.json();
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : "Unknown error");
  }
};
