import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import TextField from './TextField';

describe('TextField 컴포넌트 테스트', () => {
  it('라벨을 정상적으로 표시해야 한다', () => {
    render(<TextField label="이름" />);
    const label = screen.getByText('이름');
    expect(label).toBeInTheDocument();
  });

  it('placeholder가 정상적으로 표시되어야 한다', () => {
    render(<TextField placeholder="여기에 입력하세요" />);
    const input = screen.getByPlaceholderText('여기에 입력하세요');
    expect(input).toBeInTheDocument();
  });

  it('입력하면 값이 정상적으로 변경되어야 한다', () => {
    render(<TextField />);
    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: '테스트 입력' } });
    expect(input).toHaveValue('테스트 입력');
  });

  it('에러 상태일 때 빨간색 테두리가 있어야 한다', () => {
    render(<TextField error />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('border-red-500');
  });

  it('helperText가 정상적으로 표시되어야 한다', () => {
    render(<TextField helperText="필수 입력 항목입니다" />);
    const helperText = screen.getByText('필수 입력 항목입니다');
    expect(helperText).toBeInTheDocument();
  });

  it('fullWidth가 적용되었을 때 전체 너비를 차지해야 한다', () => {
    render(<TextField fullWidth />);
    const wrapper = screen.getByRole('textbox').parentElement;
    expect(wrapper).toHaveClass('w-full');
  });

  it('비활성화된 상태에서 입력할 수 없어야 한다', () => {
    render(<TextField disabled />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });

  it('aria-invalid 속성이 에러 상태일 때 true여야 한다', () => {
    render(<TextField error />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });
});