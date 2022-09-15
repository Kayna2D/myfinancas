import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { Information } from "../../components/Informations"
import { InfoTable } from "../../components/InfoTable"
import { InputsContainer } from "../../components/InputsContainer"
import { api } from "../../services/api"
import './styles.css'

export const Home = () => {
    const [list, setList] = useState([])

    useEffect(() => {
        api.get('/listar/financa/0').then(response => {
            console.log(response.data.rows)
            setList(response.data.rows)
        })
    })

    function handleSaveItems(item) {
        const data = item.dados
        api.post('/criar/financa', data).then(response => {
            console.log(response)
        })
        api.get('/listar/financa/0').then(response => {
            console.log(response.data.rows)
            setList(response.data.rows)
        })
    }

    function handleSearchFinancasFromDate(data) {
        api.get(`/listar/financa/dataInicial/${data.dataInicial}/dataFinal/${data.dataFinal}/page/0`)
        .then(response => {
            setList(response.data.rows)
        })
    }

    return (
        <div className="container">
            <Header />
            <Information list={list} onSearch={handleSearchFinancasFromDate} />
            <InputsContainer addItems={handleSaveItems} />
            <InfoTable list={list}/>
        </div>
    )
}