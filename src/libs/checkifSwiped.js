function activateSwiprListener(el, swipeLeft, swipeRight) {
    const swipeDiv = document.getElementById(el);
    let startX, startY, endX, endY;
    let swipeListenerAttached = false;

    function attachSwipeListener() {
        swipeDiv.addEventListener('touchstart', onTouchStart);
        swipeDiv.addEventListener('touchmove', onTouchMove);
        swipeDiv.addEventListener('touchend', onTouchEnd);
        swipeListenerAttached = true;
    }

    function onTouchStart(e) {
        const touch = e.touches[0];
        startX = touch.clientX;
        startY = touch.clientY;
    }

    function onTouchMove(e) {
        const touch = e.touches[0];
        endX = touch.clientX;
        endY = touch.clientY;
    }

    function onTouchEnd() {
        if (startX && startY && endX && endY) {
            const deltaX = endX - startX;
            const deltaY = endY - startY;

            if (Math.abs(deltaX) > Math.abs(deltaY)) {
                if (deltaX > 0) {
                    // Swiped right
                    swipeRight()
                        // alert('Swiped right');
                } else {
                    // Swiped left
                    swipeLeft()
                        // alert('Swiped left');
                }
            }

            // Reset the start and end coordinates
            startX = startY = endX = endY = null;
        }
    }

    if (!swipeListenerAttached) {
        attachSwipeListener();
    }
}

export default activateSwiprListener