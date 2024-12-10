

export class Formatter {
    static FormatDate(date: Date): string {
        return Intl.DateTimeFormat(
            'en-US',
            {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
            }
        ).format(date);
    }
}