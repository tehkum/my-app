import "./DetailViewer.css";

function DetailViewer(props){
    return(<div className="main-box">
    <div className="detail-viewer">
        <div className="detail-viewer__name">
            {props.username} baneen
        </div>
        <div className="detail-viewer__age">
            {props.age}
        </div>
        </div>
    </div>)
}

export default DetailViewer;