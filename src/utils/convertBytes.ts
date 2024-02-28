export function convertBytes(bytes: number) {
    const kilobytes = bytes / 1024
    const megabytes = kilobytes / 1024;
    const gigabytes = megabytes / 1024;

    if (gigabytes >= 1) {
        return gigabytes.toFixed(1) + ' GB';
    } else if (megabytes >= 1) {
        return megabytes.toFixed(1) + ' MB';
    } else if (kilobytes >= 1) {
        return kilobytes.toFixed(1) + 'KB'
    } else {
        return bytes.toFixed(0) + ' bytes';
    }
}