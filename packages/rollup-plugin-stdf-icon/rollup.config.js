import terser from '@rollup/plugin-terser';

export default {
    input: 'src/index.js',
    output: [{ file: 'dist/index.js', format: 'es' }],
    external: ['fs-extra', 'svgo', 'svgstore'],
    plugins: [terser({ keep_fnames: true })],
};
