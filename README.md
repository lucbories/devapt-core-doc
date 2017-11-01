# Devapt core documentation builder

## Build

```
cd devapt-core-doc
npm install --production
npm run build_common
npm run build_server
npm run build_services
npm run build_browser
```


## Source files
 * docs
   * manual
     * features
     * tutorials



## Old build with jsdoc dependencies
```
{
    "del": ">=2.2.0",
    "gulp": "github:gulpjs/gulp#4.0",
    "gulp-load-plugins": ">=1.2.0",
    "parallelshell": "^2.0.0"
}
```