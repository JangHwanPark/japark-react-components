import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Button from './index';

// 스냅샷 : 컴포넌트의 출력(UI 구조)이 변경되었는지 확인
describe('Button 컴포넌트 테스트', () => {
  it('버튼이 일치하는지 확인 (스냅샷)', () => {
    // render(<Button text='text'/>);
    // expect(screen.getByText('text')).toMatchSnapshot();
    const { container } = render(<Button text="text" />);
    expect(container.firstChild).toMatchSnapshot();
  })
})