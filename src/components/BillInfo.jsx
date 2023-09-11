import React from 'react';
import '../App.css';
import { Container, Currency, CurrentMonth, Text } from './styles.js'; 

export default function BillInfo({data}) {
  const today = new Date()

  const thisMonth = today.toLocaleString("default", {month: "long"})

  return (
    <Container>
      <Text>Fatura <CurrentMonth>{thisMonth}</CurrentMonth></Text>
      <Currency>R$ {data.bills[0].value}</Currency>
    </Container>
  );
}
