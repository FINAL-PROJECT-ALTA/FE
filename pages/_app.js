import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className='max-w-screen-sm m-auto'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
