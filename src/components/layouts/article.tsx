import React,{useRef}  from 'react'
import Head from 'next/head'
import { 
    motion, 
    useScroll , 
} from 'framer-motion'

const ArticleLayout = ({
    children,
    title,
}:{ 
    children: React.ReactNode,
    title? : String 
}) => { 
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["end end", "start start"]
    });
    const variants = {
      hidden: { opacity: 0, x: 0, y: 20 },
      enter: { opacity: 1, x: 0, y: 0 },
      exit: { opacity: 0, x: -0, y: 20 }
    }
    return(
      <motion.article
      initial='hidden'
      animate='enter'
      exit='exit'
      variants={variants}
      transition={{ duration: 0.7, type: 'easeInOut' }}
      style={{ position: 'relative'}}
    >
        <>
          {
            title && (
              <Head> 
                <title>{title}</title>
              </Head>
            )
          } 
            {children}
        </>
    </motion.article>
    ) ;
}
export default ArticleLayout 