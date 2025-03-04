import React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import gsap from 'gsap';
import FadeInArticle from '../../components/FaildInArticle';

// 테스트용 컴포넌트
const TestComponent: React.FC<{
  direction: 'left' | 'right' | 'top' | 'bottom';
  delay: number;
}> = ({ direction, delay }) => {
  return (
    <FadeInArticle direction={direction} delay={delay}>
      Test Component
    </FadeInArticle>
  );
};

describe('useFadeIn hook', () => {
  let gsapSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    // gsap.from의 타입 문제를 해결하기 위해 any로 캐스팅합니다.
    gsapSpy = vi.spyOn(gsap as any, 'from').mockImplementation(() => {
      return { pause: () => {} } as any;
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('left” 방향에 대해 gsap.from이 올바른 파라미터로 호출되어야 함', () => {
    const delay = 0.5;
    const { container } = render(<TestComponent direction="left" delay={delay} />);
    const element = container.firstChild;
    expect(gsapSpy).toHaveBeenCalledWith(
      element,
      expect.objectContaining({
        duration: 1,
        x: -200,
        opacity: 0,
        delay,
      }),
    );
  });

  it('right” 방향에 대해 gsap.from이 올바른 파라미터로 호출되어야 함', () => {
    const delay = 0.5;
    const { container } = render(<TestComponent direction="right" delay={delay} />);
    const element = container.firstChild;
    expect(gsapSpy).toHaveBeenCalledWith(
      element,
      expect.objectContaining({
        duration: 1,
        x: 200,
        opacity: 0,
        delay,
      }),
    );
  });

  it('top” 방향에 대해 gsap.from이 올바른 파라미터로 호출되어야 함', () => {
    const delay = 0.5;
    const { container } = render(<TestComponent direction="top" delay={delay} />);
    const element = container.firstChild;
    expect(gsapSpy).toHaveBeenCalledWith(
      element,
      expect.objectContaining({
        duration: 1,
        y: -200,
        opacity: 0,
        delay,
      }),
    );
  });

  it('bottom” 방향에 대해 gsap.from이 올바른 파라미터로 호출되어야 함', () => {
    const delay = 0.5;
    const { container } = render(<TestComponent direction="bottom" delay={delay} />);
    const element = container.firstChild;
    expect(gsapSpy).toHaveBeenCalledWith(
      element,
      expect.objectContaining({
        duration: 1,
        y: 200,
        opacity: 0,
        delay,
      }),
    );
  });
});
