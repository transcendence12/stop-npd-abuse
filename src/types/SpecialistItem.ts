import { SocialMediaLink } from "./SocialMediaLink";
import { Book } from "./Book";
import { Vote } from "./Vote";

export interface SpecialistItem {
    id: string;
    firstName: string;
    lastName: string;
    website: string | null;
    email: string;
    phoneNumber: string | null;
    isWhatsApp: boolean | null;
    city: string | null;
    isOnline: boolean | null;
    isAcceptedNfz: boolean | null;
    isPaid: boolean | null;
    company: string | null;
    socialMediaLinks: SocialMediaLink[] | null;
    specialisation: string[] | null;
    books: Book[] | null;
    // favorites: string;
    // votes: Vote[];
}