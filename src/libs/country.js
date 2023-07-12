async function getUserCountry() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        const response2 = await fetch(`https://ipapi.co/${data.ip}/country/`)
        const data2 = await response2.text();
        return data2
    } catch (error) {

        console.error('Error fetching IP:', error);
    }
}

export default getUserCountry