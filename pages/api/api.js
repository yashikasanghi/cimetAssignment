export const fetchData = async () => {
  try {
    const response = await fetch("/api/plan-list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        session_id:
          "eyJpdiI6IkVNUkZ1N0hlSHhHSnJ3Vjl4aUlxc0E9PSIsInZhbHVlIjoieFlxa1wvVDYxQWl5U2pxMDFcL0R6ZVVvdEN6Mkk0R29TRDN3ZnN0U3VGcER0cEFMa2NVb0xNcDJudjlRTHRUbGJkIiwibWFjIjoiMTE0MmU0MGE5YmJhMzY4Nzc4MDExNmZkNTI1MjZhMGE3OTQyMDZmOTc1MTVmZDM1Mzc3ZmJmNjhmMzllOGYxYSJ9",
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Request failed");
    }

    return data;
  } catch (error) {
    console.log("Request failed:", error.message);
    throw error;
  }
};
