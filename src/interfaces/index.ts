export
declare interface Identifiable {
  id?: any;
}

export
declare interface ICloudGroup extends Identifiable {
  name: string,
  createDate: Date,
  title: string
}

export
declare interface ICloud extends Identifiable {
  name: string,
  createDate: Date,
  updateDate: Date,
  text: string,
  cloudGroupId: string,
  accountId: string
}

export
declare interface IKnowledge extends Identifiable {
  name: string,
  text: {},
  createDate: Date,
  updateDate: Date,
  cloudId: string
}

export
declare interface ISession extends Identifiable {
  lastOpenedCloudId: string,
  accountId: string
}

export
declare interface ILogin {
  username: string,
  password: string
}

export
declare interface IToken extends Identifiable {
  created: Date,
  ttl: number,
  userId: string
}

export
declare interface IUser extends Identifiable {
  avatar: string,
  address: string,
  realm: string,
  username: string,
  email: string,
  emailVerified: boolean,
  accountId: string
}
