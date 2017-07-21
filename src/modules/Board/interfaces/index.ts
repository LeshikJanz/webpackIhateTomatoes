/**
 * Identifiable interface
 */
export
declare interface Identifiable {
  id: string;
}

/**
 * Cloud interface
 */
export
declare interface ICloud extends Identifiable {
  name: string;
  goal: string;
  createDate: string;
  updateDate: string;
  userId: string;
}