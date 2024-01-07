import {
  createStyles
} from "@mantine/core";

export const useStyle = createStyles(() => {

  return {
    root: {
      width: '100%',
      "& .mantine-Input-input": {
        border: 0,
        padding: '12px 16px',
      },
    },

    headerAction: {
      border: '1px solid #E4E5ED',
      borderBottom: 0,
      borderRadius: '8px 8px 0px 0px',
      height: 45,
    },

    // column table
    rootTable: {
      overflow: "scroll",
      tableLayout: "fixed",
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    index: {
      width: '100px !important',
      padding: '12px 16px !important',
      position: "sticky",
      left: "0px",
      backgroundColor: "white",
      zIndex: 2,
      border: "1px solid #D7D9E0 !important",
    },
    
    action: {
      width: '150px !important',
      position: "sticky",
      right: "0px",
      backgroundColor: "white",
      zIndex: 2,
      border: "1px solid #D7D9E0 !important",
    },

    headerColums: {
      padding: '12px 16px !important',
      border: "1px solid #D7D9E0 !important",
    },
  }
})