import { ProgressBar } from './DataDisplay/ProgressBar';
import Tooltip from './DataDisplay/Tooltip/Tooltip';

function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-700">
      <div className="flex gap-4 p-4">
        <div className="w-96">
          <ProgressBar progress={100} />
          <ProgressBar progress={50} />
        </div>
        <Tooltip text="Hello world!" />
        <Tooltip text="Hello world!" arrow />
      </div>
    </div>
  );
}

export default App;