document.addEventListener("DOMContentLoaded", function() {
    function loadScript(src) {
        let script = document.createElement("script");
        script.setAttribute("src", src);
        script.setAttribute("type", "module");
        script.setAttribute("crossorigin", "anonymous");
        document.body.appendChild(script);

        script.addEventListener("load", () => {
            console.log("Script loaded successfully:", src, "🚀");
        });

        script.addEventListener("error", (err) => {
            console.error("Error loading script:", err);
        });
    }

    let src = window.location.host.includes("webflow.io")
        ? "http://127.0.0.1:5500/dist/index.js"
        : "https://cdn.jsdelivr.net/gh/jordiklavers/premiumcars-test/dist/index.js";

    loadScript(src);
}); 