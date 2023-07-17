import { useSelector, useDispatch } from "react-redux";
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { getList } from "../utils/api";

// useSelector 获取 store 数据
// useDispatch 更改 store 数据

export default function ViewIndex() {

  const dispatch: ThunkDispatch<any, any, AnyAction> = useDispatch();

  const { num, arr } = useSelector((state: RootState) => {
    return { num: state.numReducer.num, arr: state.ArrReducer.arr };
  });

  // 同步
  function changeNum() {
    dispatch({
      type: "add1",
      val: "Xxxxxx",
    });
  }

  //  异步  可以使用这种方法
  // const changeNum2 = () => {
  //   getList("http://public-api-v1.aspirantzhang.com/users", {}).then(
  //     (res) => {
  //       dispatch({ type: "add2", val:res.data });
  //     }
  //   );
  // };

  // 也可以封装成一个函数 然后dispath 派发

  function getRes() {
    return (dispatch: ThunkDispatch<any, any, AnyAction>) => {
      getList("http://public-api-v1.aspirantzhang.com/users", {}).then(res=>{
        dispatch({ type: "add2", val: res.data });
      }).catch(err=>{
         throw new Error(err)
      })
       
    };
  }
  
  function changeNum2() {
    dispatch(getRes());
  }


  function changeArr() {
    dispatch({
      type: "arrpush",
      val: 10,
    });
  }



  return (
    <>
      <div>num : {num}</div>
      <div>arr : {arr}</div>

      <div>
        <button onClick={changeNum}>+</button>
        <button onClick={() => changeNum2()}>changeNum2+</button>
        <button onClick={changeArr}> push</button>
      </div>
    </>
  );
}
