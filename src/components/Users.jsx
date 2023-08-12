import { useFecth } from "../hooks/useFetch"

const Users = () => {

    const { data, loading, errors } = useFecth('https://jsonplaceholder.typicode.com/users')

    console.log(errors)

    if(errors) return <p>{errors}</p>

    return (
        <div>
            <h2>Users Placeholder</h2>
            {
                loading ? <div>Cargando....</div>
                    : <ul>
                        {data.map((user) => (<li key={user.id}>{user.name}</li>))}
                    </ul>
            }

        </div>
    )
}

export default Users