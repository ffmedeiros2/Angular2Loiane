import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  constructor() { }

  getCursos(): string[] {
    return ['Java', 'Ext JS', 'Angular'];
  }
}
