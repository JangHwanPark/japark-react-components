import Button from './Button';

const ButtonExample = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#0f1214]">
      <div className="flex gap-4 p-4">
        <Button>Button</Button>
        <Button style="text">Button</Button>
        <Button style="outlined">Button</Button>
        <Button style="disabled">Button</Button>
      </div>
    </div>
  );
};

export default ButtonExample;