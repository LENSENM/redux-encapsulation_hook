
import NumStore from "./index";

const defaultState = {
  // num: 20,
  ...NumStore.state,
};

// dispatch 的时候被触发执行
// action : {type:"xxx",val:"xxx"}
const reducer = (state = defaultState, action: any) => {
  const newState = JSON.parse(JSON.stringify(state));

  const names = NumStore.names;

  const actions = NumStore.actions;

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
