export * from "./netAdapter";
export * from "./myXMLparser";

export function initialiseSW(): void {
    // Check that service workers are supported
    if ("serviceWorker" in navigator) {
        // Use the window load event to keep the page load performant
        window.addEventListener("load", () => {
            navigator.serviceWorker
                .register("/sw.js")
                .then(() => console.log("SW registered"))
                .catch(e => console.log("Failed to initialise SW: ", e));
        });
    }
}
