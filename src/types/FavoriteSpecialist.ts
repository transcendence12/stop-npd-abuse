export interface FavoriteSpecialist {
  id: string;
  firstName: string;
  lastName: string;
  website: string | null;
  email: string;
  phoneNumber: string | null;
  isWhatsApp: boolean | null;
  city: string | null;
  isOnline: boolean | null;
  isAcceptedNfz: boolean  | null;
  isPaid: boolean | null;
  company: string | null;
  specialisationTypes: string[] | null;
}
