

export const getTotals = (subTotal: number, tax: number) => {


  const taxTotal = subTotal * tax
  const total = subTotal + taxTotal


  return {
    taxTotal,
    total
  }

}