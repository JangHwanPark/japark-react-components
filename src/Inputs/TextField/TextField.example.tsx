import TextField from './TextField';
import { useState } from 'react';

const TextFieldExample = () => {
  const [email, setEmail] = useState('');
  const [isError, setIsError] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setIsError(!event.target.value.includes('@')); // 이메일 형식이 아니면 에러 표시
  };

  return (
    <div className="p-6 space-y-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold">TextField Examples</h2>

      {/* 기본 TextField */}
      <TextField label="Default Input" placeholder="Type here..." />

      {/* Outlined 스타일 */}
      <TextField label="Outlined Input" variant="outlined" placeholder="Enter your name" />

      {/* Filled 스타일 */}
      <TextField label="Filled Input" variant="filled" placeholder="Enter your age" />

      {/* Standard 스타일 */}
      <TextField label="Standard Input" variant="standard" placeholder="Enter your city" />

      {/* 에러 상태 테스트 */}
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={handleChange}
        error={isError}
        helperText={isError ? '올바른 이메일 주소를 입력하세요.' : '이메일을 입력하세요.'}
      />

      {/* Full Width 적용 */}
      <TextField fullWidth label="Full Width Input" placeholder="This takes full width" />

      {/* 비밀번호 필드 */}
      <TextField label="Password" type="password" placeholder="Enter your password" />

      {/* Read-only Input */}
      <TextField label="Read Only" value="This is read-only" readOnly />

      {/* Disabled 상태 */}
      <TextField label="Disabled Input" placeholder="Can't type here" disabled />
    </div>
  );
};

export default TextFieldExample;
