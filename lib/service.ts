import { Injectable, Inject } from 'angular2/core';
const nestedProperty = require('nested-property');

@Injectable()
export class ConfigService {

  private _config: any;


  constructor(@Inject('externalConfig') externalConfig) {
    this._config = externalConfig;
  }


  setConfig(value: any) {
    this._config = value;
  }


  get(value: string) : any {
    return nestedProperty.get(this._config, value);
  }

}
