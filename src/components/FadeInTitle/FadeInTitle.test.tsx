import '@testing-library/jest-dom';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import FadeInTitle from './index';
import gsap from 'gsap';

describe('FadeInTitle 컴포넌트', () => {
  let gsapSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    gsapSpy = vi.spyOn(gsap as any, 'from').mockImplementation(() => {
      return {
        pause: () => {}
      } as gsap.core.Tween;
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('titleType이 "h1"일 경우 h1 태그로 렌더링된다', () => {
    render(<FadeInTitle titleType="h1" title="test" />);
    const heading = screen.getByText('test');
    expect(heading.tagName).toBe('H1');
  });

  it('titleType이 "h3"일 경우 h3 태그로 렌더링된다', () => {
    render(<FadeInTitle titleType="h3" title="test" />);
    const heading = screen.getByText('test');
    expect(heading.tagName).toBe('H3');
  });

  it('titleType이 "h6"일 경우 h6 태그로 렌더링된다', () => {
    render(<FadeInTitle titleType="h6" title="test" />);
    const heading = screen.getByText('test');
    expect(heading.tagName).toBe('H6');
  });

  it('titleType을 제공하지 않으면 기본값 h1으로 렌더링된다', () => {
    render(<FadeInTitle title="test" />);
    const heading = screen.getByText('test');
    expect(heading.tagName).toBe('H1');
  });

  it('추가 속성들이 올바르게 전달된다', () => {
    render(<FadeInTitle title="test" id="fade-title" data-testid="fade-title-test" />);
    const heading = screen.getByTestId('fade-title-test');
    expect(heading).toHaveAttribute('id', 'fade-title');
  });

  it('className이 적용된다', () => {
    render(<FadeInTitle title="test" className="my-class" />);
    const heading = screen.getByText('test');
    expect(heading).toHaveClass('my-class');
  });

  it('direction prop이 "left"일 경우 GSAP from 애니메이션이 -200의 x값으로 호출된다', () => {
    render(<FadeInTitle title="test" direction="left" delay={0.5} />);

    // gsap.from이 호출되었는지 확인합니다.
    expect(gsapSpy).toHaveBeenCalled();

    // gsap.from 호출 시 전달된 애니메이션 옵션을 확인합니다.
    const animationOptions = gsapSpy.mock.calls[0][2];
    expect(animationOptions).toEqual(
        expect.objectContaining({
          x: -200,
          opacity: 0,
          delay: 0.5
        })
    );
  });
});
