const offsets = [
  {
    document_no: 1000,
    schedule: 'SCHEDULE001',
    offset_date: '07/25/2024',
    offset_hours: '05:00:00 PM - 10:00:00 PM',
    transaction_date: '07/04/2024',
    status: 'Approved',
  },
  {
    document_no: 1001,
    schedule: 'SCHEDULE002',
    offset_date: '07/22/2024',
    offset_hours: '05:00:00 PM - 10:00:00 PM',
    transaction_date: '07/01/2024',
    status: 'Cancelled',
  },
  {
    document_no: 1002,
    schedule: 'SCHEDULE003',
    offset_date: '07/21/2024',
    offset_hours: '05:00:00 PM - 10:00:00 PM',
    transaction_date: '07/11/2024',
    status: 'Pending',
  },
  {
    document_no: 1003,
    schedule: 'SCHEDULE004',
    offset_date: '07/12/2024',
    offset_hours: '05:00:00 PM - 10:00:00 PM',
    transaction_date: '07/14/2024',
    status: 'Cancelled',
  },
  {
    document_no: 1004,
    schedule: 'SCHEDULE005',
    offset_date: '07/15/2024',
    offset_hours: '05:00:00 PM - 10:00:00 PM',
    transaction_date: '07/12/2024',
    status: 'Approved',
  },
  {
    document_no: 1005,
    schedule: 'SCHEDULE006',
    offset_date: '07/25/2024',
    offset_hours: '05:00:00 PM - 10:00:00 PM',
    transaction_date: '07/16/2024',
    status: 'Approved',
  },
  {
    document_no: 1006,
    schedule: 'SCHEDULE007',
    offset_date: '07/27/2024',
    offset_hours: '05:00:00 PM - 10:00:00 PM',
    transaction_date: '07/12/2024',
    status: 'Pending',
  },
  {
    document_no: 1008,
    schedule: 'SCHEDULE008',
    offset_date: '07/27/2024',
    offset_hours: '05:00:00 PM - 10:00:00 PM',
    transaction_date: '07/12/2024',
    status: 'Cancelled',
  },
  {
    document_no: 1009,
    schedule: 'SCHEDULE009',
    offset_date: '07/28/2024',
    offset_hours: '05:00:00 PM - 10:00:00 PM',
    transaction_date: '07/20/2024',
    status: 'Approved',
  },
]

export const offSetsServices = {
  getOffset() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(offsets)
      }, 1000)
    })
  },
}
