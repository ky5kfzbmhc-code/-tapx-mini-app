const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/config", (req, res) => {
  res.json({
    appName: "TAPX",
    maxEnergy: 1000,
    tapReward: 1,
    dailyReward: 500
  });
});

app.listen(PORT, () => {
  console.log(`TAPX çalışıyor: http://localhost:${PORT}`);
});
