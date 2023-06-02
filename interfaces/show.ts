export interface Show {
    name: string;
    description: string;
    startDateTimeEpoch: number;
    endDateTimeEpoch: number;
    doorsTimeEpoch: number;
    status?: string;
    eventUrl?: string;
    ticketPrice?: number;
    isPriceNotKnownUntilDoors?: boolean;
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