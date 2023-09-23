import { styled } from "@mui/material";

export const CabecalhoCont = styled('header')`
    width: 250px;
    margin: 40px auto;
    text-align: center;
    color:${({theme}) => theme.palette.primary.main};
`;

export const Logo = styled('img')`
    width: 100%;
`;
