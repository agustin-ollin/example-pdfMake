class FUA {
  formatFUA = undefined

  constructor() {}

  initData(data, sep) {
    console.log(data)
    /*this.formatFUA = {
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
    }*/
    
    this.formatFUA = {
      content: [
        {
          alignment: 'center',
          stack: [
            { text: 'Ficha de Admisión', style: 'titulo' },
            { text: 'Orden de Pago (FUA)', style: 'subtitulo' },
          ],
        },

        {
          margin: [0, 0, 0, 0],
          style: 'table',
          table: {
            widths: ['*', '*', '*'],
            body: [
              [
                {
                  image: sep,
                  fit: [100, 100],
                  border: [true, true, false, false],
                },

                {
                  border: [false, true, false, false],
                  alignment: 'center',
                  stack: [
                    {
                      text:
                        'Universidad Autónoma "Benito Júarez" de Oaxaca\nSecretaría de Finanzas',
                      style: 'normal',
                    },
                    {
                      text:
                        'Av. Universidad s/n. Ex-Hacienda de Cinco Señores\nTel. 951-5163492',
                      style: 'normal',
                    },
                    { text: 'CICLO ESCOLAR', style: 'titulo' },
                  ],
                },

                {
                  border: [false, true, true, false],
                  stack: [
                    {
                      text: `FOLIO UNICO \nDE ADMISION: ${data.singleAdmissionSheet}`,
                      style: 'titulo',
                      alignment: 'center',
                    },
                    {
                      qr: data.qr,
                      fit: 100,
                      alignment: 'center',
                    },
                  ],
                },
              ],
              [
                {
                  colSpan: 3,
                  text: `FECHA LIMITE DE PAGO: ${data.paydayLimit}`,
                  style: 'subtitulo',
                  alignment: 'left',
                  border: [true, false, true, false],
                },
              ],
              [
                {
                  colSpan: 3,
                  text: `NOMBRE DEL ASPIRANTE: ${data.applicantsName}`,
                  style: 'normal',
                  border: [true, true, true, false],
                },
              ],
              [
                {
                  colSpan: 1,
                  text: `CURP: ${data.CURP}`,
                  style: 'normal',
                  border: [true, false, false, false],
                },

                {
                  text: `NIVEL ACADEMICO: ${data.levelAcademic}`,
                  style: 'normal',
                  border: [false, false, false, false],
                },
                { text: '', border: [false, false, true, false] },
              ],
              [
                {
                  colSpan: 3,
                  text: `CARRERA: ${data.careers}`,
                  style: 'normal',
                  border: [true, false, true, false],
                },
              ],
              [
                {
                  colSpan: 3,
                  text: `ESCUELA: ${data.school}`,
                  style: 'normal',
                  border: [true, false, true, true],
                },
              ],
              [
                { text: '', border: [true, false, false, false] },
                {
                  text: 'Concepto',
                  style: 'tituloF_pago',
                  alignment: 'right',
                  border: [false, false, false, false],
                },
                {
                  text: 'Importe ($)',
                  style: 'tituloF_pago',
                  alignment: 'right',
                  border: [false, false, true, false],
                },
              ],
              [
                { text: '', border: [true, false, false, false] },
                {
                  text: 'ficha nuevo ingreso',
                  style: 'normal',
                  alignment: 'right',
                  border: [false, false, false, false],
                },
                {
                  text: '350.00',
                  style: 'normal',
                  alignment: 'right',
                  border: [false, false, true, false],
                },
              ],
              [
                { text: '', border: [true, false, false, false] },
                {
                  text: `TOTAL A PAGAR: ${data.totalPay}`,
                  style: 'tituloF_pago',
                  alignment: 'right',
                  border: [false, false, false, false],
                },
                {
                  text: '$350.0',
                  style: 'tituloF_pago',
                  alignment: 'right',
                  border: [false, false, true, false],
                },
              ],
              [
                {
                  colSpan: 3,
                  text:
                    'Puede realizar su pago en cualquiera de las entidades bancarias',
                  style: 'normal',
                  border: [true, true, true, false],
                  alignment: 'center',
                },
              ],
              [
                {
                  colSpan: 3,
                  text: 'Pagos via ventanilla',
                  style: 'subtitulo',
                  border: [true, false, true, false],
                  alignment: 'center',
                },
              ],
            ],
          },
        },
        {
          margin: [0, 0, 0, 0],
          style: 'table',
          table: {
            widths: ['50%', '50%'],
            body: [
              [
                { text: 'Banco', style: 'tituloF_pago', alignment: 'center' },
                {
                  text: 'Referencia bancaria',
                  style: 'tituloF_pago',
                  alignment: 'center',
                },
              ],
              ...data.banks
                .filter((bank) => bank.agreement)
                .map((bank, index) => [
                  {
                    stack: [
                      {
                        image: sep,
                        fit: [100, 100],
                      },
                      {
                        text: `Convenio ${bank.agreement}`,
                        style: 'normal',
                        alignment: 'center',
                      },
                    ],
                  },
                  { text: `${bank.reference}`, style: 'contenido' },
                ]),
            ],
          },
        },
        {
          margin: [0, 0, 0, 0],
          style: 'table',
          table: {
            widths: ['*', '*', '*'],
            body: [
              [
                {
                  colSpan: 3,
                  stack: [
                    {
                      ul: [
                        'Esta ficha es personal e intransferible, avala &uacute;nicamente el pago realizado por el concepto indicado en la misma.',
                        'No puede ser reutilizada, y su cobro por parte del banco avala &uacutenicamente el indicado en ella.',
                        'Si se realiza m&aacute;s de un pago con esta ficha, solo se tomar&aacute; en cuenta uno de ellos y no habr&aacute; reembolso para los dem&aacute;s pagos. ',
                        'Conserva esta orden de pago, es &uacute;til para continuar con el registro y futuras aclaraciones.',
                        ' Efectuado el pago no se har&aacute; ninguna devoluci&oacute;n. es responsabilidad del interesado realizar correctamente el registro y concluirlo seg&uacute;n las fechas establecidas.',
                      ],
                      style: 'normal',
                    },
                  ],
                  border: [true, false, true, true],
                },
              ],
            ],
          },
        },
        {},
        {
          columns: [
            {
              text: '',
              width: '50%',
            },
            {
              text: '',
              width: '50%',
            },
          ],
        },
      ],
      styles: {
        titulo: {
          fontSize: 14,
          bold: true,
          margin: [0, 0, 0, 8],
        },
        subtitulo: {
          fontSize: 12,
          bold: true,
          margin: [0, 0, 0, 8],
        },
        normal: {
          fontSize: 10,
          margin: [0, 0, 0, 4],
        },
        table: {
          margin: [0, 8, 0, 8],
        },
        tituloF_pago: {
          fontSize: 10,
          bold: true,
        },
        contenido: {
          fontSize: 10,
        },
      },
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
