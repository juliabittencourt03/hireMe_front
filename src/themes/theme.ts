import { createTheme } from "@mui/material";

const tema = createTheme({
    palette: {
        primary:{
            main:"#2596be",
        },
        secondary:{
            main:"#F5F5F5"
        },
        text:{
            primary:"#2596be",
            secondary: "#6c6767",
        },
    },
    components:{
        MuiButton:{
            styleOverrides:{
                root:{
                    color: "#FFF",
                    borderRadius:10,
                    backgroundColor:"#2596be",
                    textTransform:"none",
                    fontWeight:"bold",
                    paddingTop: "12px",
                    paddingBottom: "12px",
                    ":hover":{
                        backgroundColor:"#2596be"
                    }

                }
            }
        },
        MuiTextField:{
            defaultProps:{
                InputLabelProps:{
                    required: false,
                },
                required: true,
            }
        }
    }
});

export default tema;