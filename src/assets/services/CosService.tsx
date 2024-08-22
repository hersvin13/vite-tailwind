const cos = [
  {
    document_no: 1001,
    cos_from: '07-30-2024',
    cos_to: '08-03-2024',
    requested_schedule: '07-22-2024',
    transaction_date: '07-22-2024',
    status: 'Filed',
  },
  {
    document_no: 1002,
    cos_from: '07-27-2024',
    cos_to: '08-10-2024',
    requested_schedule: '07-22-2024',
    transaction_date: '07-22-2024',
    status: 'Cancelled',
  },
  {
    document_no: 1003,
    cos_from: '07-22-2024',
    cos_to: '08-11-2024',
    requested_schedule: '07-22-2024',
    transaction_date: '07-22-2024',
    status: 'Approved',
  },
  {
    document_no: 1004,
    cos_from: '07-25-2024',
    cos_to: '08-15-2024',
    requested_schedule: '07-22-2024',
    transaction_date: '07-22-2024',
    status: 'Filed',
  },
  {
    document_no: 1005,
    cos_from: '07-28-2024',
    cos_to: '08-26-2024',
    requested_schedule: '07-22-2024',
    transaction_date: '07-22-2024',
    status: 'Approved',
  },
  {
    document_no: 1006,
    cos_from: '07-12-2024',
    cos_to: '08-12-2024',
    requested_schedule: '07-22-2024',
    transaction_date: '07-22-2024',
    status: 'Approved',
  },
  {
    document_no: 1007,
    cos_from: '07-15-2024',
    cos_to: '08-27-2024',
    requested_schedule: '07-22-2024',
    transaction_date: '07-22-2024',
    status: 'Cancelled',
  },
  {
    document_no: 1008,
    cos_from: '07-01-2024',
    cos_to: '08-01-2024',
    requested_schedule: '07-22-2024',
    transaction_date: '07-22-2024',
    status: 'Filed',
  },
  {
    document_no: 1009,
    cos_from: '07-27-2024',
    cos_to: '08-2-2024',
    requested_schedule: '07-22-2024',
    transaction_date: '07-22-2024',
    status: 'Approved',
  },
  {
    document_no: 1010,
    cos_from: '07-24-2024',
    cos_to: '08-22-2024',
    requested_schedule: '07-22-2024',
    transaction_date: '07-22-2024',
    status: 'Filed',
  },
]

export const CosService = {
  getCos() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(cos)
      }, 1000)
    })
  },
}
