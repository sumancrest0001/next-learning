export function isInvalidText(text: string): boolean {
    return !text || text.trim() === '';
}