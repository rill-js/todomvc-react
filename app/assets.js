/**
 * The below ensures that the proper (hashed) file names are used for
 * js and css assets.
 * 
 * It reuse the current script locations when rendering in the browser.
 * Server side we load the generated webpack asset locations.
 */
export default process.browser ? {
  main: {
    css: document.getElementById("css").getAttribute("href"),
    js: document.getElementById("js").getAttribute("src")
  }
} : __non_webpack_require__("./public/assets.json")