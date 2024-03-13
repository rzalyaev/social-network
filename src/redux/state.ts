import {v1} from "uuid";

export type InfoType = {
  banner: string
  avatar: string
  name: string
  dob: string
  city: string
  link: string
}

export type PostType = {
  id: string
  text: string
}
export type PostsType = PostType[]
export type ProfilePageType = {
  info: InfoType
  posts: PostsType
}

export type ContactType = {
  id: string,
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
    info: {
      banner: 'https://engineering.grab.com/img/one-small-step-closer-to-containerising-service-binaries/cover.png',
      avatar: 'https://img.freepik.com/premium-vector/beard-man-avatar_96853-399.jpg',
      name: 'Ruslan Zalyaev',
      dob: '28 July 1995',
      city: 'Izhevsk',
      link: 'https://github.com/rzalyaev'
    },
    posts: [
      {id: v1(), text: 'I want to be a programmer.'},
      {id: v1(), text: 'I like to listening music.'},
      {id: v1(), text: 'Hello, I am Ruslan.'}
    ]
  },
  messengerPage: {
    contacts: [
      {id: v1(), name: 'Ilya Ashikhmin', sex: 'male'},
      {id: v1(), name: 'Kirill Shaidurov', sex: 'male'},
      {id: v1(), name: 'Andrei Babushkin', sex: 'male'},
      {id: v1(), name: 'Anastasia Antonova', sex: 'female'},
      {id: v1(), name: 'Vladislav Bokarev', sex: 'male'},
      {id: v1(), name: 'Anastasia Yermolayeva', sex: 'female'}
    ]
  }
}