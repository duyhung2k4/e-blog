import { MantineThemeOverride } from "@mantine/core";

const theme: MantineThemeOverride = {
  colorScheme: "light",
  colors: {
    success: [
      "#b8e5ba",
      "#a6dea9",
      "#95d898",
      "#83d187",
      "#71cb76",
      "#60c465",
      "#4ebe54",
      "#42b247",
      "#3ba040",
      "#358f39",
    ],
    green: [
      "#b8e5ba",
      "#a6dea9",
      "#95d898",
      "#83d187",
      "#71cb76",
      "#60c465",
      "#4ebe54",
      "#42b247",
      "#3ba040",
      "#20DF7F",
    ],
    error: [
      "#D32F2F",
      "#d43434",
      "#d53939",
      "#d63f3f",
      "#d74444",
      "#d94949",
      "#da4e4e",
      "#db5353",
      "#dc5959",
    ],
    info: [
      "#aae1fe",
      "#95d9fe",
      "#80d1fe",
      "#6bcafe",
      "#56c2fd",
      "#41bbfd",
      "#2bb3fd",
      "#16abfd",
      "#02a4fb",
      "#0296e6",
    ],
    "dark-blue": [
      "#DBE4FF",
      "#5875CD",
      "#3C5EC4",
      "#3351A9",
      "#2A438D",
      "#1F3166",
      "#223671",
      "#1B2B5A",
      "#18264F",
      "#142044",
    ],
    brand: [
      "#ffffff",
      "#cff6f0",
      "#9fede2",
      "#6fe4d4",
      "#3fdbc6",
      "#23bfaa",
      "#1a8f7f",
      "#115f55",
      "#082f2a",
      "#000000",
    ],
    secondary: [
      "#ffffff",
      "#f6f0cf",
      "#ede29f",
      "#e4d46f",
      "#dbc63f",
      "#bfaa23",
      "#8f7f1a",
      "#5f5511",
      "#2f2a08",
      "#000000",
    ],
    grown: [
      "#A47A28",
      "#A47A28",
      "#A47A28",
      "#A47A28",
      "#A47A28",
      "#A47A28",
      "#A47A28",
      "#A47A28",
      "#A47A28",
      "#A47A28",
    ],
    white: [
      "#FFFFFF",
      "#FFFFFF",
      "#FFFFFF",
      "#FFFFFF",
      "#FFFFFF",
      "#FFFFFF",
      "#FFFFFF",
      "#FFFFFF",
      "#FFFFFF",
      "#FFFFFF",
    ],
    black: [
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#000000",
      "#474747",
    ]
  },
  primaryColor: "dark-blue",
  primaryShade: 5, // default color level [0-9]
  focusRingStyles: {
    styles: (th) => ({
      outline: `2px solid ${th.colors["brand"][4]}`,
    }),
  },
  cursorType: "pointer",
  components: {
    Anchor: {
      defaultProps: (th) => ({
        c: th.colors.blue[7],
      }),
    },
    Badge: {
      styles: {
        root: {
          textTransform: "initial",
        },
      },
    },
    Button: {
      styles: {
        icon: {
          marginRight: "8px !important",
        },
        root: {
          borderRadius: 10,
          backgroundColor: "#20DF7F",
          ":hover": {
            backgroundColor: "#20DF7F",
          }
        }
      },
    },
    Checkbox: {
      styles: {
        root: {
          display: "flex",
          height: "100%",
        },
        body: {
          alignItems: "flex-start",
        },
        input: {
          cursor: "pointer",
        },
        label: {
          cursor: "pointer",
          userSelect: "none",
        },
      },
    },
    InputWrapper: {
      styles: {
        label: {
          marginBottom: "2px",
          display: "block",
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          textAlign: "left",
        },
        error: {
          marginTop: "5px",
        },
        root: {
          "& .mantine-Input-input": {
            borderRadius: 10,
          }
        }
      },
    },
    Modal: {
      defaultProps: () => ({
        centered: false,
      }),
      styles: () => ({
        title: {
          fontSize: 18,
        },
      }),
    },
    Switch: {
      styles: () => ({
        track: {
          cursor: "pointer",
        },
      }),
    },
    TextArea: {
      defaultProps: {
        minRows: 2,
      },
    },
    Tooltip: {
      defaultProps: {
        color: "gray.6",
        offset: 10,
        openDelay: 300,
        withinPortal: true,
      },
      styles: {
        tooltip: {
          padding: "4px 8px",
          backdropFilter: "blur(4px)",
          backgroundColor: "rgba(39,39,41,0.5)",
        },
      },
    },
    Title: {
      styles: {
        root: {
          color: "#FFF",
          fontFamily: "inherit"
        }
      }
    },
    Notification: {
      styles: {
        root: {
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        },
      },
    },
  },
  other: {
    AppBoxColor: "#B1D2FF",
    AppHeaderColor: "#97C5F3",
    AppFooterColor: "#97C5F3",
  },
};

export default theme;
