import 'es6-shim';
import 'reflect-metadata';
import { ConfigService, ConfigPipe } from '../lib';
import { expect } from 'chai';

describe('Pipe', function() {

  it('should give back the value for the given key', function() {
    let service = new ConfigService();
    let pipe = new ConfigPipe(service);
    service.setConfig({ key: 'value' });

    expect(pipe.transform('key')).to.eql('value');
  });

});
