const html = (title) => `<!DOCTYPE html>
<title>${title}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400&display=swap" rel="stylesheet">
<style>
    html, body {
        font-family: system-ui;
    }
    h1, h2 {
        font-weight: normal;
    }
    code {
        font-family: "Roboto Mono", monospace;
    }
    .react-syntax-highlighter-line-number {
        font-style: normal !important;
        color: hsl(0, 0%, 70%) !important;
        min-width: 2.2em !important;
        padding-right: 1.2em !important;
    }
    
</style>
<div id="react-root"></div>
<script src="./script.js" type="module"></script>
`;

export default html;
