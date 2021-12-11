/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';

declare const Buffer;

@Injectable({
  providedIn: 'root'
})
export class CryptService {


  encrypt(str: string): string {
    const buff = new Buffer.from(str);
    const base64 = buff.toString('base64');
    return base64;
  }

  decrypt(token: string) {
  const buff = new Buffer.from(token, 'base64');
    const base64 = buff.toString('ascii');
    return base64;
  }
}
