import { Injectable } from '@angular/core';
import {v4 as uuidv4} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class UuidService {
  uuid: string;
  constructor() {

  }

  getUuid(): string {
    return uuidv4();
  }
}
