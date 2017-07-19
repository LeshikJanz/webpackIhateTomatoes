export
declare interface Identifiable {
  id: any;
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
  text: string
}

export
declare interface IKnowledge extends Identifiable {
  name: string,
  text: {},
  createDate: Date,
  updateDate: Date,
  cloudId: string
}
