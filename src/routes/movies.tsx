import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/movies")({
  component: Movies,
});

function Movies() {
  return <div className="p-2">Hello from Movies!</div>;
}
