import Checkbox from './Checkbox';

const CheckboxExample = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#0f1214]">
      <div className="flex gap-4 p-4">
        <Checkbox size="lg" color="success" />
        <Checkbox checked size="lg" color="success" />
        <Checkbox disabled size="lg" color="success" />
        <Checkbox checked disabled size="lg" color="success" />
      </div>
    </div>
  );
};

export default CheckboxExample;