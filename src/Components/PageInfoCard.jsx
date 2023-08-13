

const PageInfoCard = (props) => {

    const { imgUrl, value, title } = props;

    return (
        <div className="PageInfoCard">
            <div className='infoCard'>
                <img src={imgUrl} alt='icon image' />
                <div >
                    <h2>{value}</h2>
                    <h3>{title}</h3>
                </div>
            </div>
        </div>
    )
}

export default PageInfoCard