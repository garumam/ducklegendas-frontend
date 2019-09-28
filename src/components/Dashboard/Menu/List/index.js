import React,{useEffect} from 'react';
import { 
    DataTable,
    DataTableContent, 
    DataTableHead, 
    DataTableRow, 
    DataTableCell, 
    DataTableHeadCell,
    DataTableBody,
    Fab
} from 'rmwc';
import ReactPaginate from 'react-paginate';
import {withRouter} from 'react-router-dom';

import './styles.css';
import {HeaderCard} from '../Form/styles';
import '@rmwc/data-table/data-table.css';
import api from '../../../../services/api';

export const dataTotal = [
    {id:1,cell1: 'Cookies', cell2: 25, cell3: '$2.90'},
    {id:2,cell1: 'Cookies', cell2: 25, cell3: '$2.90'},
    {id:3,cell1: 'Cookies', cell2: 25, cell3: '$2.90'},
    {id:4,cell1: 'Cookies', cell2: 25, cell3: '$2.90'},
    {id:5,cell1: 'Cookies', cell2: 25, cell3: '$2.90'},
    {id:6,cell1: 'Cookies', cell2: 25, cell3: '$2.90'},
    {id:7,cell1: 'Cookies', cell2: 25, cell3: '$2.90'},
    {id:8,cell1: 'Cookies', cell2: 25, cell3: '$2.90'},
    {id:9,cell1: 'Cake', cell2: 25, cell3: '$2.90'},
    {id:10,cell1: 'Cake', cell2: 25, cell3: '$2.90'},
    {id:11,cell1: 'Cake', cell2: 25, cell3: '$3.90'},
    {id:12,cell1: 'Cake', cell2: 25, cell3: '$2.90'},
    {id:13,cell1: 'Cookies', cell2: 25, cell3: '$2.90'},
    {id:14,cell1: 'Cookies', cell2: 25, cell3: '$2.90'},
    {id:15,cell1: 'Cookies', cell2: 25, cell3: '$2.90'},
    {id:16,cell1: 'Cookies', cell2: 25, cell3: '$2.90'},
    {id:17,cell1: 'Teste', cell2: 25, cell3: '$3.90'},
    {id:18,cell1: 'Teste', cell2: 25, cell3: '$2.90'},
    {id:19,cell1: 'Teste', cell2: 25, cell3: '$2.90'},
    {id:20,cell1: 'Teste', cell2: 25, cell3: '$3.90'},
    {id:21,cell1: 'Cookies', cell2: 25, cell3: '$2.90'},
    {id:22,cell1: 'Cookies', cell2: 25, cell3: '$2.90'},
    {id:23,cell1: 'Cookies', cell2: 25, cell3: '$2.90'},
    {id:24,cell1: 'Cookies', cell2: 25, cell3: '$2.90'},
    {id:25,cell1: 'Cookies', cell2: 25, cell3: '$2.90'},
    {id:26,cell1: 'Cookies', cell2: 25, cell3: '$2.90'},
    {id:27,cell1: 'Cookies', cell2: 25, cell3: '$2.90'},
    {id:28,cell1: 'Chicken', cell2: 25, cell3: '$2.90'},
    {id:29,cell1: 'Chicken', cell2: 25, cell3: '$2.90'},
    {id:30,cell1: 'Chicken', cell2: 25, cell3: '$2.90'}
];




const Paginator = (items, page, per_page) => {
 
    page = page || 0;
    per_page = per_page || 10;
    let offset = page * per_page,

    paginatedItems = items.slice(offset).slice(0, per_page),
    total_pages = Math.ceil(items.length / per_page);
    return {
    page: page,
    per_page: per_page,
    total: items.length,
    total_pages: total_pages,
    data: paginatedItems
    };
}




const List = (props) => {
    const [dataPaginada, setDataPaginada] = React.useState([]);
    const [allData, setAllData] = React.useState([]);

    useEffect(() => {
        async function getUsers(){
            const data = await api.post('/users');
            console.log(data);
             setDataPaginada(Paginator(data));
             setAllData(data);
        }
        getUsers()
    },[])

    const tableParams = {
        headCells: [],
        headNames: [],
        formPath: '/form'
    };


    

    switch(props.table){
        case 1: //usuários
            tableParams.headCells.push('ID','Nome','E-mail');
            tableParams.headNames.push('id','name','email');
            tableParams.formPath = 'users'+tableParams.formPath;
            break;
        case 2: //legendas
            tableParams.headCells.push('ID','Nome','Categoria','Autor');
            tableParams.formPath = 'subtitles'+tableParams.formPath;
            break;
        case 3: //categorias
            tableParams.headCells.push('ID','Nome','Descrição','Classificação');
            tableParams.formPath = 'categories'+tableParams.formPath;
            break;
        case 4: //legendas em andamento
            tableParams.headCells.push('ID','Legenda','%','Categoria');
            tableParams.formPath = 'progress'+tableParams.formPath;
            break;
        case 5: //permissoes
            tableParams.headCells.push('ID','Nome','Descrição','N° de usuários');
            tableParams.formPath = 'permissions'+tableParams.formPath;
            break;
        case 6: //ranking
            tableParams.headCells.push('Posição','Usuario','Qtd de Legendas','Descrição');
            tableParams.formPath = 'ranking'+tableParams.formPath;
            break;
        case 7: //galeria
            tableParams.headCells.push('ID','Nome','Descrição','Descrição2');
            tableParams.formPath = 'gallery'+tableParams.formPath;
            break;
        default:  
    }

    const handlePageClick = data => {
        let selected = data.selected;
        let dados = Paginator(allData, selected);
        console.log(dados);
        setDataPaginada(dados);
    };

    return(
        <>
        <HeaderCard>
            <h2>{props.title}</h2>
            { props.title !== 'Ranking' &&
                <Fab icon="add" type="button" onClick={()=>{props.history.push(tableParams.formPath)}} />
             }
        </HeaderCard>
        <div className="card-border"/>
        <DataTable style={{border:'none'}}>
        <DataTableContent style={{width: '100%'}}>
            <DataTableHead>
            <DataTableRow>
                { tableParams.headCells.map((cell, index) => (
                    <DataTableHeadCell style={{fontSize:'0.8rem',lineHeight:'1.8rem'}} key={index}>{cell}</DataTableHeadCell>
                ))}
                <DataTableHeadCell style={{fontSize:'0.8rem',lineHeight:'1.8rem'}}>Ação</DataTableHeadCell>
            </DataTableRow>
            </DataTableHead>
            <DataTableBody>
                { dataPaginada.data &&
                dataPaginada.data.map((obj, index) => (
                <DataTableRow key={index}>
                    {
                    Object.keys(obj).map((item, i) => (
                        tableParams.headNames.includes(item) && <DataTableCell key={i}>{obj[item]}</DataTableCell>
                    ))
                    }
                    <DataTableCell>
                        <Fab 
                        style={{marginRight: '5px', backgroundColor: 'var(--edit-button)'}}
                        mini 
                        icon="create" 
                        type="button" 
                        onClick={()=>{props.history.push(`${tableParams.formPath}/${obj.id}`);}} />
                        <Fab 
                        style={{backgroundColor: 'var(--delete-button)'}} 
                        mini 
                        icon="delete" 
                        type="button" 
                        onClick={()=>{console.log('DELETANDO');}} />
                    </DataTableCell>
                </DataTableRow>
                ))
                }
            </DataTableBody>
        </DataTableContent>
        </DataTable>
        <ReactPaginate
            previousLabel={<i className="material-icons">keyboard_arrow_left</i>}
            nextLabel={<i className="material-icons">keyboard_arrow_right</i>}
            breakLabel={'...'}
            breakClassName={'break'}
            pageCount={dataPaginada.total_pages}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            activeClassName={'active'}
            />
        </>
    )
};

export default withRouter(List);