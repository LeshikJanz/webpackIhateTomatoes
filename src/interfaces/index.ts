/**
 * Identifiable interface
 */
export
declare interface Identifiable {
  id?: any;
}

/**
 * Cloud group interface
 */
export
declare interface ICloudGroup extends Identifiable {
  name?: string,
  accountId?: string,
  createDate?: Date,
  title?: string,
  cloudOrders: string[]
}

/**
 * Cloud interface
 */
export
declare interface ICloud extends Identifiable {
  name: string,
  createDate?: Date,
  updateDate?: Date,
  text: string,
  cloudGroupId: string,
  accountId: string
}

/**
 * Knowledge interface
 */
export
declare interface IKnowledge extends Identifiable {
  accountId: string,
  name: string,
  text: {},
  createDate: Date,
  updateDate: Date,
  cloudId: string,
  treeId: string,
  relations?: IRelation[]
}

/**
 * Session interface
 */
export
declare interface ISession extends Identifiable {
  lastOpenedCloudId: string,
  accountId: string
}

/**
 * Login interface
 */
export
declare interface ILogin {
  username: string,
  password: string
}

/**
 * Token interface
 */
export
declare interface IToken extends Identifiable {
  created: Date,
  ttl: number,
  userId: string
}

/**
 * User interface
 */
export
declare interface IUser extends Identifiable {
  avatar: string,
  address: string,
  realm: string,
  username: string,
  email: string,
  emailVerified: boolean,
  accountId: string,
  cloudGroupOrders: string[]
}

/**
 * Relation interface
 */
export
declare interface IRelation extends Identifiable {
  founderId: string,
  knowledgeId: string,
  cloudId: string
}

/**
 * Modal interface
 */
export
declare interface IModal {
  type: string,
  title: string,
  text: string,
  isOpen: boolean
}

/**
 * Modal interface
 */
export
declare interface IMenu {
  callback: string,
  placeholder?: string,
  arg: string,
  icon: string
}

/**
 * Async validation interface
 */
export
declare interface IValidation {
  field: string,
  value: string,
}

/**
 * Async validation interface
 */
export
declare interface IGridItem {
  height: number,
  width: number,
  x: number,
  y: number
}
