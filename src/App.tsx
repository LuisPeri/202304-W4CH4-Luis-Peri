import { Actions } from "./components/actions/actions";
import { Key } from "./components/key/key";
import { Keyboard } from "./components/keyboard/keyboard";

function App() {
  return (
    <>
      <Keyboard>
        <Key></Key>
      </Keyboard>
      <Actions></Actions>
    </>
  );
}

export default App;
