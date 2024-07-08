export function formatHour(rawTime) {
    // Parse the ISO 8601 string into a Date object
    const date = new Date(rawTime);

    // Extract hours and minutes
    let hours = date.getUTCHours();
    let minutes = date.getUTCMinutes();

    // Convert hours and minutes to 2-digit strings
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');

    // Combine into 24-hour time format
    return `${hours}:${minutes}`;
}