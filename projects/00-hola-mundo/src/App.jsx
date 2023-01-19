
import './App.css'

import { TwitterFolowCard } from './TwitterFollowCard'

export function App(){
    const formatUserName = (userName) => `@${userName}`
    return (  
        <section className="App">
            <TwitterFolowCard 
                formatUserName={formatUserName} 
                isFollowing 
                userName="josavicente" 
                name="Josa Vicente"/>
            <TwitterFolowCard 
                formatUserName={formatUserName} 
                isFollowing 
                userName="midudev" 
                name="Midudev"/>
            <TwitterFolowCard 
                formatUserName={formatUserName} 
                isFollowing={false} 
                userName="elonmusk" 
                name="Elon"/>
        </section>
    
)
}