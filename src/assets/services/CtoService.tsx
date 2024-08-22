const cto = [
  {
    document_no: 1001,
    leave_type: 'CTO',
    leave_from: '07/20/2024',
    leave_to: '07/20/2024',
    transaction_date: '07/15/2024',
    status: 'Accepted',
  },
  {
    document_no: 1002,
    leave_type: 'CTO',
    leave_from: '07/20/2024',
    leave_to: '07/20/2024',
    transaction_date: '07/15/2024',
    status: 'Cancelled',
  },
  {
    document_no: 1003,
    leave_type: 'CTO',
    leave_from: '07/20/2024',
    leave_to: '07/20/2024',
    transaction_date: '07/15/2024',
    status: 'Pending',
  },
  {
    document_no: 1004,
    leave_type: 'CTO',
    leave_from: '07/20/2024',
    leave_to: '07/20/2024',
    transaction_date: '07/15/2024',
    status: 'Accepted',
  },
  {
    document_no: 1005,
    leave_type: 'CTO',
    leave_from: '07/20/2024',
    leave_to: '07/20/2024',
    transaction_date: '07/15/2024',
    status: 'Cancelled',
  },
  {
    document_no: 1006,
    leave_type: 'CTO',
    leave_from: '07/20/2024',
    leave_to: '07/20/2024',
    transaction_date: '07/15/2024',
    status: 'Accepted',
  },
  {
    document_no: 1007,
    leave_type: 'CTO',
    leave_from: '07/20/2024',
    leave_to: '07/20/2024',
    transaction_date: '07/15/2024',
    status: 'Pending',
  },
  {
    document_no: 1008,
    leave_type: 'CTO',
    leave_from: '07/20/2024',
    leave_to: '07/20/2024',
    transaction_date: '07/15/2024',
    status: 'Accepted',
  },
  {
    document_no: 1009,
    leave_type: 'CTO',
    leave_from: '07/20/2024',
    leave_to: '07/20/2024',
    transaction_date: '07/15/2024',
    status: 'Cancelled',
  },
  {
    document_no: 1010,
    leave_type: 'CTO',
    leave_from: '07/20/2024',
    leave_to: '07/20/2024',
    transaction_date: '07/15/2024',
    status: 'Accepted',
  },
]

export const CtoService = {
  getCto() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(cto)
      }, 1000)
    })
  },
}
