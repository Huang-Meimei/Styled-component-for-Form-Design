
type ThemeTemplate = {
    highlight:object;
    transparent:object;
    inversed:object;
    color:string;
    backgroundColor:string
}


export enum THEME{
    dark='dark', light='light'
}

export const ThemeDetails: Map<THEME,ThemeTemplate> = new Map([
    [THEME.dark, {
        inversed: {
            backgroundColor:'lightgrey',
            color: "rgb(100,100,100)"
        },
        default: {
            backgroundColor:'rgb(55,55,55)',
            color:"darkgrey",
        },
        transparent: {
            backgroundColor:'transparent',
            color:"darkgrey"
        },
        highlight:{
            backgroundColor:'black',
            color: "lightgrey"
        },
        backgroundColor:'rgb(33,36,41)',
        color:"lightgrey",
    }],
    [THEME.light, {
        inversed: {
            backgroundColor:'rgb(43,50,56)',
            'color': "white",
        },
        default: {
            backgroundColor:'rgb(239,243,249)',
            color:"rgb(180,180,180)",
        },
        transparent: {
            backgroundColor:'transparent',
            'color':"rgb(105,117,132)"
        },
        highlight:{
            backgroundColor:'rgb(239,243,249)',
            color: "rgb(55,55,55)"
        },
        backgroundColor:'rgb(250,250,250)',
        color:"black",
    }]
])
