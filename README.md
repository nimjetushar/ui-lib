# UI Library

[![Website](https://img.shields.io/website-up-down-green-red/https/shields.io.svg?label=my-website)](https://nimjetushar.github.io/ui-lib/)
![npm](https://img.shields.io/npm/v/@fourjs/ng-library)
<br/>
[![Build Status](https://semaphoreci.com/api/v1/nimjetushar/ui-lib/branches/master/shields_badge.svg)](https://semaphoreci.com/nimjetushar/ui-lib)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/2f3503831efb41fe9e5cde24acd60be7)](https://www.codacy.com/app/tushar/ui-lib?utm_source=github.com&utm_medium=referral&utm_content=nimjetushar/ui-lib&utm_campaign=Badge_Grade)
<br/>
[![StackShare](https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat)](https://stackshare.io/nimjetushar/ui-library)
[![GitHub license](https://img.shields.io/github/license/nimjetushar/ui-lib.svg)](https://github.com/nimjetushar/ui-lib/blob/master/LICENSE)
![GitHub pull requests](https://img.shields.io/github/issues-pr/nimjetushar/ui-lib.svg)

## Getting started:

Install library

`npm i @fourjs/ng-library --save`
Note: Install peer dependencies.
`npm install primeng@16.0.0 @angular/cdk@16.0.2 --save`

Import NgLibrary into @NgModule
<br>
Also import dependent modules

- BrowserAnimationsModule
- HttpClientModule
- FormsModule

```
import { NgLibrary } from '@fourjs/ng-library';

@NgModule({
  declarations: [DemoWrapperComponent],
  imports: [
    NgLibrary,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    // other modules imports
    ...
  ]
  ...
})

```

Add `"node_modules/@fourjs/ng-library/styles.css"` into of angular.json

```
{
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "project-name": {
      "projectType": "application",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {
            ...
            "styles": [
              "src/styles.scss",
              "node_modules/@fourjs/ng-library/styles.css"
            ],
            "scripts": []
          },
          "configurations": {
           ...
          }
        },
        ...
      }
    }},
  "defaultProject": "project-name"
}

```

For API Documentation refer [https://nimjetushar.github.io/ui-lib/](https://nimjetushar.github.io/ui-lib/)

## License

[![GitHub license](https://img.shields.io/github/license/nimjetushar/ui-lib.svg)](https://github.com/nimjetushar/ui-lib/blob/master/LICENSE)
