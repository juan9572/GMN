import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import '../table.css'

const renderHeader = () => {
    let headerElement = ['iteración', 'a', 'xm', 'b', 'f(xm)','E']
    return headerElement.map((key, index) => {
        return <Th key={index}>{key}</Th>
    })
}

const renderBody = (data) => {
    return data && data.map(({ Niter, a, xm, b, xmEval, E }) => {
        return (
            <Tr key={Niter}>
                <Td>{Niter}</Td>
                <Td>{a}</Td>
                <Td>{xm}</Td>
                <Td>{b}</Td>
                <Td>{xmEval}</Td>
                <Td>{E}</Td>
            </Tr>
        )
    })
}

const RfTable = ({data}) => {
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

export default RfTable