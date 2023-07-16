import React from 'react'
import { Document, Page, View, Text, StyleSheet, Image } from "@react-pdf/renderer"
import { Mail } from "react-feather"

const PdfTemplate = ({ data }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={{ marginVertical: "2px", marginHorizontal: "20px" }}>
          <Text style={{ color: "#00308F", fontWeight: "extrabold", fontSize: "24px" }}>{data.name}</Text>
        </View>
        <View style={{ marginVertical: "2px", marginHorizontal: "20px" }} >
          <Text style={{ color: "#A3C1AD", fontSize: "12px" }}>{data.pos}</Text>
        </View>
        <View style={{ marginVertical: "2px", marginHorizontal: "20px" }}>
          <Text style={{ color: "black", fontSize: "10px" }}>{data.tagLine}</Text>
        </View>
        <View style={{ border: "1px solid #00308F", marginTop: "15px" }}>
        </View>
        <View>
              <Image src="./assets/mail.svg"/>
        </View>
      </Page>
    </Document>
  )
}

const styles = StyleSheet.create({
  page: {
    paddingTop: 35,
    paddingBottom: 65,
    width: "100%"
  }
})

export default PdfTemplate