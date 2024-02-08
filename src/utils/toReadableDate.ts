export const toReadableDate = (date: string) => new Date(date).toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' });
