/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages 用ビルド（vite build --mode pages）はリポジトリ名のサブパスで配信する
export default defineConfig(({ mode }) => ({
  base: mode === 'pages' ? '/babyfood-zukan/' : '/',
  plugins: [react()],
  test: { environment: 'node' },
}))
