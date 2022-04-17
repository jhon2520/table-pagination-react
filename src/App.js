import React from 'react'
import data from './data'
import useTable from './useTable';



const App = () => {

    const [paginated,pages,pagination,currentPage] = useTable(data)

    console.log(data.length);

    return (
        <div>
            <table className='table table-hover table-dark'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nombre</th>
                        <th>appellido</th>
                        <th>edad</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    paginated?.map((e,i)=>{
                        return(
                            <tr key={i}>
                                <td>{e.id}</td>
                                <td>{e.nombre}</td>
                                <td>{e.apellido}</td>
                                <td>{e.edad}</td>
                            </tr>
                        );
                    })
                    }
                </tbody>
            </table>
            <nav className='d-flex justify-content-center'>
                <ul className='pagination'>
                    {
                        pages.map((page,i)=>{
                            return(
                                <li onClick={()=>pagination(page)} key={i} className={page === currentPage ? "page-link bg-primary text-white":"page-link"}>{page}</li>
                            )
                        })
                    }

                </ul>
            </nav>
        </div>
    )
}

export default App