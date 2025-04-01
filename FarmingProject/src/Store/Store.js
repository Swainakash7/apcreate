import { configureStore } from "@reduxjs/toolkit";
import RcCompletionSlice from "../Store/RcCompletionSlice";  
import RechartReducer from "./RechartSlice";
import WeightReducer from "./WeightSlice"
import ScatterReducer from "./ScatterSlice"
import TaskReducer from "./TaskSlicer"
import WeightChartReducer from "./WeightChartSlice";
import  WeightStackReducer  from "./WeightStack";
import  HamSliceReducer  from "./Hamburger";
import  AuthSliceReducer  from "./AuthSlice";

const store = configureStore({
  reducer: {
    RecentCompletion: RcCompletionSlice,
    Rechart : RechartReducer,
    WeightData : WeightReducer,
    ScatterData : ScatterReducer,
    TaskData : TaskReducer,
    WeightChartData : WeightChartReducer,
    WeightStackData : WeightStackReducer,
    HamData : HamSliceReducer,
    User : AuthSliceReducer
  }
});

export default store;
