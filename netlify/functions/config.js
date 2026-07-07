// Set API parameters
export const API_URL = "https://api.beeliked.com/v2";
export const CLIENT_ID = "xxx...";
export const CLIENT_SECRET = "xxx...";

// Set script parameters
export const PLUGIN_SCRIPT_URL =
  "https://rewards.beeliked.app/rewards-plugin.js";
export const DATA_APP_UUID = "xxx...";

// User info
// NOTE: These values should be dynamic based on the user's account.
// Currently, static values are used here only for testing purposes.
// In a real-world scenario, `UID` and `DATA_NAME` would be retrieved from the logged-in user's account information.
export const UID = "develoer@beeliked.com";
export const DATA_NAME = "Developer"; // User name that will be displayed in the plugin

// Embed configuration
// Change only "type" to switch between embed modes: 'popup' | 'slide' | 'standard'
export const EMBED_STYLE_CONFIG = {
  type: "popup",
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
