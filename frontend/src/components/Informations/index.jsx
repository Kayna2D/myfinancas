import { useState } from 'react'
import { api } from '../../services/api'
import './styles.css'

export const Information = ({list}) => {
    const [ganho, setGanho] = useState(0)
    const [despesas, setDespesas] = useState(0)
    const [balanco, setBalanco] = useState(0)

    console.log(list )

    list.map(financa => {
        api.get(`/pesquisar/financa/categoria_id/${financa.categoria_id}`).then(
            response => {
                console.log(response)
            }
        )
    })

    return (
        <section>
            <div className="input-date">
                <div className="container-input">
                    <label htmlFor="initial-date">Data Inicial</label>
                    <input type="date" name="initial-date" />
                </div>

                <div className="container-input">
                    <label htmlFor="final-date">Data Final</label>
                    <input type="date" name="final-date" />
                </div>

                <div className="container-input">
                    <button>Buscar</button>
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