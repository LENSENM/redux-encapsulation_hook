interface action {
  type: string;
  val: any;
}

const store = {
  state: {
    arr: [10, 20, 30],
  },

  actions: {
    arrpush(newState: { arr: number[] }, action: action) {
      return newState.arr.push(action.val);
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

store.names = names; // {arrpush:'arrpush'}

export default store;
