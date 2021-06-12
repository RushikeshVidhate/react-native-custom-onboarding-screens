import { Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');


export const COLORS = {
    primary : "#FF5678",

    black: "#171717",
    white: "#FFFFFF",
    background: "#FFFFFF"
}

export const SIZES = {
    base: 10,
    width,
    height
}


const theme = { COLORS, SIZES };

export default theme;