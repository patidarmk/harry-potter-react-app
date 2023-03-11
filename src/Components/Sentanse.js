import Count from './Count'
const Sentanse = (props)=>{
    let Sentanses = props.sentances;
    return (
        <div>
            {<Count count = {props.count} />}
            {Sentanses.map((Sentanse)=>{
                return ( 
                    <div className="tab-details-sentences">
                        <p>{Sentanse}</p>
                        <hr></hr>
                    </div>)
                })
            }
        </div>
    )
 }
 export default Sentanse;