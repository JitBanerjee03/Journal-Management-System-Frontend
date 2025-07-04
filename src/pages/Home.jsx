import { useContext, useEffect } from "react";
import { ContextProviderDeclare } from "../store/ContextProvider";
import EmptyAcceptedJournalMessage from "../components/EmptyAcceptedJournalMessage";
import JournalCard from "../components/JournalCard";

const Home=()=>{
    const getContextObject=useContext(ContextProviderDeclare);
    const {journals,getAcceptedJournals}=getContextObject;
    
   useEffect(()=>{
    getAcceptedJournals();
   },[])

    return (
        <>
            {journals.length===0 ? <EmptyAcceptedJournalMessage/> :
                <div className="container mt-4">
                    {journals.map(journal => (<JournalCard key={journal.id} journal={journal} />))}
                </div>
            }
        </>
    )
}

export default Home;