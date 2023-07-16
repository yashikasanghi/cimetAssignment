import axios from "axios";

const base_url = "https://devcore02.cimet.io/v1";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { session_id } = req.body;

      const tokenResponse = await axios.post(
        `${base_url}/generate-token`,
        {},
        {
          headers: {
            "Api-key": "4NKQ3-815C2-8T5Q2-16318-55301",
          },
        }
      );

      const token = tokenResponse.data.data.token;

      const response = await axios.post(
        `${base_url}/plan-list`,
        { session_id },
        {
          headers: {
            "Api-key": "4NKQ3-815C2-8T5Q2-16318-55301",
            "auth-token": token,
          },
        }
      );

      res.status(200).json(response.data);
    } catch (error) {
      console.log("Request failed:", error.message);
      res.status(500).json({ error: "Request failed" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
