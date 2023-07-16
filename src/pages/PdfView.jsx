import React from 'react'
import { PDFViewer } from '@react-pdf/renderer'
import PdfTemplate from '../components/PdfTemplate'

const PdfView = ({data}) => {
  return (
    <PDFViewer className='w-screen h-screen'>
        <PdfTemplate data={data}/>
    </PDFViewer>
  )
}

export default PdfView