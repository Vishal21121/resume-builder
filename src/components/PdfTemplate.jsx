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
        {/* contact part */}
        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", marginVertical: "10px" }}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Image style={{ width: "30px" }} src="https://img.icons8.com/fluency/48/mail.png" />
            <Text style={{ fontSize: "10px", color: "#00308F", marginTop: "8px", marginHorizontal: "2px" }}>{data.email}</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Image style={{ width: "30px" }} src="https://img.icons8.com/ios-glyphs/30/smartphone--v1.png" />
            <Text style={{ fontSize: "10px", color: "#00308F", marginTop: "8px", marginHorizontal: "2px" }}>{data.number}</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Image style={{ width: "30px" }} src="https://img.icons8.com/ios-filled/50/github.png" />
            <Text style={{ fontSize: "10px", color: "#00308F", marginTop: "8px", marginHorizontal: "2px" }}>{data.gitId}</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Image style={{ width: "30px" }} src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" />
            <Text style={{ fontSize: "10px", color: "#00308F", marginTop: "8px", marginHorizontal: "2px" }}>{data.LinId}</Text>
          </View>
        </View>
        <View style={{ border: "1px solid #00308F" }}>
        </View>
        {/* Skill */}
        <View style={{ marginHorizontal: "20px", marginVertical: "10px" }}>
          <Text style={{ fontSize: "16px", color: "#00308F", marginVertical: "10px" }}>SKILLS</Text>
          <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
            {
              data.skill && data.skill.map((el) => (
                <View key={coyn} style={{ backgroundColor: "#002D62", padding: "10px", borderRadius: "10px" }}>
                  <Text style={{ color: "white", fontSize: "12px", width: "auto" }}>{el}</Text>
                </View>
              ))
            }
          </View>
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
  },
})

export default PdfTemplate