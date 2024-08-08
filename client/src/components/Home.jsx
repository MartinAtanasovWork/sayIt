export default function Home(){

    async function buttonHandler(){
        await fetch("http://localhost:3000/delete/66b4e56aa2a4084fb43dd674",{
            method:"post",
            headers:{"Auth-Token":"tokenauthtokenauth","Content-Type":"application/json"},
            body: JSON.stringify({title:"Updated",img:"a",content:"mnogog aa",author:"66a28810af1f0c8250ddf9da"})
        });
    }

    return (
        <>
            <button onClick={buttonHandler}>Create</button>
        </>
    )
}