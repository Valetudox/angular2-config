import { Injectable } from 'angular2/core';
import nestedProperty from 'nested-property';

@Injectable()
export class ConfigService {

  setConfig(value) {
    this._config = value;
  }


  get(value) {
    return nestedProperty.get(this._config, value);
  }

}
