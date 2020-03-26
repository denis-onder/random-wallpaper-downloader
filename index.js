const fs = require("fs"),
  request = require("request"),
  figlet = require("figlet");

// Load environmental variables
require("dotenv").config();

// Greet user with figlet
figlet("Random\nWallpaper\nDownloader", (_, res) =>
  console.log(`${res}\nPowered by the Unsplash API!\n`)
);

const URL = "https://source.unsplash.com/random/3840x2160/?wallpaper",
  NAME = `${Date.now()}.jpeg`,
  DIRECTORY = `${process.env.HOME}${process.env.IMG_DIR}/${NAME}`;

request(URL)
  .pipe(fs.createWriteStream(NAME))
  .on("close", () => {
    fs.rename(NAME, DIRECTORY, () =>
      console.log(`Acquired new wallpaper!\n${DIRECTORY}`)
    );
  });
