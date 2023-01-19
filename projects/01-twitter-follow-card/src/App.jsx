
import './App.css'

import { TwitterFolowCard } from './TwitterFollowCard'

export function App(){
    
    

    return (  
        <section className="App">
            <TwitterFolowCard 
                userName="josavicente">
                    <strong>Josa Vicente</strong>
                </TwitterFolowCard>
            <TwitterFolowCard 
                userName="midudev">
                    <strong>Midudev</strong>
                </TwitterFolowCard>
        </section>
    
)
}