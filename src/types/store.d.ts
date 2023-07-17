// 类型声明里面不要直接使用引入  import store from "../store"
// 不然类型声明文件就要导出 使用的时候就要导入
// 而是使用 import("@/store")
// import store from "../store"

// 通过ts提供的ReturnType,用来获取函数类型的返回值

type RootState = ReturnType<typeof import("@/store").getState>;
