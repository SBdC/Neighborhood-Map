# Neighborhood Maps Project - Independent Stores in Berlin Mitte

Project number 8 for Udacity's Nanodegree Front-End Web development.
The goal of this project was to make a single page application, using React, Google Maps API and 3rd party api, which in my case is Flickr.
My project shows a fine selection of independent stores in Berlin Mitte. The locations are shown in the map with markers and are also listed on the side.
The user may also search a location by typing in the search bar.
Clicking on a marker or on a list on the item will make a infowindow appear with some information and one photo about the store.


## How to install and run this project

1.Please `clone` or download this repository to your hard drive.

2.Install all project dependencies with `npm install`

3.Install the dependencies for FontAwesome
<hr />
`$ npm i --save @fortawesome/fontawesome-svg-core@prerelease`
<hr />
`$ npm i --save @fortawesome/free-solid-svg-icons@prerelease`
<hr />
`$ npm i --save @fortawesome/react-fontawesome@prerelease`

4.Start the development server with `npm start`

5.The application will run at http://localhost:3000

## Build

The service worker of this app  will not work in development stage, as is the case of this project.
To create a production build, you will have to execute the following command `npm run build`.
Only in production mode will the service worker cache data.


## Acknowledgements

* Google maps react Component
* All photos in this project are powered by Flickr
* Fonts used are from Google Fonts and icons are from Font Awesome

## License

MIT
