import { useEffect } from 'react'
import { useState } from 'react'
import { api } from '../../services/api'
import './styles.css'

export const InputsContainer = ({ addItems }) => {
    const [data, setData] = useState('')
    const [categoria_id, setCategoria_id] = useState('')
    const [titulo, setTitulo] = useState('')
    const [valor, setValor] = useState('')

    const [nameCategoria, setNameCategoria] = useState([])

    useEffect(() => {
        api.get('/listar/categoria/0').then(response => {
            console.log(response.data.rows)
            setNameCategoria(response.data.rows)
        })
    }, [])

    function handleAddItems() {
        const dados = {
            data, 
            categoria_id, 
            titulo,
            valor
        }
        addItems({dados})
    }

    return (
        <section className='inputs-container'>
            <div className='container-input'>
                <label htmlFor="data">Data</label>
                <input 
                    type="date" 
                    value={data}
                    onChange={e => setData(e.target.value)}
                />
            </div>

            <div className='container-input'>
                <label htmlFor="category">Categoria</label>
                <select 
                    name="category" 
                    id="category"
                    value={categoria_id}
                    onChange={e => setCategoria_id(e.target.value)}
                >
                    {nameCategoria.map(item => (
                        <option key={item.id} value={item.id}>{item.descricao}</option>
                    ))}
                </select>
            </div>

            <div className='container-input'>
                <label htmlFor="title">Título</label>
                <input 
                    type="text"
                    value={titulo}
                    onChange={e => setTitulo(e.target.value)} 
                />
            </div>

            <div className='container-input'>
                <label htmlFor="value">Valor</label>
                <input 
                    type="number"
                    value={valor}
                    onChange={e => setValor(e.target.value)} 
                />
            </div>

            <div className='container-input'>
                <button onClick={handleAddItems}>Adicionar</button>
            </div>
        </section>
    )
}