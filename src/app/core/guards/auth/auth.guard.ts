import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';

@Injectable()
export class AuthGuard implements CanLoad {
  canLoad(): boolean {
    return true;
  }
}
