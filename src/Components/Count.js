const Count = (props) => {
    return (
        <div className="tab-details-count">{ props.count >0 &&
            <h1>No of Count {props.count}</h1>}
        </div>
    )
}
export default Count;