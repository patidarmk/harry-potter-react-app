const Noun = (props) => {
    return (
        <ul>
            <h1>Noun({props.NounList.length})</h1>{
            props.NounList.map(noun=> <li>{noun.charAt(0).toUpperCase() +noun.slice(1)}</li>)
            }
       </ul>
    )
}

export default Noun;