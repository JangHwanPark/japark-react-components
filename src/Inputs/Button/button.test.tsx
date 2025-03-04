import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from './index';

describe('Button 컴포넌트 테스트', () => {
  // 스냅샷 : 컴포넌트의 출력(UI 구조)이 변경되었는지 확인
  /*it('버튼이 일치하는지 확인 (스냅샷)', () => {
    const { container } = render(<Button text='text'/>);
    
    // 스냅샷 테스트 : container의 둠 구조를 기록하여 비교
    // container.firstChild를 사용해 버튼의 실제 DOM 요소만 캡처
    expect(container.firstChild).toMatchSnapshot();
  })*/

  it('버튼이 주어진 텍스트를 렌더링해야 한다', () => {
    render(<Button text="Click me" />);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  it('className prop이 올바르게 적용되어야 한다', () => {
    render(<Button text="Test" className="my-class" />);
    const button = screen.getByRole('button', { name: /test/i });
    expect(button).toHaveClass('my-class');
  });

  it('onClick 이벤트가 발생해야 한다', () => {
    const onClick = vi.fn();
    render(<Button text="Click me" onClick={onClick} />);
    const button = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('disabled prop이 true일 때 버튼이 클릭되지 않아야 한다', () => {
    const onClick = vi.fn();
    render(<Button text="Disabled" onClick={onClick} disabled />);
    const button = screen.getByRole('button', { name: /disabled/i });
    expect(button).toBeDisabled();
    fireEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });
});
