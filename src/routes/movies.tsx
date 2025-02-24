import { createFileRoute } from "@tanstack/react-router";
import { Trending } from "../components/trending/Trending";

export const Route = createFileRoute("/movies")({
  component: Movies,
});

function Movies() {
  return (
    <div className="p-2">
      <Trending />
    </div>
  );
}
