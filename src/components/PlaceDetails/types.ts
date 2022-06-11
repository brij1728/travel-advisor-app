export interface IPlaceDetails {
  place: IDetails;
  selected: number;
  refProp: any;
}

export interface IDetails {
  name?: string;
  photo?: IPhoto;
  price_level?: string;
  ranking?: string;
  awards?: IAward[];
  cuisine?: ICuisine[];
  address: string;
  phone?: string;
  web_url: string;
  website?: string;
  latitude?: string;
  longitude?: string;
  rating?: string;
  num_reviews?: string;
}

export interface IPhoto {
  images: {
    large: {
      url: string;
    };
  };
}

export interface IAward {
  images: {
    small: string;
  };
  display_image: string;
  display_name: string;
}

export interface ICuisine {
  name: string;
}