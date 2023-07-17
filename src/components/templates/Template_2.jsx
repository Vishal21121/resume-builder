import React, { useEffect } from 'react'
import { Document, Page, View, Text, StyleSheet, Image } from "@react-pdf/renderer"

const Template_2 = ({ data }) => {
    return (
        <Document>
            <Page style={styles.page}>
                <View style={styles.container}>
                    {/* personal info */}
                    <View style={styles.containerELements}>
                        <View style={{ backgroundColor: "#5E6579", padding: "12px", borderRadius: "10px" }}>
                            <Text style={{ fontSize: "18px", color: "#dbd7d2", marginVertical: "2px" }}>{data.name}</Text>
                            <Text style={{ fontSize: "14px", color: "#ffa500", fontWeight: "bold", marginBottom: "10px" }}>{data.pos}</Text>
                            <Text style={{ fontSize: "10px", color: "white", fontWeight: "bold" }}>{data.tagLine}</Text>
                        </View>
                    </View>
                    {/* contact part */}
                    <View style={styles.containerELements} >
                        <View style={{
                            backgroundColor: "#fd9014", padding: "12px", borderRadius: "10px", position: 'absolute',
                            right: "0",
                            width: "100%"
                        }}>
                            <View style={styles.contactInnerContainer} >
                                <Image style={{ width: "30px", position: "relative", right: "0" }} src="https://img.icons8.com/fluency/48/mail.png" />
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
                    </View>

                    {/* work experience */}
                    <View style={styles.containerELements}>
                        <Text style={{ fontSize: "18px", color: "#004c9e", marginVertical: "4px" }}>WORK EXPERIENCE</Text>
                        <View style={styles.workElement}>
                            <Text style={{ color: "white", fontSize: "18px", marginVertical: "4px" }}>{data.position}</Text>
                            <Text style={{ color: "#c9cbd2", fontSize: "14px", marginVertical: "4px" }}>{data.comapny}</Text>
                            <Text style={{ color: "white", fontSize: "12px", marginVertical: "4px" }}>{data.duration}</Text>
                        </View>
                    </View>

                    {/* skills */}
                    <View style={styles.containerELements}>
                        <View style={styles.skills}>
                            <Text style={{ fontSize: "18px", color: "#262727", marginVertical: "10px" }}>Skills</Text>
                            <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", flexWrap:"wrap" }}>
                                {
                                    data.skill && data.skill.map((el) => (
                                        <View style={styles.skillButton}>
                                            <Text style={styles.skillButtonText}>{el}</Text>
                                        </View>
                                    ))
                                }
                            </View>
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    )
}

const styles = StyleSheet.create({
    page: {
        width: "100%",
    },
    container: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: "10px"
    },
    containerELements: {
        marginHorizontal: "2px",
        marginBottom: "40px",
        width: "48%",
        // height:"100px"
    },
    contactInnerContainer: {
        display: "flex",
        flexDirection: "row",
        marginVertical: "4px"
    },
    contactText: {
        fontSize: "10px",
        color: "black",
        marginTop: "8px",
        marginHorizontal: "8px",
    },
    workElement: {
        backgroundColor: "#5b5b5b",
        padding: "10px",
        borderRadius: "10px"
    },
    skills: {
        backgroundColor: "#EBEBEB",
        marginVertical: "100px",
        borderRadius: "10px",
        padding: "8px"
    },
    skillButton: {
        backgroundColor: "#002D62",
        padding: "10px",
        borderRadius: "10px",
        marginVertical:"4px"
    },
    skillButtonText: {
        color: "white",
        fontSize: "12px",
        width: "auto"
    }

})

export default Template_2