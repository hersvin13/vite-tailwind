const timeOffs = [
  {
    document_no: 1001,
    leave_type: 'Sick Leave',
    leave_from: '07-26-2024',
    leave_to: '07-26-2024',
    transaction_date: '07-25-2024',
    status: 'Filed',
    parent_data: {
      employee_name: 'John Doe',
      employee_id: 'E001',
      department: 'HR',
    },
    leave_details: [
      {
        date: '07-26-2024',
        hours: 8,
        leave_status: 'Approved',
      },
    ],
  },
  {
    document_no: 1002,
    leave_type: 'Vacation Leave',
    leave_from: '08-01-2024',
    leave_to: '08-05-2024',
    transaction_date: '07-25-2024',
    status: 'Filed',
    parent_data: {
      employee_name: 'Jane Smith',
      employee_id: 'E002',
      department: 'Marketing',
    },
    leave_details: [
      {
        sub_document_no: '',
        date: '08-01-2024',
        hours: 8,
        leave_status: 'Approved',
      },
      {
        sub_document_no: '',
        date: '08-02-2024',
        hours: 8,
        leave_status: 'Approved',
      },
      {
        sub_document_no: '',
        date: '08-03-2024',
        hours: 8,
        leave_status: 'Approved',
      },
      {
        sub_document_no: '',
        date: '08-04-2024',
        hours: 8,
        leave_status: 'Approved',
      },
      {
        sub_document_no: '',
        date: '08-05-2024',
        hours: 8,
        leave_status: 'Approved',
      },
    ],
  },
]

export const TimeOffService = {
  getTimeOff() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(timeOffs)
      }, 1000)
    })
  },
}
