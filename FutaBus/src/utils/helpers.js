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

export function formatDate(rawDate) {
    // Parse the ISO 8601 string into a Date object
    const date = new Date(rawDate);

    // Extract day, month, and year
    let day = date.getUTCDate() + 1;
    let month = date.getUTCMonth() + 1; // Month is zero-indexed
    let year = date.getUTCFullYear();

    // Convert day, month, and year to 2-digit strings
    day = day.toString().padStart(2, '0');
    month = month.toString().padStart(2, '0');

    // Combine into yy-MM-dd format
    return `${year}-${month}-${day}`;
}