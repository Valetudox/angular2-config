import 'es6-shim';
import 'reflect-metadata';
import { ConfigService } from '../lib';
import { expect } from 'chai';

describe('Service', function() {

  let service;

  beforeEach(function() {
    service = new ConfigService();
  });

  describe('#get', function() {

    it('should gives back the property for the given key', function() {
      service.setConfig({ key: 'value' });
      expect(service.get('key')).to.eql('value');
    });


    it('should gives back the property for the given nested key', function() {
      service.setConfig({ nested: { key: 'value' } });
      expect(service.get('nested.key')).to.eql('value');
    });

  });

});
