module.exports = {
    plugins: {
        "postcss-pixel-to-viewport": {
            viewportWidth: 414,
            viewportUnit: "vmin",
            propertyBlacklist: [],
            minPixelValue: 1,
            enableConvertComment: "on",
            disableConvertComment: "off",
            mediaQuery: false
        }
    }
};
