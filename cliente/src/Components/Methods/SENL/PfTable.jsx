import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import '../table.css'

const renderHeader = () => {
    let headerElement = ['iteración', 'x', 'g(xi)', 'f(xi)', 'E']
    return headerElement.map((key, index) => {
        return <Th key={index}>{key}</Th>
    })
}

const renderBody = (data) => {
    return data && data.map(({ Niter, x, xiEvalG, xiEvalF, E }) => {
        return (
            <Tr key={Niter}>
                <Td>{Niter}</Td>
                <Td>{x}</Td>
                <Td>{xiEvalG}</Td>
                <Td>{xiEvalF}</Td>
                <Td>{E}</Td>
            </Tr>
        )
    })
}

const PfTable = ({data}) => {
    console.log(data);
    return (
        <>
            <Table id='table'>
                <Thead>
                    <Tr>{renderHeader()}</Tr>
                </Thead>
                <Tbody>
                    {renderBody(data)}
                </Tbody>
            </Table>
        </>
    )
}

export default PfTable