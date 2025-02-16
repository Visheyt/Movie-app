import { BASE_URL, requestInit } from "./baseApi";

interface IGenre {
  id: number;
  name: string;
}
export const getGenres: () => Promise<IGenre[]> = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/genre/movie/list?&language=en`,
      requestInit
    );
    if (!response.ok) {
      throw new Error("I can`t get genres");
    }
    return response.json();
  } catch (err) {
    throw new Error(err as string);
  }
};
