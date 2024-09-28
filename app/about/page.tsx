import Link from "next/link"
import { Fragment } from "react"
import TopBarMenu from "../components/topbar"

const AboutPage = () => {
    return(
        <Fragment>
            <TopBarMenu />
            <h1>This is the About for my product, this product is an qr code generate, i try make this app in two days.</h1>
            <Link href="/">Home page.</Link>
        </Fragment>
    )
}

export default AboutPage;

