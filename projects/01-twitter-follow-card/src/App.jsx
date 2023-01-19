
import './App.css'

import { TwitterFolowCard } from './TwitterFollowCard'

export function App(){
    
    const formatUserName = (userName) => `@${userName}`

    return (  
        <section className="App">
            <TwitterFolowCard 
                formatUserName={formatUserName} 
                isFollowing 
                userName="josavicente">
                    <strong>Josa Vicente</strong>
                </TwitterFolowCard>
            <TwitterFolowCard 
                formatUserName={formatUserName} 
                isFollowing={false}
                userName="midudev">
                    <strong>Midudev</strong>
                </TwitterFolowCard>
        </section>
    
)
}