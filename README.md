# photo dot

A static photo gallery website generator that is built using the meta and exif data of your photos.

## Live Demo

https://photo.joelangford.com/

## Quickstart

1. Install gatsby cli globally `npm install -g gatsby-cli`
2. Install project depedncies `npm install`
3. Initialise with `npm run init`
4. Open gatbsy-config and change the `siteMetadata` content to your own details
5. Pop your photos (with as much exif data added as possible) into the `/photos` directory
6. Run `npm start` and go to `http://localhost:8000/`

## Deployment

1. Run `npm run build`
2. Drag via ftp software or copy via scp the `/public` folder to your server enviroment e.g. `scp -r public/* root@123.123.123.123:/var/www/photo.mysite.com`

## Advanced features

### Using a custom photos directory

If you have a folder on your computer already populated with your favourite photos and want to use this to populate your website instead, you can do this by opening the `package.json` and editing the `photosdir` value.

e.g.

`"config": { "photosdir": "./photos" }, `

to

`"config": { "photosdir": "/Users/myusername/Photos" }, `
