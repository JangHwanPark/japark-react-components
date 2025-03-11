/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
 plugins: [react(), tailwindcss()],
 build: {
  lib: {
   entry: "src/index.ts", // 번들링할 엔트리 파일 (컴포넌트 또는 유틸 함수)
   name: "JaparkReactComponents",
   fileName: (format) => `japark-react-components.${format}.js`,
  },
  rollupOptions: {
   external: ["react", "react-dom"], // React를 외부 의존성으로 설정하여 번들 크기 최적화
   output: {
    globals: {
     react: "React",
     "react-dom": "ReactDOM",
    },
   },
  },
 },

 // test.globals 옵션은 테스트 파일의 전역 함수를 import 없이 사용할 수 있게 합니다.
 // test.environment 옵션은 테스트 환경을 지정합니다.
 // test.setupFiles는 테스트 전에 실행될 파일을 지정합니다.
 test: {
  globals: true,
  environment: "jsdom",
  setupFiles: ["setupTests.tsx"],
 },
});