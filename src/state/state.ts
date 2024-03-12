export type PostType = {
  id: number
  text: string
}
export type PostsType = PostType[]
export type ProfilePageType = {
  posts: PostsType
}

export type ContactType = {
  id: number,
  name: string,
  sex: string
}
type ContactsType = ContactType[]
export type MessengerPageType = {
  contacts: ContactsType
}

export type StateType = {
  profilePage: ProfilePageType
  messengerPage: MessengerPageType
}

export let state: StateType = {
  profilePage: {
    posts: [
      {id: 1, text: 'I want to be a programmer.'},
      {id: 2, text: 'I like to listening music.'},
      {id: 3, text: 'Hello, I am Ruslan.'}
    ]
  },
  messengerPage: {
    contacts: [
      {id: 1, name: 'Ilya Ashikhmin', sex: 'male'},
      {id: 2, name: 'Kirill Shaidurov', sex: 'male'},
      {id: 3, name: 'Andrei Babushkin', sex: 'male'},
      {id: 4, name: 'Anastasia Antonova', sex: 'female'},
      {id: 5, name: 'Vladislav Bokarev', sex: 'male'},
      {id: 6, name: 'Anastasia Yermolayeva', sex: 'female'}
    ]
  }
}