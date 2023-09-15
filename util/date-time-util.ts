export class DateTimeUtil {
    static fromEpochToDateTime(epoch: number) {
        const date = new Date(epoch);
        date.setSeconds(0);
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    }

    static toEpoch(dateTime: string) {
        return Date.parse(dateTime);
    }

    static toMinutesAndSecondsFromMS(ms: number): string {
        const totalSeconds = ms / 1000;
        const totalMinutes = (totalSeconds / 60).toString().split('.')[0]
        const remainingSeconds = totalSeconds - (Number(totalMinutes) * 60);
        const formattedRemainingSeconds = remainingSeconds.toFixed(0).length === 1 ? `0${remainingSeconds.toFixed(0)}` : remainingSeconds.toFixed(0);
        return `${totalMinutes}:${formattedRemainingSeconds}`;
    }

    static getDaysFromToday = (dateTimeEpoch: number): number => {
        const secondsBetween = (dateTimeEpoch - Date.now()) / 1000;
        const hoursBetween = secondsBetween / 3600;
        return Number((hoursBetween / 24).toFixed(0));
    }
}