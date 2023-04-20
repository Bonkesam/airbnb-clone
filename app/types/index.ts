import { User, Listing, Reservation } from "@prisma/client";

export type safeListing = Omit<
Listing,
"createdAt"> & {
    createdAt: string;
}

export type safeReservation = Omit<
  Reservation, 
  "createdAt" | "startDate" | "endDate" | "listing"
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
  listing: safeListing;
};

export type SafeUser = Omit<
User,
"createdAt" | "updatedAt" | "emailverified"

> & {
    createdAt: string;
    updatedAt: string;
    emailVerified: string | null;
};
