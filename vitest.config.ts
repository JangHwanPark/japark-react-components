import { defineConfig } from "vitest/config";
export default defineConfig({
 test: {
  // React 테스트를 위한 브라우저 환경 설정
  environment: "jsdom",
  // Jest처럼 describe, it, expect를 전역으로 사용 가능
  globals: true,
  // setup 파일 등록
  setupFiles: "./src/setupTests.ts",
 },
});