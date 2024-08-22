const customers = [
  {
    id: 1000,
    name: 'John Doe',
    country: { code: 'us', name: 'USA' },
    representative: { name: 'Amy Elsner', image: 'amyelsner.png' },
    status: 'qualified',
    verified: true,
  },
  {
    id: 1001,
    name: 'Jane Smith',
    country: { code: 'ca', name: 'Canada' },
    representative: { name: 'Anna Fali', image: 'annafali.png' },
    status: 'new',
    verified: false,
  },
  {
    id: 1002,
    name: 'Vin Dela Cruz',
    country: { code: 'ph', name: 'Phillipines' },
    representative: { name: 'Bernardo Dominic', image: 'bernardodominic.png' },
    status: 'qualified',
    verified: false,
  },
  {
    id: 1003,
    name: 'Asiya Javayant',
    country: { code: 'au', name: 'Australia' },
    representative: { name: 'Mike Brown', image: 'asiyajavayant.png' },
    status: 'new',
    verified: true,
  },
  {
    id: 1004,
    name: 'Bernardo Dominic',
    country: { code: 'cn', name: 'China' },
    representative: { name: 'Emily Chen', image: 'bernardodominic.png' },
    status: 'qualified',
    verified: false,
  },
  {
    id: 1005,
    name: 'Elwin Sharvill',
    country: { code: 'kr', name: 'South Korea' },
    representative: { name: 'David Lee', image: 'elwinsharvill.png' },
    status: 'new',
    verified: true,
  },
  {
    id: 1006,
    name: 'Ioni Bowcher',
    country: { code: 'in', name: 'India' },
    representative: { name: 'Sophia Patel', image: 'ionibowcher.png' },
    status: 'qualified',
    verified: false,
  },
  {
    id: 1007,
    name: 'Ivan Magalhaes',
    country: { code: 'jp', name: 'Japan' },
    representative: { name: 'Olivia Kim', image: 'ivanmagalhaes.png' },
    status: 'new',
    verified: true,
  },
  {
    id: 1008,
    name: 'Onyama Limba',
    country: { code: 'sg', name: 'Singapore' },
    representative: { name: 'Liam Wong', image: 'onyamalimba.png' },
    status: 'qualified',
    verified: false,
  },
  {
    id: 1009,
    name: 'Stephen Shaw',
    country: { code: 'mx', name: 'Mexico' },
    representative: { name: 'Isabella Garcia', image: 'stephenshaw.png' },
    status: 'new',
    verified: true,
  },
  {
    id: 1010,
    name: 'Xuxue Feng',
    country: { code: 'uk', name: 'United Kingdom' },
    representative: { name: 'Alexander Hall', image: 'xuxuefeng.png' },
    status: 'qualified',
    verified: false,
  },
]
export const CustomerService = {
  getCustomersMedium() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(customers)
      }, 1000)
    })
  },
}
