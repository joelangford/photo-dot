import stringToUrl from './stringToUrl';

export default function processPhotoUrlString(photo, exif) {
  return exif.name ? stringToUrl(exif.name) : stringToUrl(photo.name);
}
