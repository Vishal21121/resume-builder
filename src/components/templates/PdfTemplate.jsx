import React, { useEffect } from 'react'
import { Document, Page, View, Text, StyleSheet, Image } from "@react-pdf/renderer"

const PdfTemplate = ({ data }) => {

  function protectDataLoss(e) {
    e.preventDefault()
    return alert("Do you want to reload this page doing this will lead to removal of all the data")
  }

  useEffect(() => {
    window.addEventListener('beforeunload', protectDataLoss);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('beforeunload', protectDataLoss);
    };
  }, [])

  return (
    <Document>
      <Page size="A4" style={styles.page}>

        {/* header */}
        <View style={styles.headerEl}>
          <Text style={{ color: "#00308F", fontWeight: "extrabold", fontSize: "24px" }}>{data.name}</Text>
        </View>
        <View style={styles.headerEl} >
          <Text style={{ color: "#A3C1AD", fontSize: "12px" }}>{data.pos}</Text>
        </View>
        <View style={styles.headerEl}>
          <Text style={{ color: "black", fontSize: "10px" }}>{data.tagLine}</Text>
        </View>
        <View style={styles.lineBreak}>
        </View>

        {/* contact part */}
        <View style={styles.contactContainer}>
          <View style={styles.contactInnerContainer}>
            <Image style={{ width: "30px" }} src="https://img.icons8.com/fluency/48/mail.png" />
            <Text style={styles.contactText}>{data.email}</Text>
          </View>
          <View style={styles.contactInnerContainer}>
            <Image style={{ width: "30px" }} src="https://img.icons8.com/ios-glyphs/30/smartphone--v1.png" />
            <Text style={styles.contactText}>{data.number}</Text>
          </View>
          <View style={styles.contactInnerContainer}>
            <Image style={{ width: "30px" }} src="https://img.icons8.com/ios-filled/50/github.png" />
            <Text style={styles.contactText}>{data.gitId}</Text>
          </View>
          <View style={styles.contactInnerContainer}>
            <Image style={{ width: "30px" }} src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" />
            <Text style={styles.contactText}>{data.LinId}</Text>
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
                <View style={styles.skillButton}>
                  <Text style={styles.skillButtonText}>{el}</Text>
                </View>
              ))
            }
          </View>
        </View>

        {/* Work Experience */}

        <View style={styles.headerEl}>
          <Text style={{ fontSize: "15px", color: "#00308F", marginVertical: "10px" }}>WORK EXPERIENCE</Text>
          <Text>{data.position}</Text>
          <Text>{data.company}</Text>
          <Text>{data.duration}</Text>
        </View>

        {/* Education */}
        <View style={styles.headerEl}>
          <Text style={{ fontSize: "15px", color: "#00308F", marginVertical: "10px" }}>EDUCATION</Text>
          <Text style={{ color: "black", fontWeight: "extrabold", fontSize: "14px", marginVertical: "4px" }}>{data.degree}</Text>
          <Text style={{ color: "black", fontSize: "14px", marginVertical: "4px" }}>{data.university}</Text>
          <Text style={{ color: "gray", fontSize: "12px", marginVertical: "4px" }}>{data.edduration}</Text>
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
  headerEl: {
    marginVertical: "2px",
    marginHorizontal: "20px"
  },
  lineBreak: {
    border: "1px solid #00308F",
    marginTop: "15px"
  },
  contactContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: "10px"
  },
  contactInnerContainer: {
    display: "flex",
    flexDirection: "row"
  },
  contactText: {
    fontSize: "10px",
    color: "#00308F",
    marginTop: "8px",
    marginHorizontal: "2px"
  },
  skillButton: {
    backgroundColor: "#002D62",
    padding: "10px",
    borderRadius: "10px"
  },
  skillButtonText: {
    color: "white",
    fontSize: "12px",
    width: "auto"
  }
})

export default PdfTemplate