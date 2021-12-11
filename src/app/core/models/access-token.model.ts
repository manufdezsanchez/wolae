import { Payload } from "./payload.model";

export class AccessToken {
  expires_in: number;
  access_token: string;
  payload: Payload;
  status: number;
}
