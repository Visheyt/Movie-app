export const BASE_URL = "https://api.themoviedb.org/3";
export const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZmI5YjU0YzczODRmNDA3YmJhZGRkMDFjMzdkYTE0MyIsIm5iZiI6MTczOTQzMDcxNi40MDYwMDAxLCJzdWIiOiI2N2FkOWIzYzhjNTU3OWJhNmUzNmUxZmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.94Bq7tl7V0PenCmoBnkwoVkSSLWN5gmrwjcU-GVeNYU";

export const requestInit = {
  headers: {
    Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
};
