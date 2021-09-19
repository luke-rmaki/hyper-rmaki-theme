// standard ANSI Colours
const black = "#000000";
const red = "#ff2600";
const green = "#3AD900";
const yellow = "#ffc600";
const blue = "#1478DB";
const magenta = "#ff2c70";
const cyan = "#00c5c7";
const white = "#c7c7c7";
const lightBlack = "#808080";
const lightRed = "#ff0000";
const lightGreen = "#33ff00";
const lightYellow = "#ffff00";
const lightBlue = "#1478DB";
const lightMagenta = "#cc00ff";
const lightCyan = "#00ffff";
const lightWhite = "#ffffff";

// theme colors
const rmakiAccent = "#87e8ce";
const rmakiWhite = "#dae7f6";
const rmakiBlack = "#111113";
const rmakiPurple = "#5f589d";

console.log("Running");

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor: rmakiBlack,
    cursorColor: rmakiAccent,
    cursorAccentColor: rmakiBlack,
    foregroundColor: rmakiWhite,
    borderColor: "rgba(95, 88, 157, 0.8)",
    selectionColor: "rgba(135, 232, 206, 0.5)",
    css: `
    ${config.css || ""}
    .header_appTitle {
      color: ${rmakiAccent};
    }
    .header_windowHeader {
      background: ${rmakiBlack};
    }
    .term_active {
      background: ${rmakiBlack};
    }
  `,
    colors: {
      black,
      red,
      green,
      yellow,
      blue,
      magenta,
      cyan,
      white,
      lightBlack,
      lightRed,
      lightGreen,
      lightYellow,
      lightBlue,
      lightMagenta,
      lightCyan,
      lightWhite,
    },
  });
};
