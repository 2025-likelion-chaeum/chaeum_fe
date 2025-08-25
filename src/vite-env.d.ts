/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_KAKAO_KEY: number;
  readonly VITE_SERVER_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
