/*
// Defaul configs for sw using Google Workbox, might use it later

import { getFiles, setupPrecaching, setupRouting } from 'preact-cli/sw/';


setupRouting();
setupPrecaching(getFiles());

*/
console.log(self);

self.addEventListener("install", () => {
    self.skipWait();
    console.log(self.scope);
});

self.addEventListener("activate", () => console.log("active"));
