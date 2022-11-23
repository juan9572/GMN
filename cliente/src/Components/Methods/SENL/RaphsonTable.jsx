import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import '../table.css'

const renderHeader = () => {
    let headerElement = ['iteración', 'xi', 'f(xi)', 'f\'(x)' , 'E']
    return headerElement.map((key, index) => {
        return <Th key={index}>{key}</Th>
    })
}

const renderBody = (data) => {
    return data && data.map(({ Niter, xi, xiEval, xiDF , E }) => {
        return (
            <Tr key={Niter}>
                <Td>{Niter}</Td>
                <Td>{xi}</Td>
                <Td>{xiEval}</Td>
                <Td>{xiDF}</Td>
                <Td>{E}</Td>
            </Tr>
        )
    })
}

const RaphsonTable = ({data}) => {
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

export default RaphsonTable