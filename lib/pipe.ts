import { Pipe } from 'angular2/core';
import { ConfigService } from './';

@Pipe({ name: 'config' })
export class ConfigPipe {

  constructor(private _configService: ConfigService) { }

  transform(value: string) : string {
    return this._configService.get(value);
  }

}
