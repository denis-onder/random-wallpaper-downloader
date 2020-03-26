const fs = require("fs");
const request = require("request");

const URL = "https://source.unsplash.com/random/3840x2160/?wallpaper";

(() => request(URL).pipe(fs.createWriteStream(`${Date.now()}.jpeg`)))();
