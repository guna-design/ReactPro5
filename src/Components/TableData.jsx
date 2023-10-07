import React from 'react'

import Table from 'react-bootstrap/Table'

function TableData() {
  const tableData = [
    {
      invoiceId: "#AHGA68",
      date: "23/09/2022",
      customer: "Jacob Marcus",
      payableAmount: "$100",
      paidAmount: "$000",
      due: "$000",
    },
    {
      invoiceId: "#AHGA68",
      date: "23/09/2022",
      customer: "Jacob Marcus",
      payableAmount: "$100",
      paidAmount: "$000",
      due: "$000",
    },
    {
      invoiceId: "#AHGA68",
      date: "23/09/2022",
      customer: "Jacob Marcus",
      payableAmount: "$100",
      paidAmount: "$000",
      due: "$000",
    },
    {
      invoiceId: "#AHGA68",
      date: "23/09/2022",
      customer: "Jacob Marcus",
      payableAmount: "$100",
      paidAmount: "$000",
      due: "$000",
    },
    {
      invoiceId: "#AHGA68",
      date: "23/09/2022",
      customer: "Jacob Marcus",
      payableAmount: "$100",
      paidAmount: "$000",
      due: "$000",
    },
    {
      invoiceId: "#AHGA68",
      date: "23/09/2022",
      customer: "Jacob Marcus",
      payableAmount: "$100",
      paidAmount: "$000",
      due: "$000",
    },
    {
      invoiceId: "#AHGA68",
      date: "23/09/2022",
      customer: "Jacob Marcus",
      payableAmount: "$100",
      paidAmount: "$000",
      due: "$000",
    },
    {
      invoiceId: "#AHGA68",
      date: "23/09/2022",
      customer: "Jacob Marcus",
      payableAmount: "$100",
      paidAmount: "$000",
      due: "$000",
    },
    {
      invoiceId: "#AHGA68",
      date: "23/09/2022",
      customer: "Jacob Marcus",
      payableAmount: "$100",
      paidAmount: "$000",
      due: "$000",
    },
  ];


  return (
    <>

    <div  className='row mx-5 mt-5 bg-white border-spacing-3'style={{position:"relative",top:"5em"}}>
      <Table>
        <thead>
          <tr>
           <th className="p-3">Invoice Id</th>
           <th className="p-3">Date</th>
           <th className="p-3">Customer</th>
           <th className="p-3">Payable Amount</th>
           <th className="p-3">Paid Amount</th>
           <th className="p-3">Due</th>
          </tr>
        </thead>
        <tbody>
                    {tableData.map((e, i) => {
                      return (
                        <tr key={i}>
                          <td className="p-3">
                            <img src="/src/assets/images/minus-square.png" />
                          </td>
                          <td className="p-3"><a href='#' style={{textDecoration:'none'}}>{e.invoiceId}</a> </td>
                          <td className="p-3">{e.date}</td>
                          <td className="p-3">{e.customer}</td>
                          <td className="p-3">{e.payableAmount}</td>
                          <td className="p-3">{e.paidAmount}</td>
                          <td className="p-3">{e.due}</td>
                        </tr>
                      );
                     })} 
                  </tbody>
      </Table>
    </div>

   
    </>
  )
}

export default TableData