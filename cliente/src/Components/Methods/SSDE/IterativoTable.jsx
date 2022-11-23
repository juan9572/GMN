import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import '../table.css'
import renderLatexMatrix from "../../renderLatexMatrix";
import { BlockMath } from "react-katex";

const renderHeader = () => {
    let headerElement = ['iteración', 'x', 'E']
    return headerElement.map((key, index) => {
        return <Th key={index}>{key}</Th>
    })
}

const renderBody = (data) => {
    return data && data.map(({ Niter, x, E }) => {
        return (
            <Tr key={Niter}>
                <Td>{Niter}</Td>
                <Td>
                    {
                    <BlockMath math={renderLatexMatrix(x, 6)} />
                    }
                </Td>
                <Td>{E}</Td>
            </Tr>
        )
    })
}

const IterativoTable = ({data}) => {
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

export default IterativoTable
