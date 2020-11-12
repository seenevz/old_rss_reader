/*
// Defaul configs for sw using Google Workbox, might use it later

import { getFiles, setupPrecaching, setupRouting } from 'preact-cli/sw/';


setupRouting();
setupPrecaching(getFiles());

*/
self.addEventListener("install", () => {
    console.log("hello from SW!");
    console.error('SW!')
});
