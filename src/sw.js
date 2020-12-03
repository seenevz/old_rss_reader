/*
// Defaul configs for sw using Google Workbox, might use it later

import { getFiles, setupPrecaching, setupRouting } from 'preact-cli/sw/';


setupRouting();
setupPrecaching(getFiles());

*/
self.addEventListener("install", () => {
    console.log(self.scope);
});

self.addEventListener("activate", () => console.log("active"));

self.addEventListener("fetch", ev => {
    console.log(ev);
});
