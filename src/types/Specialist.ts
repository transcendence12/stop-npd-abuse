export interface Specialist {
    id: string;
    firstName: string;
    lastName: string;
    specialisation: string[];
    phoneNumber: string | null;
    email: string;
    // votes: { id: string; userId: string; createdAt: Date; specialistId: string }[];
    votes: number;
    hasVoted: boolean;
    // specialistsCount: number;
}