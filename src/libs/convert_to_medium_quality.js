function convertCloudinaryURL(originalURL) {

    if (!originalURL) return ''
        // Check if the URL contains "/v" followed by a version number
    const regex = /\/v\d+\//;
    const match = originalURL.match(regex);

    if (match) {
        // Extract the version number
        const version = match[0];

        // Construct the new URL with the "q_auto" parameter
        const newURL = originalURL.replace(version, "/q_auto" + version);

        return newURL;
    } else {
        // If the URL doesn't contain a version number, return the original URL
        return originalURL;
    }
}


export default convertCloudinaryURL