import React from 'react';
import '../App.css';
import { Container, Currency, CurrentMonth, Name, BarCodeCopy, Text} from './styles.js';

export default function BillPayment({handleClick, data}) {
  const today = new Date()

  const thisMonth = today.toLocaleString("default", {month: "long"})

  let sumBills = 0;

  data.bills.forEach(bill => {sumBills += parseFloat(bill.value)})

  return (
    <Container>
      <Name>
        {data.bills.length === 1 ? (
          <>Pagar a fatura de <CurrentMonth>{thisMonth}</CurrentMonth>?</>
        ) : (
          <>Pagar todas as faturas em aberto?</>
        )}
      </Name>
      
      <Text>Valor{data.bills.length > 1 ? " total" : ""}:</Text>
      <Currency>R$ {sumBills.toFixed(2)}</Currency>
      <BarCodeCopy onClick={handleClick}>Copiar código de barras</BarCodeCopy>
    </Container>
  );
}
