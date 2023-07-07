class FUA {
  formatFUA = undefined

  constructor() {}

  initData(data) {
    console.log(data)
    this.formatFUA = {
      content: [
        `NOMBRE DEL ASPIRANTE: ${data.applicantsName}`,
        `CURP: ${data.CURP}`,
        `CARRERA: ${data.careers}`,
        `ESCUELA: ${data.school}`,
        `NIVEL ACADEMICO: ${data.levelAcademic}`,
        `FOLIO UNICO DE ADMISION: ${data.singleAdmissionSheet}`,
        `FECHA LIMITE DE PAGO: ${data.paydayLimit}`,
        `TOTAL A PAGAR: ${data.totalPay}`,
        `Banco\n${data.banks[0].bank} Convenio: ${data.banks[0].agreement}\n${data.banks[1].bank} Convenio: ${data.banks[1].agreement}`,
        `Referencia bancaria\n${data.banks[0].reference}\n${data.banks[1].reference}`,
      ],
    }
  }

  printFUA() {
    const docDefinition = this.formatFUA

    const report = pdfMake.createPdf(docDefinition)
    report.getBuffer((buffer) => {
      var blob = new Blob([buffer], { type: 'application/pdf' })
      var url = window.URL.createObjectURL(blob)
      var iframe = document.createElement('iframe')
      iframe.src = url
      iframe.style.display = 'none'
      document.body.appendChild(iframe)
      iframe.contentWindow?.print()
    })
  }

  downloadFUA() {
    const docDefinition = this.formatFUA
    pdfMake.createPdf(docDefinition).download()
  }

  showFUA() {
    const docDefinition = this.formatFUA
    pdfMake.createPdf(docDefinition).getBuffer(function (buffer) {
      var blob = new Blob([buffer], { type: 'application/pdf' })
      var url = URL.createObjectURL(blob)

      var pdfContainer = document.getElementById('pdfContainer')
      pdfContainer.innerHTML =
        '<object data="' +
        url +
        '" type="application/pdf" width="100%" height="100%"></object>'
    })
  }
}
