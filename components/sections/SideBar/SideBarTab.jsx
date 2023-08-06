import Link from "next/link";

const SideBarTab = (props) => {
    const { iconUrl, title , subMenuItems } = props;

    return (
        <Link href={`/${title.toLowerCase()}`} className="sideBarTab">
            <img src={iconUrl}/>

            <h3>{title}</h3>
        </Link>
    )
}

export default SideBarTab