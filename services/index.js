class Service {
  data = undefined

  constructor() {
    var banksOrigin = [
      {
        bank: 'Scotiabank',
        agreement: 3741,
        reference: '43262542342624642654635663546345545356',
      },
      {},
      {
        bank: 'Santander',
        agreement: 1236,
        reference: '56867868657834535223557589223402335354',
      },
      {}
    ]


    this.data = {
        applicantsName: 'Axel Calvo Alavez',
        CURP: 'CXCA021124MOCLRRAS',
        levelAcademic: 'LICENCIATURAS',
        careers: 'LICENCIATURA EN GASTRONOMIA',
        school: 'ESCUELA DE GASTRONOMIA',
        paydayLimit: '12/08/2023',
        schoolCycle: '2023-2024',
        singleAdmissionSheet: '11047',
        totalPay: 350,
        banks: banksOrigin,
        qr: 'ZBF48E4EBR519Q38X3NC4GZSTME40D9M2L5L6G7QEDWOEYCDJ4SDVN3TYT9V03SS200002282142099SE0EDAMG7AYCGJ0IEC5CR6IW'
      }
  }

  getData() {
    return this.data
  }
}
