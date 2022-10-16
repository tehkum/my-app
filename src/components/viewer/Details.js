import DetailViewer from './DetailViewer';

function Details(props){
    return(<div>
        {
            props.items.map((dummyDetails) => <DetailViewer 
            username = {dummyDetails.userName}
            age = {dummyDetails.age}
            key = {dummyDetails.id} />)
        }
    </div>)
};

export default Details;