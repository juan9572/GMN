import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import '../table.css'

const renderHeader = () => {
    let headerElement = ['iteración', 'xn', 'f(xn)','E']
    return headerElement.map((key, index) => {
        return <Th key={index}>{key}</Th>
    })
}

const renderBody = (data) => {
    return data && data.map(({ Niter, x, xEval, E }) => {
        return (
            <Tr key={Niter}>
                <Td>{Niter}</Td>
                <Td>{x}</Td>
                <Td>{xEval}</Td>
                <Td>{E}</Td>
            </Tr>
        )
    })
}

const SecanteTable = ({data}) => {
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

export default SecanteTable