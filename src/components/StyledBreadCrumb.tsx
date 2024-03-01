/*
    File name: StyledBreadCrumb
    Author:Yuying Huang
    Date: 2024-3-1
    Description: Create form element components, which are used to compose the designed UI panel
    Components: Form element components and a designed UI panel with a switch of two suits of theme design
    Calls: ThemeDetails.tsx
    Called By: App.tsx
    Others: Used icons in '../../src/assets/'
*/

import { PropsWithChildren } from 'react';
import styled, { ThemeProvider } from 'styled-components'
import { THEME, ThemeDetails } from './ThemeDetail';
import Icon1 from '../../src/assets/icon1.png'
import Icon2 from '../../src/assets/icon2.png'
import pen from '../../src/assets/pen.svg'
import arrowIcon from '../../src/assets/arrow.svg'
import clock from '../../src/assets/clock.svg'

type StyledBreadCrumbProps = PropsWithChildren<{
    theme:"dark"|"light";
    onClose:boolean;
    onChange:Function;
    id:number;
}>

type StyledContainerProps = PropsWithChildren<{
    inversed?:boolean;
    highlight?:boolean;
    transparent?:boolean;
    border?:string;
}>

type StyledButtonProps = StyledContainerProps&{
    text?:string;
    size?:string;
    onClick?:Function;
}

type StyledTitleProps = StyledContainerProps&{
    size?:string;
    onClick?:Function;
}

type StyledFormProps = StyledContainerProps&{
    onClose:boolean;
    id:number
}

type StyledIconProps = StyledContainerProps&{
    size?:string;
    alt?:string;
    border?:string;
    onClick?:Function;
}

type StyledInputProps = StyledContainerProps & {
    type?:string;
    placeholder?:string;
    borderLeft?:boolean;
    size?:string;
}

type StyledTextProps = StyledContainerProps & {
    to?:string;
    size?:string;
    padding?:boolean;
}

type StyledSeparatorProps = StyledContainerProps & {
    separatorString?:string;
    separatorIcon?:string;
    size?:string;
    paddingTop?:boolean;
}

type StyledFormElementBinder = StyledContainerProps & {
    to?:string;
    column?:boolean;
    row?:boolean;
    divider?:boolean;
    size?:string;
    at?:string;
    spaced?:string;
}

type StyledSectionProps = StyledContainerProps & {
    spaced?:string;
}

const StyledFormThemeContainer = styled.div<StyledContainerProps>`
    background-color:${props=>(props.transparent?props.theme.transparent.backgroundColor:
        props.inversed?props.theme.inversed.backgroundColor:
        props.highlight?props.theme.highlight.backgroundColor:
        props.theme.backgroundColor)};
    color:${props=>(props.transparent?props.theme.transparent.color:
        props.highlight?props.theme.highlight.color:
        props.inversed?props.theme.inversed.color:
        props.theme.color)};

`

const StyledTitle = styled.h2<StyledTitleProps>`
    display:flex;
    justify-content:space-between;
    align-items:center;
    background-color:${props=>(props.transparent?props.theme.transparent.backgroundColor:
        props.inversed?props.theme.inversed.backgroundColor:
        props.highlight?props.theme.highlight.backgroundColor:
        "transparent")};
    color:${props=>(props.transparent?props.theme.transparent.color:
        props.highlight?props.theme.highlight.color:
        props.inversed?props.theme.inversed.color:
        props.theme.color)};
    font-size:${props => (
        props.size === 's'? '1rem':
        props.size === 'm'? '1.9rem': 
        props.size === "b"? '2.5rem':'1rem')};

`

const StyledButton = styled.button<StyledButtonProps>`
    width: ${props => (
        props.size === 's'? '7em':
        props.size === 'm'? '15rem': 
        props.size === "b"? '27rem':
        props.size === 'ss'?'2rem':'7rem')};
    height: ${props => (
        props.size === 's'? '3rem':
        props.size === 'm'? '3rem': 
        props.size === "b"? '4rem':
        props.size === 'ss'?'2rem':'7rem')};
    font-size:${props => (
        props.size === 's'? '1rem':
        props.size === 'm'? '1.2rem': 
        props.size === "b"? '1.5rem':'1rem')};
    padding:0;
    background-color:${props=>(props.transparent?props.theme.transparent.backgroundColor:
        props.inversed?props.theme.inversed.backgroundColor:
        props.highlight?props.theme.highlight.backgroundColor:
        props.theme.default.backgroundColor)};
    color:${props=>(props.transparent?props.theme.transparent.color:
        props.highlight?props.theme.highlight.color:
        props.inversed?props.theme.inversed.color:
        props.theme.default.color)};
    opacity:${props=>(props.transparent||props.highlight||props.inversed?1:1)};
`

const StyledBanner = styled(StyledFormThemeContainer)<StyledTextProps>`
    display:flex;
    flex-direction:row;
    justify-content:${props =>(`"${props.to}"`)};
    align-items:center;
    border-radius:.5rem;
    padding:.5rem .1rem;
    margin:1rem 0;
`

const StyledText = styled.span.attrs<StyledTextProps>(props=>({
}))<StyledTextProps>`
    padding: ${props=>(props.padding?".2rem .4rem":
        "inherited"
    )};
    border-radius:.3rem;
    >span:not(:first-child) {
        margin: 0 0 0 .5rem;
    }
    background-color:${props=>(props.transparent?props.theme.transparent.backgroundColor:
        props.inversed?props.theme.inversed.backgroundColor:
        props.highlight?props.theme.highlight.backgroundColor:
        "inherited")};
    color:${props=>(props.transparent?props.theme.transparent.color:
        props.highlight?props.theme.highlight.color:
        props.inversed?props.theme.inversed.color:
        "inherited")};
    font-size:${props => (
        props.size === 's'? '1rem':
        props.size === 'm'? '1.9rem': 
        props.size === "b"? '2.5rem':'1rem')};
    b {
        font-weight:bold;
    }
`


const StyledSeparator = styled.img.attrs<StyledSeparatorProps>(props=>({
    src:props.separatorIcon,
}))`
    display:inline-block;
    align-self:center;
    width: ${props => (
        props.size === 's'? '2rem':
        props.size === 'm'? '3rem': 
        props.size === "b"? '4rem':
        props.size === "ss"? '1.4rem':'1.4rem')};
    .icon {
        color: ${props =>(`"${props.theme.inversed.color}"`)};
    }
    padding-top:${props => (
        props.paddingTop? '1.7rem':"none")};
`

const StyledIcon = styled.img<StyledIconProps>`
    width: ${props => (
        props.size === 'ms'? '1rem':
        props.size === 's'? '3rem':
        props.size === 'm'? '4rem': 
        props.size === "b"? '5rem':
        props.size === "ss"? '2rem':'3rem')};
    height: ${props => (
        props.size === 'ms'? '1rem':
        props.size === 's'? '3rem':
        props.size === 'm'? '4rem': 
        props.size === "b"? '5rem':
        props.size === "ss"? '2rem':'3rem')};
    padding:0 .5rem; 
    border-style:${props=>props.border=="solid"?"solid":
        props.border=="dashed"?"dash":
        props.border=="dotted"?"dotted":
        props.border=="double"?"double":
        props.border=="inset"?"inset":"none"
    };
    border-radius:.5rem;
    border-width:.01rem;
    border-color:${props =>(`"${props.theme.default.color}"`)};
`

const StyledForm = styled(StyledFormThemeContainer)<StyledFormProps>`
    border-radius:0.4rem;
    width:27rem;
    height:34.5rem;
    padding:1.5rem;
    margin:2rem;
    display:${props => (props.onClose === true? 'none':'flex')};
    flex-direction:column;
    align-items:stretch;
    justify-items:stretch;
    overflow:hidden;
`

const StyledFormElementBinder = styled(StyledFormThemeContainer)<StyledFormElementBinder>`
    display:flex;
    flex-direction:${props=>(props.column?"column":"row")};
    justify-content:${props=>(props.to=='right'?"end":
        props.to=="left"?"start":
        props.to=="up"?"start":
        props.to=="down"?"end":
        props.to=="even"?"space-between":""
    )};
    align-items:${props=>(props.at=='end'?"end":
        props.at=="start"?"start":
        props.at=="center"||props.to=="even"? "center":"space-between"
    )};
    background-color:${props=>(props.transparent?props.theme.transparent.backgroundColor:
        props.inversed?props.theme.inversed.backgroundColor:
        props.highlight?props.theme.highlight.backgroundColor:
        "inherited")};
    color:${props=>(props.transparent?props.theme.transparent.color:
            props.highlight?props.theme.highlight.color:
            props.inversed?props.theme.inversed.color:
            "inherited")};
    
    border-width:${props=>(props.transparent||props.border?".01rem":"0")};
    border-color:${props=>(props.theme.default.color)};
    border-style:solid;
    border-radius:.5rem;
    span {
        margin-left:${props=>(props.to=='right'?`${props.spaced}`:"0" )};
    }


`
const StyledSection = styled.div<StyledSectionProps>`
    margin-top: ${props => (
        props.spaced === 's'? '1rem':
        props.spaced === 'm'? '1.5rem': 
        props.spaced === "b"? '2rem':
        props.spaced === "ss"? '.5rem':'1.5rem')};
    margin-bottom:${props => (
        props.spaced === 's'? '1rem':
        props.spaced === 'm'? '1.5rem': 
        props.spaced === "b"? '2rem':
        props.spaced === "ss"? '.5rem':'1.5rem')};

`

const StyledInput = styled.input.attrs<StyledInputProps>(props=>({
    placeholder:props.placeholder,
}))<StyledInputProps>`
    width: ${props => (
        props.size === 'ss'? '7.1rem':
        props.size === 's'? '9.5rem':
        props.size === 'm'? '16rem': 
        props.size === "b"? '27rem':'9.5rem')};
    height: ${props => (
        props.size === 's'? '3.5rem':
        props.size === 'm'? '4rem': 
        props.size === "b"? '5rem':'3.5rem')};
    background-color:${props=>(props.transparent?props.theme.transparent.backgroundColor:
        props.inversed?props.theme.inversed.backgroundColor:
        props.highlight?props.theme.highlight.backgroundColor:
        "transparent")};
    color:${props=>(props.transparent?props.theme.transparent.color:
        props.highlight?props.theme.highlight.color:
        props.inversed?props.theme.inversed.color:
        "inherited")};
    border-left:${props=>(props.borderLeft?`.01rem solid ${props.theme.default.color}`:"none")};

`



export default function StyledBreadCrumb({
    id,
    onClose,
    onChange,
    theme
}:StyledBreadCrumbProps) {
    let themeDetail = ThemeDetails.get(THEME[theme])!
    return (
        
        <ThemeProvider theme={themeDetail}>
        <StyledForm  onClose={onClose} id={id}>
        <StyledFormThemeContainer> 
                <StyledTitle size='m'>Deposit ATOM
                    <StyledButton size="ss">×</StyledButton>
                </StyledTitle>
                <StyledSection >
                    <StyledFormElementBinder to='even'>
                        <StyledFormElementBinder size='s' column at='start' >
                            <StyledText>From</StyledText>
                            <StyledFormElementBinder highlight to='even'>
                                <StyledIcon size="ss" src={Icon1}/>
                                <StyledInput ></StyledInput>
                            </StyledFormElementBinder>
                        </StyledFormElementBinder >
                        <StyledSeparator separatorIcon={arrowIcon} paddingTop />
                        <StyledFormElementBinder size='s' column at='start'>
                                <StyledText>To</StyledText>
                                <StyledFormElementBinder  highlight to='even'>
                                    <StyledIcon size="ss" src={Icon2}/>
                                    <StyledInput size="ss"></StyledInput>
                                    <StyledIcon size="ms" src={pen}/>
                                </StyledFormElementBinder>
                        </StyledFormElementBinder >
                    </StyledFormElementBinder>
                </StyledSection>
                <StyledSection>
                    <StyledFormElementBinder
                        column
                    >
                        <StyledFormElementBinder to='even'>
                            <StyledText to="left" size='m'>Select amount</StyledText>
                            <StyledText to="right" size='s'>Available 2 ATOM</StyledText>
                        </StyledFormElementBinder>
                        <StyledFormElementBinder transparent to='even' size="b">
                            <StyledIcon size="s" src={Icon1} />
                            <StyledInput borderLeft></StyledInput>
                            <StyledText transparent padding>ATOM≈$1,013</StyledText>
                        </StyledFormElementBinder>
                        
                    </StyledFormElementBinder>
                </StyledSection>
                <StyledSection spaced='b'>
                    <StyledFormElementBinder  to="right" spaced="1rem">
                        <StyledText  inversed padding>Max</StyledText>
                        <StyledText  inversed padding>1/2</StyledText>
                        <StyledText  inversed padding>1/3</StyledText>
                    </StyledFormElementBinder>
                </StyledSection>
                <StyledSection>
                    <StyledBanner  to="left" highlight>
                        <StyledIcon size="ss" src={clock}/>
                        <StyledText >Estimated time: <b>20 minutes</b></StyledText>
                    </StyledBanner>
                </StyledSection>
            <StyledButton size="b"  inversed >Transfer</StyledButton>
            <StyledButton size="m"  transparent >Cancel</StyledButton>
        </StyledFormThemeContainer> 
        </StyledForm>
        </ThemeProvider>
    )
}
