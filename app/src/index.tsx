import { serve } from "bun";
import index from "./index.html";

const server = serve({
  routes: {
    // Serve index.html
    "/": index,
  },
  development: process.env.NODE_ENV !== "production",
});

console.log(`🚀 Server running at ${server.url}`);
