export interface Game {
  id: number;
  background_image: string;
  name: string;
  released: string;
  metacritic_url: string;
  website: string;
  description: string;
  metacritic: number;
  genres: Array<Genre>;
  parent_platforms: Array<ParentPlatform>;
  publishers: Array<Publisher>;
  ratings: Array<Rating>;
  screenshots: Array<ScreenShot>;
  trailers: Array<Trailer>;
}
export interface APIResponse<T> {
  results: Array<T>;
}

export interface Genre {
  name: string;
}
export interface ParentPlatform {
  platform: {
    name: string;
    slug: string;
  };
}
interface Publisher {
  name: string;
}
interface Rating {
  id: number;
  count: number;
  title: string;
}
interface ScreenShot {
  image: string;
}

interface Trailer {
  data: {
    max: string;
  };
}
