import {extendTheme,type ThemeConfig} from '@chakra-ui/react'
import {mode,type Styles,GlobalStyleProps,StyleFunctionProps} from '@chakra-ui/theme-tools'

const styles:Styles = { 
    global: (props:GlobalStyleProps) => ({
        body: { 
            bg: mode('#dce8f4','#010e13')(props) ,
            color: mode("#006d77", "#a8dadc")(props),
        } 
    })
}

const config:ThemeConfig = { 
    initialColorMode: localStorage.getItem('chakra-ui-color-mode')|| "dark",
    useSystemColorMode: true,
}

const components = { 
    Heading: { 
        variants: { 
            'section-title' : { 
                textDecoration: ' underline' ,
                fontSize : 24  ,
                textUnderlineOffset : 3 ,
                textDecorationColor : '' ,
                textDecorationThickness : 4 ,
                marginTop:6 , 
                marginBottom:4,    
            }
        }
    }, 
    Link:{ 
        baseStyle: (props: Record<string, any> | StyleFunctionProps)=> ({ 
            color: mode("#b08a7b", "#d68d71")(props),
            textDecoration: 'underline',
        })
    }

}


const theme  = extendTheme({config,styles,components})



export default theme;

