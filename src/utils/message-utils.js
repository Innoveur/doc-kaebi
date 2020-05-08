export function getEscapedContent(content) {
    return content.replace(/((\_|\*|\~|\`|\|){2})/g, "\\$1");
}

export function getContentWithEscapedQuotes(content) {
    return content.replace(/> +/g, "");
}