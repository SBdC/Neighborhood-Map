export const getFlickrPhoto = (imgName) =>
	fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=ea70cd6f2b3058e251b48212d2fe6d08&tags='${imgName}'&per_page=1&page=1&format=json&nojsoncallback=1`).then(res => { return res.json(); })
