import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import { CodeInspectorPlugin } from 'code-inspector-plugin';
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [CodeInspectorPlugin({
        bundler: 'vite',
    }), react()],
    define: {
        'process.env': process.env,
    },
    server: {
        host: true,
    },
    base: './',
});
