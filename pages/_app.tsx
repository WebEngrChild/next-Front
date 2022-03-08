import { SessionProvider } from "next-auth/react"

export default function App({ Component, pageProps: { session, ...pageProps } }: {
    Component: any;
    pageProps: {
        [x: string]: any;
        session: any;
    };
}): JSX.Element {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps}/>
    </SessionProvider>
  )
}