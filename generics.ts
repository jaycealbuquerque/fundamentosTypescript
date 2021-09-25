// S => state
// T => type
// K => key
// V => value
// E => Element

// 1ª opção defini os tipos = tipo default
// function useState<S extends number | string = string | number>() {
function useState<S extends number | string>() {
  let state: S

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState
  }

  return { getState, setState };
}

const newState = useState<string | number>();

newState.setState(124)
console.log(newState.getState())

newState.setState('hey')
console.log(newState.getState())