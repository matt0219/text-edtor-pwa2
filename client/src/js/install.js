const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();

    // Show the custom install button
    butInstall.style.display = 'block';

    // Store the event for later use
    window.deferredPrompt = event;
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const deferredPrompt = window.deferredPrompt;

    if (deferredPrompt) {
        // Show the browser's installation prompt
        deferredPrompt.prompt();

        // Wait for the user to respond
        const choiceResult = await deferredPrompt.userChoice;

        if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the installation');
        } else {
            console.log('User declined the installation');
        }

        // Reset the deferredPrompt
        window.deferredPrompt = null;

        // Hide the custom install button
        butInstall.style.display = 'none';
    }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('The app has been installed.', event);
});
