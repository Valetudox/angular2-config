import 'es6-shim';
import 'reflect-metadata';
import { ConfigService } from '../lib';
import { expect } from 'chai';

describe('Service', function() {

  let createService = function(initialConfig) {
    return new ConfigService(initialConfig);
  };

  describe('#get', function() {

    it('should gives back the property for the given key', function() {
      let service = createService({ key: 'value' });
      expect(service.get('key')).to.eql('value');
    });


    it('should gives back the property for the given nested key', function() {
      let service = createService({ nested: { key: 'value' } });
      expect(service.get('nested.key')).to.eql('value');
    });

  });

  describe('#setConfig', function() {

    it('should override the initial config', function() {
      let service = createService({ key: 'value' });
      service.setConfig({ key: 'value2', other: 'value3' });

      expect(service.get('key')).to.eql('value2');
      expect(service.get('other')).to.eql('value3');
    });

  });

});
