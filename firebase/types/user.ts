import { Timestamp } from "firebase/firestore";

export interface UserDoc {
  uid: string;
  email: string;
  full_name: string;
  created_at: Timestamp;
}
