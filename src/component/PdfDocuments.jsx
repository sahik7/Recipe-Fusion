import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    display: "block"
  },
  text: {
    margin:12,
    fontSize: 12,
    textAlign: 'center',
  },
  section: {
    margin: 10,
    padding: 10,
    paddingLeft: 40,
    paddingRight: 40,
    flexGrow: 1
  }
});

const PdfDocuments = () => {
    return (
        <Document>
    <Page size="A4" style={styles.page}>
    <View style={styles.section}>
        <Text style={styles.title}>Tell us the differences between uncontrolled and controlled components?</Text>
        <Text style={styles.text}>Controlled component and Uncontrolled component refers to those components which are handling the events. So in Uncontrolled components the forms element data is handed or controlled by the dom. Whereas in the controlled components the component state is used for controlling the value of the form field.</Text>
      </View>
    <View style={styles.section}>
        <Text style={styles.title}>How to validate React props using PropTypes?</Text>
        <Text style={styles.text}>Firstly We have to import PropTypes from 'prop-types';
                then to check the props value we have to write the code down below.
                    <pre>
                        <code>
                            Test.propTypes = &#123; age: PropTypes.string &#125;
                        </code>
                    </pre>
                    like this we can check whether the props is a string or not.</Text>
      </View>
    <View style={styles.section}>
        <Text style={styles.title}>What is the difference between nodejs and express js ?</Text>
        <Text style={styles.text}>Nodejs is a javascript runtime built on the V8 JavaScript. It helps a developer to run the code on the server side. On the other hand  Express.js builds on top of Node.js to provide a web framework. Express.js handle the  HTTP requests and responses very efficiently. Nodejs provide low-level APIs to handle HTTP requests and responses which is not very efficient.</Text>
      </View>
    <View style={styles.section}>
        <Text style={styles.title}>What is a custom hook, and why will you create a custom hook?</Text>
        <Text style={styles.text}>React provides a developer with custom hooks which enables to create a custom functionality for developer to use it across multiple components. It helps developer to avoid duplicating code.If developer want to fetch data from an API in multiple components an custom hook can be a better option. A developer can also utilize this feature to manage form state.</Text>
      </View>
    </Page>
  </Document>
    );
};

export default PdfDocuments;