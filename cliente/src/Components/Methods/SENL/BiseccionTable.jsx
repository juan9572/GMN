import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import '../table.css'

const renderHeader = () => {
    let headerElement = ['iteración', 'm', 'f(m)', 'Xi', 'f(Xi)', 'Xs', 'f(Xs)', 'Error']
    return headerElement.map((key, index) => {
        return <Th key={index}>{key}</Th>
    })
}

const renderBody = (data) => {
    return data && data.map(({ Niter, m, mEval, Xi, XiEval, Xs, XsEval, E }) => {
        return (
            <Tr key={Niter}>
                <Td>{Niter}</Td>
                <Td>{m}</Td>
                <Td>{mEval}</Td>
                <Td>{Xi}</Td>
                <Td>{XiEval}</Td>
                <Td>{Xs}</Td>
                <Td>{XsEval}</Td>
                <Td>{E}</Td>
            </Tr>
        )
    })
}

const BiseccionTable = ({data}) => {
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

export default BiseccionTable
