import Nav from '@components/Nav';
import Provider from '@components/Provider';
import '@styles/global.css';

export const metadata = {
    title: 'PromptOasis',
    description: 'Discover boundless inspiration at PromptOasis. Ignite your creativity and embark on a journey of imagination.',
    icons: '/assets/images/PromptOasisnobg.png'
}

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <Provider>
                    <div className='main'>
                        <div className='gradient' />
                    </div>

                    <main className='app'>
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}

export default RootLayout;
