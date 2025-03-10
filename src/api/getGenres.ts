import { addRequestInfo, requestInit } from "./baseApi";

const GENRE_ENDPOINT = "/genre/movie/list";

interface IGenre {
  id: number;
  name: string;
}
export const getGenres: () => Promise<IGenre[]> = async () => {
  try {
    const response = await fetch(
      addRequestInfo(GENRE_ENDPOINT, "en-US"),
      requestInit
    );
    if (!response.ok) {
      throw new Error("I can`t get genres");
    }
    return response.json();
  } catch (err) {
    throw new Error(err instanceof Error ? err.message : "Unknown error");
  }
};
