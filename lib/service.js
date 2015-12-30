import { Injectable, Inject } from 'angular2/core';
import nestedProperty from 'nested-property';

@Injectable()
export class ConfigService {

  constructor(@Inject('externalConfig') externalConfig) {
    this._config = externalConfig;
  }


  setConfig(value) {
    this._config = value;
  }


  get(value) {
    return nestedProperty.get(this._config, value);
  }

}
