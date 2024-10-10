import express, { Router } from "express";
import serverless from "serverless-http";
import axios from "axios";
import { API_URL, CLIENT_ID, CLIENT_SECRET, PLUGIN_SCRIPT_URL, DATA_APP_UUID, UID, DATA_NAME } from "./config";

const app = express();
const router = Router();

// Set views
app.set("view engine", "ejs");

router.get("/", async (req, res) => {
  try {
    // Executing the /authorize endpoint using client_id and client_secret
    // to obtain the access token
    const authorizeResponse = await axios.post(`${API_URL}/authorize`, {
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
    });

    const { access_token } = authorizeResponse.data;

    // Executing the /get-encrypted-uid endpoint using the access token
    // to retrieve dataUid and dataHmac
    const encryptedResponse = await axios.post(
      `${API_URL}/get-encrypted-uid`,
      {
        uid: UID,
      },
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    const { dataUid, dataHmac } = encryptedResponse.data;

    // Sends values ​​to the frontend
    res.render("index", {
      dataUid,
      dataHmac,
      dataName: DATA_NAME,
      pluginScriptUrl: PLUGIN_SCRIPT_URL,
      dataAppUuid: DATA_APP_UUID,
    });
  } catch (error) {
    res.status(500).send(JSON.stringify(error));
  }
});

// Add a route for local testing
app.use("/", router);

// Export the handler for Netlify
export const handler = serverless(app);
