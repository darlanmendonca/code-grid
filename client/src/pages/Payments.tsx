import React from 'react'
import useGrid from '../hooks/useGrid'
import useFetch from '../hooks/useFetch'

import Code from '../components/Code'
import Button from '../components/Button'
import Loading from '../components/Loading'
import Form from '../components/Form'
import InputText from '../components/InputText'
import InputNumber from '../components/InputNumber'
import Table, {
  TableHead,
  TableCell,
  TableBody,
  TableRow,
} from '../components/Table'

interface Payment {
  name: string
  amount: number
  code: string
  grid: string[][]
}

const Payments: React.FC = () => {
  const { generating, setGenerating, code, characters } = useGrid()
  const {
    data: payments,
    loading,
    create,
    refetch,
  } = useFetch<Payment[]>('api/payments')

  const [paymentName, setPaymentName] = React.useState('')
  const [amount, setAmount] = React.useState<number | undefined>()

  const savePayment = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const isValid = paymentName && amount && code && characters

    if (!isValid) return

    const paymentInput = {
      name: paymentName,
      amount,
      code,
      grid: characters,
    }

    await create(paymentInput)

    refetch()
    setPaymentName('')
    setAmount(undefined)
  }

  return (
    <>
      {!generating && (
        <Button
          label="Generate 2D Grid"
          onClick={() => setGenerating(true)}
          primary
        />
      )}

      {generating && <Code value={code} />}

      {loading && !payments && <Loading />}

      <Form onSubmit={savePayment}>
        <InputText
          label="Payment"
          value={paymentName}
          onChange={setPaymentName}
        />

        <InputNumber label="Amount" value={amount} onChange={setAmount} />

        <Button label="Add" />
      </Form>

      {Boolean(payments?.length) && (
        <Table>
          <TableHead>
            <tr>
              <TableCell as="th" colSpan={4} style={{ textAlign: 'left' }}>
                Name
              </TableCell>
              <TableCell as="th">Amount</TableCell>
              <TableCell as="th">Code</TableCell>
              <TableCell as="th">Grid</TableCell>
            </tr>
          </TableHead>

          <TableBody>
            {payments?.map((payment) => (
              <TableRow>
                <TableCell colSpan={4} style={{ textAlign: 'left' }}>
                  {payment.name}
                </TableCell>
                <TableCell>{payment.amount}</TableCell>
                <TableCell>{payment.code}</TableCell>
                <TableCell>
                  {payment.grid.flatMap((line) => line).length}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  )
}

export default Payments
