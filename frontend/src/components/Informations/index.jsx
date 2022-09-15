import { useState } from 'react'
import { api } from '../../services/api'
import './styles.css'

export const Information = ({list, onSearch}) => {
    const [ganho, setGanho] = useState(0)
    const [despesas, setDespesas] = useState(0)
    const [balanco, setBalanco] = useState(0)

    const [dataInicial, setDataInicial] = useState('')
    const [dataFinal, setDataFinal] = useState('')

    function SearchFinancas() {
        onSearch({dataInicial, dataFinal})
    }

    list.map(financa => {
        api.get(`/pesquisar/financa/categoria_id/${financa.categoria_id}`).then(
            response => {
                if(response.data.Categoria.descricao === 'Ganho') {
                    setGanho(response.data.saldo)
                }
                if(response.data.Categoria.descricao === 'Despesas') {
                    setDespesas(response.data.saldo)
                }
                setBalanco(ganho - despesas) 
            }
        )
    })

    return (
        <section>
            <div className="input-date">
                <div className="container-input">
                    <label htmlFor="initial-date">Data Inicial</label>
                    <input
                     type="date" 
                     name="initial-date"
                     value={dataInicial}
                     onChange={e => setDataInicial(e.target.value)} 
                    />
                </div>

                <div className="container-input">
                    <label htmlFor="final-date">Data Final</label>
                    <input
                     type="date"
                    name="final-date"
                    value={dataFinal}
                    onChange={e => setDataFinal(e.target.value)}
                    />
                </div>

                <div className="container-input">
                    <button onClick={SearchFinancas}>Buscar</button>
                </div>
            </div>

            <div className="info-values">
                <p>Receita</p>
                <span className="span-green">R$ {ganho}</span>
            </div>

            <div className="info-values">
                <p>Despesas</p>
                <span className="span-red">R$ {despesas}</span>
            </div>

            <div className="info-values">
                <p>Balanço</p>
                <span className="span-green">R$ {balanco}</span>
            </div>
        </section>
    )
}