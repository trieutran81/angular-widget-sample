const fs = require('fs-extra');
const concat = require('concat');

(async function build() {
    const files = [
        './dist/widget-sample/runtime.js',
        './dist/widget-sample/polyfills.js',
        './dist/widget-sample/scripts.js',
        './dist/widget-sample/main.js'
    ];

    await fs.ensureDir('widget');
    await concat(files, 'widget/widget-sample.js');
    await fs.copyFile(
        './dist/widget-sample/styles.css',
        'widget/styles.css'
    );
})();