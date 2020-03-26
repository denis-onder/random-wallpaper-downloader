# Random Wallpaper Downloader

### Powered by the Unsplash API!

--- 

### About:

```
https://source.unsplash.com/random/3840x2160/?wallpaper
```

This small Node.js application will, once ran, download a 4k wallpaper from Unsplash, and store it in the directory you point it to.

By default, it looks for the `/Profiles` directory in `$HOME`.

You can easily set a relative path from `$HOME` to your desired output directory by setting the `IMG_DIR` environmental variable to the path you'd like to use!

Example:

```env
IMG_DIR=/Pictures/Wallpapers
```

Output: `/home/user/Pictures/Wallpapers/1585248619866.jpeg`

You can set the environmental variable by creating a `.env` file in the project directory.
An example file has been provided.

`example.env`
```env
IMG_DIR=
```

---

### Usage:

1. Run `npm install`
2. Create a `.env` file according to the example file
3. Run `node .`