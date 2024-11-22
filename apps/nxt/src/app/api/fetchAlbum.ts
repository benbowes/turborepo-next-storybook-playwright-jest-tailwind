export type Image = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export async function fetchAlbum() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/albums/1/photos"
  );
  const json: Image[] = await response.json();

  return json;
}

export async function fetchPhoto(photoId: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${photoId}`
  );
  const json: Image = await response.json();

  return json;
}
