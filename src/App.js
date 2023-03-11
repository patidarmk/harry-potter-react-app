import './App.css';
import { useState,useEffect } from "react"
import Sentanse from './Components/Sentanse'
import Nav from './Navbar/Navbar.js'
import { nounData } from './data/nounData'
import { StoryData } from  './data/storyData.js'
import Noun from './Components/Noun'
import Conversation from './Components/Conversation';
import img from './assets/search.png';


const App =()=>{
    let WordsCount = 0
    let sentenceArr =[];
    const[count,setCount] = useState(0);
    const[sentanceAll,setEachSentence] = useState([]);
    const[Navigation,setNavigation] = useState(['Sentence','Noun','Conversation']);
    const[nounList,setNoun] = useState([]);
    const[isActive,setToggle] = useState(0);
    const[conversation,setConversation] = useState([]);
    const[searchItem,setSearchItem] = useState();
    const ConversationArr = []
    
    const getSentences = StoryData.split('.')
    const checkNoun = () => {
        const nounList = nounData.filter((noun)=>StoryData.includes(noun))
        console.log(nounList)
        setNoun(nounList.sort());
    }

    useEffect(() => {
        checkNoun();
        checkConversation() ; 
      }, []); 

    const checkConversation =() => {
        ConversationArr.push(StoryData.split('"'))
        setConversation(ConversationArr)
    }

    const changeHandler = (event) => {
        const findWord = event.target.value;
        setSearchItem(findWord);
        let flag = false
        getSentences.forEach((sentence)=>{            
            let getWords = sentence.split(' ')
            flag = false
            getWords.forEach((word) => {   
                if(word === findWord && findWord) {
                    console.log(word);
                    WordsCount +=1
                    flag = true
                }
           })
           if(flag===true){
                sentenceArr.push(sentence)
           }
        })
        setCount(WordsCount);
        setEachSentence(sentenceArr)
    }
  
    const toggleTab = (id) => {
        setToggle(id)
    }
  
    return (
        <div className = "container">
            <div className="tab-container">
                <div className="tabs">
                    <Nav navList = {Navigation} toggleTab={toggleTab} isActive={isActive}/>
                </div>
                <hr></hr>
                <div className="tab-details">
                { isActive ===0 && (
                <div className="search-box" >
                     <input type ="Text" value = {searchItem} onChange= {changeHandler} placeholder="Type to search..."/> 
                     
                </div>)}
                       
                        { isActive === 0 && count>0 && (<Sentanse sentances={sentanceAll} count ={count} />)
                        }
                        {isActive===0 && count===0 && (<><img alt="Search" src={img}></img> <p className='search-text'>Please search the word to find sentences</p> </> )  }
                        { isActive ===1 && (<Noun NounList = {nounList}/>)}
                        { isActive ===2 && (<Conversation  ConversationList = {conversation}/>) }
                </div>
            </div>
        </div>
        )
}


export default App;