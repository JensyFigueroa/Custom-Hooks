import { useFecth } from "../hooks/useFetch"
import {useSearchParams} from 'react-router-dom'

const Users = () => {
    const [searchBar, setSearchBar] = useSearchParams()

    const { data, loading, errors } = useFecth('https://jsonplaceholder.typicode.com/users')

    if(errors) return <p>{errors}</p>

    return (
        <div>
            <h2>Users Placeholder</h2>
            <div className="container">
                <input className="form-control"type="text" name="search" placeholder="Search"  />
                {
                loading ? <div>Cargando....</div>
                    : <ul>
                        {data.map((user) => (<li key={user.id}>{user.name}</li>))}
                    </ul>
            }

            </div>
            
        </div>
    )
}

export default Users