import Configurator from 'layout/Configurator';
import Home from 'layout/Home';
import { ControlProvider } from 'provider/ControlProvider';

function App() {
  return (
    <ControlProvider>
      <Configurator />
      <Home />
    </ControlProvider>
  );
}

export default App;
