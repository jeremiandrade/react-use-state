
import { useState } from "react";

const languages = [
    {
        id: 1,
        title: "HTML",
        description: "HTML (HyperText Markup Language) è il linguaggio standard per creare pagine e applicazioni web. Struttura il contenuto web e fornisce elementi di base come titoli, paragrafi e immagini."
    },
    {
        id: 2,
        title: "CSS",
        description: "CSS (Cascading Style Sheets) è un linguaggio di stile utilizzato per descrivere la presentazione di un documento scritto in HTML o XML. Controlla il layout, i colori, i caratteri e l'aspetto complessivo di una pagina web."
    },
    {
        id: 3,
        title: "JavaScript",
        description: "JavaScript è un linguaggio di programmazione dinamico utilizzato per lo sviluppo web, che consente contenuti interattivi come grafici animati, pulsanti cliccabili e altre funzionalità dinamiche sui siti web."
    },
    {
        id: 4,
        title: "Node.js",
        description: "Node.js è un ambiente di runtime JavaScript lato server che permette di utilizzare JavaScript anche sul backend, consentendo agli sviluppatori di usare lo stesso linguaggio sia sul client che sul server."
    },
    {
        id: 5,
        title: "Express",
        description: "Express è un framework per applicazioni web minimalista e veloce per Node.js. Fornisce strumenti robusti per creare applicazioni web e API e semplifica la gestione delle rotte e delle richieste."
    },
    {
        id: 6,
        title: "ReactJS",
        description: "ReactJS è una libreria JavaScript per costruire interfacce utente, in particolare applicazioni a pagina singola. Consente agli sviluppatori di creare componenti UI riutilizzabili e di gestire efficacemente lo stato dell'applicazione."
    }
];


export default function AppCard() {


    const [count, setCount] = useState(false)

    function btn(id) {
        setCount(id)
    }

    return (
        <main style={{ backgroundColor: 'white' }}>
            <h2 className="title" style={{ color: 'black', marginTop: '1rem' }}> Learn Web development</h2>
            <div className="cards" style={{ padding: '4rem', fontFamily: 'sans-serif' }}>
                {languages.map(item =>
                (<div className="card" style={{ padding: '2rem', border: '2px solid grey', marginBottom: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }} key={item.id} >
                    <button onClick={() => btn(item.id)}
                        style={{ backgroundColor: count === item.id ? 'yellow' : 'blue', color: count === item.id ? 'black' : 'white', border: 'none', padding: '0.5rem 0.7rem', }}
                    >{item.title}</button>
                    {
                        count === item.id && (<div className="content" style={{ color: 'black', marginTop: '1.5rem' }}>{item.description}</div>)
                    }

                </div>))}
            </div>


        </main>


    )

}