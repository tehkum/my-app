import InputForm from "./InputForm";
function InputViewer(props){
    function userDataHandler(userInfo){
        var userData = {
            ...userInfo,
            id : Math.random().toString(),
        };
        props.onSelectData(userData);
    }
return <div>
    <InputForm onSaveUserData={userDataHandler}/>
</div>
}

export default InputViewer;