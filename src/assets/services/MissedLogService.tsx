const missedlogs = [
  {
    document_no: 1001,
    missed_log_date: '07/21/2024',
    log_type: 'Time In',
    log_time: '08:00:00 AM',
    transaction_date: '07/10/2024',
    status: 'Approved',
  },
  {
    document_no: 1002,
    missed_log_date: '07/19/2024',
    log_type: 'Time Out',
    log_time: '06:00:00 PM',
    transaction_date: '07/09/2024',
    status: 'Pending',
  },
  {
    document_no: 1003,
    missed_log_date: '07/18/2024',
    log_type: 'Time In',
    log_time: '08:00:00 AM',
    transaction_date: '07/08/2024',
    status: 'Approved',
  },
  {
    document_no: 1004,
    missed_log_date: '07/16/2024',
    log_type: 'Time In',
    log_time: '08:00:00 AM',
    transaction_date: '07/07/2024',
    status: 'Pending',
  },
  {
    document_no: 1005,
    missed_log_date: '07/17/2024',
    log_type: 'Time Out',
    log_time: '06:00:00 PM',
    transaction_date: '07/06/2024',
    status: 'Approved',
  },
  {
    document_no: 1006,
    missed_log_date: '07/14/2024',
    log_type: 'Time Out',
    log_time: '06:00:00 PM',
    transaction_date: '07/05/2024',
    status: 'Pending',
  },
  {
    document_no: 1007,
    missed_log_date: '07/15/2024',
    log_type: 'Time In',
    log_time: '08:00:00 AM',
    transaction_date: '07/04/2024',
    status: 'Approved',
  },
  {
    document_no: 1008,
    missed_log_date: '07/13/2024',
    log_type: 'Time Out',
    log_time: '06:00:00 PM',
    transaction_date: '07/03/2024',
    status: 'Cancelled',
  },
  {
    document_no: 1009,
    missed_log_date: '07/12/2024',
    log_type: 'Time Out',
    log_time: '06:00:00 PM',
    transaction_date: '07/02/2024',
    status: 'Cancelled',
  },
  {
    document_no: 1010,
    missed_log_date: '07/11/2024',
    log_type: 'Time In',
    log_time: '08:00:00 AM',
    transaction_date: '07/01/2024',
    status: 'Cancelled',
  },
]

export const missedLogServices = {
  getMissedLog() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(missedlogs)
      }, 1000)
    })
  },
}
