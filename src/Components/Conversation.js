const Conversation = (props) =>{
    console.log(props.ConversationList)
    return (<>
            <h1>Conversation</h1> 
            { 
            props.ConversationList[0].map(con=>{
                return(
                    <>
                        <div>"{con}"</div>
                        <hr></hr>
                    </>
                )
            })
        } 
     </>)
}
export default Conversation;