export interface User {
  id: string
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
  }
  geo: {
    lat: string
    lng: string
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}
  
  export interface UserAlbum extends User {
    albumCount?: string
  }
  
  export interface Photo {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
  }
  
  export interface Album {
    userId: number
    id: number
    title: string
  }
  