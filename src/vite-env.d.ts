/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_KAKAO_KEY: number;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
