import Header from '../components/Header/Header'
import {Helmet} from 'react-helmet'

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Restu Muzakir | Software Engineer</title>
            </Helmet>
           <Header></Header>
        </>
    )
}