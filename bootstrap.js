const index = import("./index");

// webpack doesn't support sync Wasm loading yet
index.then(() => {
  console.log("Loaded...");
});
