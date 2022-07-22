export default function Movies({data}){
    if(!data){
        return(
            <div>
                Running...
            </div>
        )
    }
    return (
        <div>
            <Info/>
            <div>

            {data.Search.map( (m) => <div key={m.imdbID} >{m.Title} --- {m.Year}</div>  )}               

            </div>

        </div>

    )

}

 export async function getServerSideProps(context){
    const {pesquisa} = context.query
    const res = await fetch(`http://www.omdbapi.com/?apikey=ce5309eb&s=${pesquisa}`)
    console.log(`http://www.omdbapi.com/?apikey=ce5309eb&s=${pesquisa}`)
  
    const data = await res.json()
  
    return {
  
        props: {
  
            data
  
        }
  
    }
  
  }

export function Info(){
    return(
        <form method="get">
            <input name="pesquisa">
            </input>
            <input type="submit"></input>
        </form>
    )
}