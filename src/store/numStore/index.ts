interface ActionType {
  type: string;
  val: any;
}

const store = {
  state: {
    num: 10,
  },

  actions: {
    add1(newState: { num: number }, action: ActionType): any {
      newState.num++;
    },
    add2(newState: { num: number }, action: ActionType): any {
      newState.num += action.val;
      console.log(action, "action");
    },
  },

  names: {},
};

const names = {};

const actions = store.actions;

function isValKey(key: string, objcte: object): key is keyof typeof objcte {
  return key in objcte;
}

for (const key in actions) {
  if (isValKey(key, actions)) {
    names[key] = key;
  }
}

store.names = names; // {add1:'add1',add2:'add2'}

export default store;
