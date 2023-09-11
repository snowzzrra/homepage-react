import React from 'react';
import '../App.css';
import { Container, Name, PaymentButton, BillWarning } from './styles.js';
import BillInfo from './BillInfo';

export default function BillContainer({handleClick, data}) {
  let message = ""

  if (data.bills.length > 1){
    message = <div>
                <strong>Você possui {data.bills.length} faturas em aberto.</strong> 
                <br/> 
                Clique em <strong>Pagar faturas</strong> para regularizar sua situação...
              </div>
  } else if (data.bills.length === 0){
    message = <div>
                Você não possui nenhuma fatura em aberto. 
                <br/> 
                <strong>Suas contas estão todas em dia, parabéns!</strong>
              </div>
  }

  return (
    <Container>
      <Name>Olá, {data.name}!</Name>
      {data.bills.length === 1 ? (
        <BillInfo data={data}/>
      ) : (
        <BillWarning>
          {message}
        </BillWarning>
      )}

      {data.bills.length ? (
        <PaymentButton onClick={handleClick}>
          {data.bills.length === 1 ? "Pagar fatura" : "Pagar faturas"}
        </PaymentButton>
      ) : (
        ""
      )}
    </Container>
  );
}
