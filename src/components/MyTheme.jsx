const defaultThemeInvariants = {
    typography: {
        h6: {
            fontWeight: 400,
        },
    },
    sidebar: {
        width: 240,
        closedWidth: 50,
    },
    components: {
        MuiTextField: {
            defaultProps: {
                variant: "filled",
                margin: "dense",
                size: "small",
            },
        },
        MuiFormControl: {
            defaultProps: {
                variant: "filled",
                margin: "dense",
                size: "small",
            },
        },
    },
};

const defaultLightTheme = {
    palette: {
        background: {
            default: "#fff",
        },
        secondary: {
            light: "#6ec6ff",
            main: "#817abe",
            dark: "#0069c0",
            contrastText: "#fff",
        },
    },
    ...defaultThemeInvariants,
    components: {
        ...defaultThemeInvariants.components,
        MuiFilledInput: {
            styleOverrides: {
                root: {
                    backgroundColor: "#fff",
                    "&$disabled": {
                        backgroundColor: "#ddd",
                    },
                },
            },
        },
    },
};

export const defaultDarkTheme = {
    palette: {
        mode: "dark",
        primary: {
            main: "#90caf9",
        },
        background: {
            default: "#313131",
        },
    },
    ...defaultThemeInvariants,
};

export default defaultLightTheme;