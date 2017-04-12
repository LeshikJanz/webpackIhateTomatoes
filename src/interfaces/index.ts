export
declare interface Identifiable {
  id: any;
}

export
declare interface ICloud extends Identifiable {
  Name: string,
  CreateDate: Date,
  UpdateDate: Date,
  UserId: string
}

export
declare interface IKnowledge extends Identifiable {
  Name: string,
  Text: {},
  UserId: string,
  CreateDate: Date,
  UpdateDate: Date,
  cloudId: string
}
