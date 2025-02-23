import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Button from './index';

// 스냅샷 : 컴포넌트의 출력(UI 구조)이 변경되었는지 확인
describe('Button 컴포넌트 테스트', () => {
  it('버튼이 일치하는지 확인 (스냅샷)', () => {
    const { container } = render(<Button text='text'/>);
    
    // 스냅샷 테스트 : container의 둠 구조를 기록하여 비교
    // container.firstChild를 사용해 버튼의 실제 DOM 요소만 캡처
    expect(container.firstChild).toMatchSnapshot();
  })
})
