function createStore(){
  let state;

  function dispatch(action){
    state = reducer(state, action);
    render();
  }

  function getState(){
    return state;
  }

  return {dispatch, getState};
}

function reducer(state = {count: 0}, action){
  switch (action.type){
    case "counter/increment":
      return {count: state.count + 1};
      case "counter/decrement":
        return {count: state.count - 1};
    default:
      return state;
  }
}

function render(){
  let container = document.getElementById("container");
  container.textContent = store.getState().count;
}

let store = createStore();
store.dispatch({type: "@@INIT"});
let button = document.getElementById("button");
let minus = document.getElementById("minus");

button.addEventListener("click", function(){
  store.dispatch({type: "counter/increment"});
});

minus.addEventListener("click", function(){
  store.dispatch({type: "counter/decrement"});
});