import Toast from './Feedback/Toast/Toast';

function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#0f1214]">
      <div className="flex gap-4 p-4">
        <Toast message="default Type" />
        <Toast message="success" type="success" />
        <Toast message="error" type="error" />
        <Toast message="warning" type="warning" />
      </div>
    </div>
  );
}

export default App;