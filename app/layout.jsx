import '@styles/global.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: "promptopia",
    descriptin:"Descover & Share AI Prompts"
}

const RootLayout = ({children}) => {
    return (
        <html lang='en'>
            <body>
                <div className="main">
                  <div className="gradient"/>
                </div>
                <main className="app">
                    <Nav/>
                    {children}
                </main>
            </body>
        </html>
  )
}

export default RootLayout;