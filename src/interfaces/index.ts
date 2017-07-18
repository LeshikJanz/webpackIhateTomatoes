export
declare interface Identifiable {
  id: any;
}

export
declare interface ICloud extends Identifiable {
  name: string,
  createDate: Date,
  updateDate: Date,
  userId: string,
  text: string
}

export
declare interface IKnowledge extends Identifiable {
  name: string,
  text: {},
  userId: string,
  createDate: Date,
  updateDate: Date,
  cloudId: string
}
