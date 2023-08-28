function createNotificationWithImage(title, body, image) {
    if (!("Notification" in window)) {
        console.log("This browser does not support desktop notifications");
        return;
    }

    if (Notification.permission === "granted") {
        // If permission is granted, create the notification with an image
        const options = {
            body: body,
        };

        if (image) {
            const img = document.createElement("img");
            img.src = image;
            img.style.width = "100px"; // Adjust the image width as needed
            options.image = image;
            options.icon = image; // Set the image as the notification icon
        }

        const notification = new Notification(title, options);
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                const options = {
                    body: body,
                };

                if (image) {
                    const img = document.createElement("img");
                    img.src = image;
                    img.style.width = "100px"; // Adjust the image width as needed
                    options.image = image;
                    options.icon = image; // Set the image as the notification icon
                }

                const notification = new Notification(title, options);
            }
        });
    }
}

export default createNotificationWithImage

// // Example usage:
// const notificationTitle = "New Message";
// const notificationBody = "You have a new message from John Doe.";
// const imageUrl = "https://example.com/path/to/image.png";

// createNotificationWithImage(notificationTitle, notificationBody, imageUrl);