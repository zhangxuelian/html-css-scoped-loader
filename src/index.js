const loaderUtils = require('loader-utils');

module.exports = (content, map, meta) => {
    console.log(content);
    return `${content}`;
}