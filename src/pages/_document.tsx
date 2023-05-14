// import { Html, Head, Main, NextScript } from 'next/document'
// import { ColorModeScript} from '@chakra-ui/react'
// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head />
//       <body>
//         <ColorModeScript initialColorMode={theme.config.initialColorMode} /> 
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   )
// }
import Document, { DocumentContext, DocumentInitialProps } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import {ColorModeScript} from '@chakra-ui/react'
import theme from '@/lib/theme'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
            <ColorModeScript initialColorMode={theme.config.initialColorMode} /> 

          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
