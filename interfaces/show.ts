export interface Show {
    name: string;
    description: string;
    startDateTimeEpoch: number;
    endDateTimeEpoch: number;
    eventUrl?: string;
    ticketPrice?: number;
    imageUrl?: string;
    location: {
        name: string;
        address?: string;
        address2?: string;
        city?: string;
        state?: string;
        zipCode: number;
        zipCode2?: number;
        country: string;
    }
}