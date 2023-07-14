import React from 'react'
import { Document, Page, View, Text } from "@react-pdf/renderer"

const PdfTemplate = ({data}) => {
  return (
    <Document>
        <Page>
            <View>
                <Text>{data.name}</Text>
            </View>
        </Page>
    </Document>
  )
}

export default PdfTemplate