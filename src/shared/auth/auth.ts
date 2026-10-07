import { createAuthClient } from "better-auth/client";
import { jwtClient } from "better-auth/client/plugins";

import { API_URL } from "../const";

export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: API_URL,
  fetchOptions: {
    credentials: "include",
  },
  plugins: [jwtClient()],
});
