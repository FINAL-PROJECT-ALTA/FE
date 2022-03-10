import Document, { Html, Head, Main, NextScript } from "next/document";
class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html className='scroll-smooth bg-gray-100'>
                <Head />
                <body className='max-w-screen-sm bg-white m-auto font-poppins'>
                    <Main />
                    <NextScript />
                    <div id="modal-root"></div>
                </body>
            </Html>
        )
    }
}
export default MyDocument;