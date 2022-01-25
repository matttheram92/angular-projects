import { AccessLevel } from "../access-level";

export class Rsvp {
    id!: string;
    name!: string;
    attending!: boolean;
    dietaryRequirements!: string;
    dateSubmitted!: Date;
    accessLevel!: AccessLevel; 
}

export enum AttendingStatus {
    notAttending,
    attending
  }