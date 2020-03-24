
# TestNg8Todo


## note:

System setup:
nodejs - 12.14.1
npm - 6.13.7

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.25.
```bash
npm install @angular/cli@8.3
```

If ng cli is installed locally, then ng command should be run from `node_modules/.bin/ng <cmd>`

Installing bootstrap 4:
```bash
npm install bootstrap@4.4.1 --save
```

if getting this error:
```
> node-gyp rebuild
...
No receipt for 'com.apple.pkg.CLTools_Executables' found at '/'.
gyp: No Xcode or CLT version detected!
gyp ERR! configure error
gyp ERR! stack Error: `gyp` failed with exit code: 1
```

This library contains a native addon for extra performance in node environments, what this means is that you should have a c compiler installed on your system. This is fairly common in the node ecosystem. (See details here: https://github.com/nodejs/node-gyp#on-macos)

In most cases the fix is running `xcode-select --install` on mac. 
When running on macOS Catalina 10.15.2, we may get this error:
```
xcode-select: error: command line tools are already installed, 
use "Software Update" to install updates
```

This can be fixed it by running the following:
```bash
sudo xcode-select --reset
```

## Development server

Run `node_modules/.bin/ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
