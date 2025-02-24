const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/";

export const getImgUrl = (path: string, size = "w500") => {
  return path ? `${BASE_IMAGE_URL}${size}${path}` : "/placeholder.jpg";
};
