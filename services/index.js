class Service {
  data = undefined

  constructor() {
    this.data = {
        applicantsName: 'Axel Calvo Alavez',
        CURP: 'CXCA021124MOCLRRAS',
        levelAcademic: 'LICENCIATURAS',
        careers: 'LICENCIATURA EN GASTRONOMIA',
        school: 'ESCUELA DE GASTROMOIA',
        paydayLimit: '12/08/2023',
        schoolCycle: '2023-2024',
        singleAdmissionSheet: '11047',
        totalPay: 350,
        banks: [
          {
            bank: 'Scotiabank',
            agreement: 3741,
            reference: '43262542342624642654635663546345545356',
          },
          {
            bank: 'Santander',
            agreement: 1236,
            reference: '56867868657834535223557589223402335354',
          }
        ],
      }
  }

  getData() {
    return this.data
  }
}
