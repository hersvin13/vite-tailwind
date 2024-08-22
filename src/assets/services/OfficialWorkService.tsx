const officialworks = [
  {
    document_no: 1000,
    official_work_date: '07/05/2024 - 07/05/2024',
    official_work_time: '09:00:00 AM - 05:00:00 PM',
    location: 'Philippines',
    transaction_date: '07/12/2024',
    status: 'Cancelled',
  },
  {
    document_no: 1001,
    official_work_date: '07/05/2024 - 07/05/2024',
    official_work_time: '09:00:00 AM - 05:00:00 PM',
    location: 'Philippines',
    transaction_date: '07/12/2024',
    status: 'Approved',
  },
  {
    document_no: 1002,
    official_work_date: '07/05/2024 - 07/05/2024',
    official_work_time: '09:00:00 AM - 05:00:00 PM',
    location: 'Philippines',
    transaction_date: '07/10/2024',
    status: 'Cancelled',
  },
  {
    document_no: 1003,
    official_work_date: '07/05/2024 - 07/05/2024',
    official_work_time: '09:00:00 AM - 05:00:00 PM',
    location: 'Philippines',
    transaction_date: '07/12/2024',
    status: 'Approved',
  },
  {
    document_no: 1004,
    official_work_date: '07/05/2024 - 07/05/2024',
    official_work_time: '09:00:00 AM - 05:00:00 PM',
    location: 'Philippines',
    transaction_date: '07/25/2024',
    status: 'Cancelled',
  },
  {
    document_no: 1005,
    official_work_date: '07/05/2024 - 07/05/2024',
    official_work_time: '09:00:00 AM - 05:00:00 PM',
    location: 'Philippines',
    transaction_date: '07/15/2024',
    status: 'Approved',
  },
  {
    document_no: 1006,
    official_work_date: '07/05/2024 - 07/05/2024',
    official_work_time: '09:00:00 AM - 05:00:00 PM',
    location: 'Philippines',
    transaction_date: '07/14/2024',
    status: 'Pending',
  },
  {
    document_no: 1007,
    official_work_date: '07/05/2024 - 07/05/2024',
    official_work_time: '09:00:00 AM - 05:00:00 PM',
    location: 'Philippines',
    transaction_date: '07/12/2024',
    status: 'Approved',
  },
  {
    document_no: 1008,
    official_work_date: '07/05/2024 - 07/05/2024',
    official_work_time: '09:00:00 AM - 05:00:00 PM',
    location: 'Philippines',
    transaction_date: '07/24/2024',
    status: 'Pending',
  },
  {
    document_no: 1009,
    official_work_date: '07/05/2024 - 07/05/2024',
    official_work_time: '09:00:00 AM - 05:00:00 PM',
    location: 'Philippines',
    transaction_date: '07/21/2024',
    status: 'Approved',
  },
]

export const OfficialWorkService = {
  getOfficialWork() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(officialworks)
      }, 1000)
    })
  },
}
