import { Timestamp } from "firebase/firestore";

export interface BusinessDoc {
  name: string;
  type: string;
  features: string[];
  ownerId: string;
  created_at: Timestamp;
}
