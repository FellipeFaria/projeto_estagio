export const theme = {
  colors: {
    primary: "#6366f1",
    primaryDark: "#4f46e5",
    secondary: "#f8fafc",
    text: "#1e293b",
    textLight: "#64748b",
    white: "#ffffff",
    border: "#e2e8f0",
    success: "#10b981",
    successDark: "#059669",
    alert: "#f59e0b",
    alertDark: "#d97706",
    error: "#ef4444",
    errorDark: "#dc2626",
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "24px",
    xlarge: "32px",
  },
  shadows: {
    small: "0 1px 3px rgba(0,0,0,0.12)",
    medium: "0 4px 6px rgba(0,0,0,0.1)",
    large: "0 10px 15px rgba(0,0,0,0.1)",
    xlarge:
      "0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)",
  },
  breakpoints: {
    mobile: "480px",
    tablet: "768px",
    desktop: "1024px",
  },
  radii: {
    small: "8px",
    medium: "12px",
    large: "16px",
    circle: "50%",
  },
  transitions: {
    default: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  },
};

export const highContrastTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: "#000000",
    primaryDark: "#333333",
    secondary: "#ffffff",
    text: "#000000",
    textLight: "#333333",
    border: "#000000",
    success: "#000000",
    alert: "#000000",
    error: "#000000",
  },
};

export const deuteranopiaTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: "#3366cc",
    primaryDark: "#254e99",
    secondary: "#f4f4f4",
    success: "#1e90ff",
    alert: "#ffa500",
  },
};

export const tritanopiaTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: "#cc3366",
    primaryDark: "#99264d",
    success: "#ff6600",
    alert: "#ffcc00",
  },
};
