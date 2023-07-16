const express = require("express");
const axios = require("axios");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(express.json());

  server.post("/api/generate-token", async (req, res) => {
    try {
      const response = await axios.post(
        "https://devcore02.cimet.io/v1/generate-token",
        {},
        {
          headers: {
            "Api-key": "4NKQ3-815C2-8T5Q2-16318-55301",
          },
        }
      );

      res.json({ token: response.data.data.token });
    } catch (error) {
      res.status(500).json({ error: "Token generation failed" });
    }
  });

  server.post("/api/plan-list", async (req, res) => {
    try {
      const { session_id } = req.body;

      const tokenResponse = await axios.post(
        "https://devcore02.cimet.io/v1/generate-token",
        {},
        {
          headers: {
            "Api-key": "4NKQ3-815C2-8T5Q2-16318-55301",
          },
        }
      );

      const token = tokenResponse.data.data.token;

      const response = await axios.post(
        "https://devcore02.cimet.io/v1/plan-list",
        { session_id },
        {
          headers: {
            "Api-key": "4NKQ3-815C2-8T5Q2-16318-55301",
            "auth-token": token,
          },
        }
      );
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: "Request failed" });
    }
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log("> Ready on http://localhost:3000");
  });
});
