import Avatar from './DataDisplay/Avatar/Avatar';
import { FaUser } from 'react-icons/fa';

function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="flex gap-4 p-4">
        {/* 이미지 아바타 */}
        <Avatar
          size="small"
          radius="circle"
          types="img"
          imageUrl="https://randomuser.me/api/portraits/men/1.jpg"
        />

        {/* 텍스트 아바타 */}
        <Avatar
          size="small"
          radius="circle"
          types="text"
          text="JS"
          backgroundColor="bg-green-500"
          textColor="text-white"
        />

        {/* 아이콘 아바타 */}
        <Avatar
          size="small"
          radius="circle"
          types="icon"
          icon={<FaUser className="text-2xl text-white" />}
          backgroundColor="bg-red-500"
        />
      </div>
    </div>
  );
}

export default App;