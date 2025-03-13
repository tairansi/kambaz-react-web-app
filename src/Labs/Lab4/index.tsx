import ArrayStateVariable from "./ArrayStateVariable";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import EventObject from "./EventObject";
import ObjectStateVariable from "./ObjectStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import ReduxExamples from "./ReduxExamples";
import StringStateVariables from "./StringStateVariables";
export default function Lab4() {
  function sayHello() {
    alert("Hello");
  }
  return (
    <div id="wd-passing-functions">
      <h2>Lab 4</h2>
      <ArrayStateVariable />
      <BooleanStateVariables />
      <ClickEvent />
      <Counter />
      <DateStateVariable />
      <EventObject />
      <ObjectStateVariable  />
      <ParentStateComponent />
      <PassingDataOnEvent />
      <PassingFunctions theFunction={sayHello} />
      <StringStateVariables />
      <ReduxExamples />
    </div>
);}
