//Import NextJS
import Document, { Html, Head, Main, NextScript } from 'next/document'

//Import Styled-Components
import { ServerStyleSheet } from 'styled-components'

//import Material-UI
import { ServerStyleSheets } from '@material-ui/styles'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const styledComponentsSheet = new ServerStyleSheet()
    const materialSheets = new ServerStyleSheets()
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => styledComponentsSheet.collectStyles(materialSheets.collect(<App {...props} />))
      })
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <React.Fragment>
            {initialProps.styles}
            {materialSheets.getStyleElement()}
            {styledComponentsSheet.getStyleElement()}
          </React.Fragment>
        )
      }
    } finally {
      styledComponentsSheet.seal()
    }
  }

  render() {
    return (
      <Html lang='en' dir='ltr'>
        <Head>
          <link rel='apple-touch-icon' sizes='180x180' href='/assets/images/icons/logo-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/assets/images/icons/logo-icon.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/assets/images/icons/logo-icon.png' />
          <link rel='manifest' href='/manifest.json' />
          <link rel='mask-icon' href='/assets/images/icons/logo-icon.png' color='#5bbad5' />
          <link rel='shortcut icon' href='/assets/images/icons/logo-icon.png' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700' />
          <link rel="stylesheet" href="/assets/styles/style.css" />
        </Head>
        <body >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;