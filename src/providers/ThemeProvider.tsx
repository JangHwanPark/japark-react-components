import { Theme, ThemeContextType } from "../types/theme";
import { ReactNode, useEffect, useState, createContext, useContext, MouseEvent } from "react";

/**
 * `ThemeContext`는 애플리케이션의 다크/라이트 모드를 관리하는 컨텍스트입니다.
 */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * `useTheme` 훅은 현재 테마 상태를 가져오고 변경할 수 있도록 합니다.
 *
 * @throws {Error} `ThemeProvider` 내부에서 사용되지 않으면 오류를 발생시킵니다.
 *
 * @example
 * ```tsx
 * const { theme, setTheme } = useTheme();
 * console.log(theme); // "light" 또는 "dark"
 * setTheme("dark"); // 다크 모드로 변경
 * ```
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};

/**
 * `ThemeProvider`는 애플리케이션 전체에서 다크/라이트 모드 상태를 관리합니다.
 *
 * @param {React.ReactNode} children - 하위 컴포넌트
 *
 * @example
 * ```tsx
 * <ThemeProvider>
 *   <App />
 * </ThemeProvider>
 * ```
 */
export const ThemeProvider = ({
  children
} : {
  children: ReactNode;
}) => {
  const [theme, setTheme] = useState<Theme>('light');

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const selectedTheme = e.currentTarget.dataset.theme as Theme;
    setTheme(selectedTheme);
  }

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, handleClick }}>
      {children}
    </ThemeContext.Provider>
  )
}