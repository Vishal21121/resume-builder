import React from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import PdfTemplate from '../components/templates/PdfTemplate'
import Template_2 from '../components/templates/Template_2'

const PdfView = ({data}) => {
  return (
    <PDFViewer className='w-screen h-screen'>
        <Template_2 data={data}/>
    </PDFViewer>
  )
}

export default PdfView