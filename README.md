# Custom apache directory listing style for [DATAGERRY](https://github.com/NETHINKS/DATAGERRY "DATAGERRY")
used for files.datagerry.com and docs.datagerry.com

## Install
- Copy the `theme` folder and the .htaccess file into the apache root directory
- Modify the header.html file and replace %TITLE% with the page name

## Build
- run `npm install` to install the package
- run `npm run build` to compile the scss files into css
	- this will bundle all imported scss files inside the style.**scss** into style.**css**

## Icons
We are using [Fontawesome](https://fontawesome.com/ "Fontawesome v5.12.1")