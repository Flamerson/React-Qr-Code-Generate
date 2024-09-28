import { Fragment } from "react"
import TopBarMenu from "../components/topbar";
import GenerateQrCode from "../components/generate";

const Generate = () => {
    return (
        <Fragment>
            <TopBarMenu />
            <GenerateQrCode />
        </Fragment>
    )
}

export default Generate;