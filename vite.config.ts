import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
export default defineConfig({
    build: {
        lib: {
            entry: 'src/main.ts',
            name: 'vite-ts-lib'
        },
    },
    plugins: [dts()],
})