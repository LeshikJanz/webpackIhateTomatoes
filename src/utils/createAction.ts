export function createAction(type:string, payloadMapper?:any) {
  const scopedName = this.scope ? `${this.scope}/` : '';
  const name = `big-head/${scopedName}${type}`;

  function actionCreator(...args:any[]) {
    return {
      type: name,
      payload: payloadMapper ? payloadMapper(...args) : args[0],
    };
  }

  actionCreator.toString = () => name;
  actionCreator.bind({ displayName: name });

  return actionCreator;
}

export const scopedCreator:any = (scopeName: string) => createAction.bind({ scope: scopeName });
