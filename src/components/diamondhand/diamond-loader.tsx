import {ReactNode, forwardRef } from 'react';
import { Box ,Spinner} from '@chakra-ui/react'
import React  from 'react';
/**
 * Spinner while loading model 
 */
export const DiamondSpinner:React.FC =() => { 
    return <Spinner
        size="xl"
        position="absolute"
        left="50%"
        top="50%"
        ml="calc(0px - var(--spinner-size) / 2)"
        mt="calc(0px - var(--spinner-size))" />;    
}

export const DiamondContainer= forwardRef(({children}:{children:ReactNode}, ref:any) => {
    return <Box
        ref={ref} 
        className="diamond-container"
        m="auto"
        mt={['-20px', '-60px', '-120px']}
        mb={['-40px', '-140px', '-200px']}
        w={[280, 480, 640]}
        h={[280, 480, 640]}
        position="relative"
    >
        {children}
    </Box>; 
})  ;

const DiamondLoader = () => { 
    return ( 
        <DiamondContainer>
            <DiamondSpinner/>
        </DiamondContainer>
    )
}
export default DiamondLoader ;