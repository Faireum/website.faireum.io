## :cd: Installation

* __yarn install__
* __gulp__ - run dev environment
* __gulp build__ - build, same as _gulp_ but without runing dev server
* __gulp deploy__ - deploy to ftp server
* __--prod__ - use flag to minify css / js / images and other differences from dev environment, ex. _gulp build --prod_

## :gear: Configs

[Config file](gulpfile.babel.js/config/index.js) - you can define tasks that you need by true / false, ftp credentials and paths to files

* If you deactivate some tasks be shure change them in dev / build / deploy tasks

* Do not forget specify files in watch task