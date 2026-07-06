// Set API parameters
export const API_URL = "http://localhost:8099/v2";
export const CLIENT_ID = "7ff1d5e1-2ea2-4ccd-9ce9-dec34e62f53c";
export const CLIENT_SECRET = "BDxnandBn2NTZzJ0jMWZp1z6kjft6U";

// Set script parameters
export const PLUGIN_SCRIPT_URL =
  "https://reward-plugin.beeliked.local:3030/rewards-plugin.js";
export const DATA_APP_UUID = "44f15880-e2a7-44d5-ab8e-4fa3e4b10494";

// Embed configuration
// Change only "type" to switch between embed modes: 'popup' | 'slide' | 'standard'
export const EMBED_STYLE_CONFIG = {
  type: "slide",

  popup: {
    width: "1000px",
    height: "80vh",
    position: "bottom-right",
    gameMode: "fullscreen",
    triggerId: null,
  },
  slide: {
    width: "380px",
    height: "95vh",
    position: "top-left",
    gameMode: "fullscreen",
    triggerId: null,
  },
  standard: {
    height: "600px",
  },
};

// User info
// NOTE: These values should be dynamic based on the user's account.
// Currently, static values are used here only for testing purposes.
// In a real-world scenario, `UID` and `DATA_NAME` would be retrieved from the logged-in user's account information.
export const UID = "gabriel@beeliked.com";
export const DATA_NAME = "Gabriel";
