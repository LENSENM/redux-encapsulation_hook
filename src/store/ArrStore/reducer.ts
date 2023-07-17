import ArrStore from "./index";

const defaultState = {
  // arr:[10,20,30],
  ...ArrStore.state,
};

// dispatch 的时候被触发执行
// action : {type:"xxx",val:"xxx"}
const reducer = (state = defaultState, action: any) => {
  const newState = JSON.parse(JSON.stringify(state));

  const names = ArrStore.names;

  const actions = ArrStore.actions;

  function isKey(key: string, objcte: object): key is keyof typeof objcte {
    return key in objcte;
  }

  for (const key in names) {
    if (action.type === key) {
      if (isKey(key, actions)) {
        (actions[key] as Function)(newState, action);
      }
    }
  }

  return newState;
};

export default reducer;
