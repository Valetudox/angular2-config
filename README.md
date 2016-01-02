# Angular2 Config

[![Coverage Status](https://coveralls.io/repos/Valetudox/angular2-config/badge.svg?branch=master&service=github)](https://coveralls.io/github/Valetudox/angular2-config?branch=master)
[![Build Status](https://travis-ci.org/Valetudox/angular2-config.svg?branch=master)](https://travis-ci.org/Valetudox/angular2-config)

This is a simple config solution for angular2. You should provide the configuration.

Install
---------

```bash
npm install --save angular2-config
```
Setup
---------

provide `externalConfig` in your bootstrap

```javascript

provide('config', { useValue: { 
  key1: 'value',
  visibleDropdowns: false,
  nested: {
    key: 'value2'
  }
});
```

Usage in template
---------

```javascript

import { ConfigPipe } from 'angular2-config';

@Component({
  selector: '<sub-app>',
  pipes: [ConfigPipe],
  template: `
    <h1>{{ 'nested.key' | config }}</h1>
    <body>
      <dropdown *ngIf="'visibleDropdowns' | config"></dropdown>
      This is a text
    </body>
  `
})
export class App {}

```

Usage in Controller
---------

```javascript

import { ConfigService } from 'angular2-config';

@Component({
  selector: '<sub-app>',
  template: `Some content`
})
export class App {

  constructor(configService: ConfigService) {
    console.log(configService.get('nested.key'));
  }
```
