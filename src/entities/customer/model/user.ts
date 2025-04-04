export type User = {
  id: number
  domain: string
  first_name: string
  last_name: string
  deactivated: string

  about: string
  activities: string
  bdate: string
  books: string
  // city: City
  // education: Education
  // country: Country
  sex: number
  home_town: string

  // career: list[Career]
  can_post: number
  photo_max_orig: string
  is_closed: boolean
}

