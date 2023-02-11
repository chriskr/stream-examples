const html = (title, rootPath) => `<!DOCTYPE html>
<title>${(title, rootPath)}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400&display=swap" rel="stylesheet">
<style>
    html, body {
        font-family: system-ui;
    }
    h1, h2, h3 {
        font-weight: normal;
    }
    .code-example {
        background-color: hsl(0, 0%, 93%);
        border: 1px solid hsl(0, 0%, 70%);
        border-radius: 5px;
        padding: 8px 20px;
        margin: 20px 0;
    }
    pre {
        border-radius: 5px;
    }
    code {
        font-family: "Roboto Mono", monospace;
    }
    .select-theme-container {
        text-align: right;
    }
    .react-syntax-highlighter-line-number {
        font-style: normal !important;
        color: hsl(0, 0%, 70%) !important;
        min-width: 2.2em !important;
        padding-right: 1.2em !important;
    }
    
</style>
<div id="react-root"></div>
<script>window.ROOT_PATH = "${rootPath}";</script>
<script src="./script.js" type="module"></script>
`;

export default html;
