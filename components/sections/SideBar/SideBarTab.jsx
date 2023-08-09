import Link from "next/link";
import { useSelector } from "react-redux";

const SideBarTab = (props) => {
    const { iconUrl, title , subMenuItems } = props;

    const isSideBarOpen = useSelector((store) => store.sideBar.isSideBarOpen)

    return (
        <Link href={`/${title.toLowerCase()}`} className="sideBarTab">
            <img src={iconUrl}/>
            {
                isSideBarOpen ? <h3>{title}</h3> : (
                    <></>
                )
            }

        </Link>
    )
}

export default SideBarTab