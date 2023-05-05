import React from 'react';
import { Page, Text, Document, StyleSheet } from '@react-pdf/renderer';


const styles = StyleSheet.create({
    body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
      fontFamily: 'Oswald'
    },
    author: {
      fontSize: 12,
      textAlign: 'center',
      marginBottom: 40,
    },
    subtitle: {
      fontSize: 18,
      margin: 12,
      fontFamily: 'Oswald'
    },
    text: {
      margin: 12,
      fontSize: 14,
      textAlign: 'justify',
      fontFamily: 'Times-Roman'
    },
    image: {
      marginVertical: 15,
      marginHorizontal: 100,
    },
    header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: 'center',
      color: 'grey',
    },
    pageNumber: {
      position: 'absolute',
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: 'center',
      color: 'grey',
    },
  });


const Blog = () => {
        // <Document className='card w-[95%] lg:w-[80%] grid lg:grid-cols-2 gap-6 bg-sky-400 mt-10 mb-6 p-4 py-4 lg:px-10 lg:py-5 mx-auto'>
        //     <Page className='card px-8 py-5'>
        //         <Text className='text-2xl font-bold'>1. Tell us the differences between uncontrolled and controlled components??</Text>
        //         <Text className='leading-relaxed mt-3'><Text className='font-bold text-xl'>Ans: </Text>In React, controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally.</Text>
        //     </Page>
        //     <Page className='card px-8 py-5'>
        //         <Text className='text-2xl font-bold leading-relaxed'>1. How to validate React props using PropTypes??</Text>
        //         <Text className='mt-3'><Text className='font-bold text-xl'>Ans: </Text>1. PropTypes.any : The prop can be of any data type.</Text>
        //         <Text>2. PropTypes.bool : The prop should be a Boolean.</Text>
        //         <Text>3. PropTypes.bool : The prop should be a Boolean.</Text>
        //         <Text>4. PropTypes.string : The prop should be a string.</Text>
        //         <Text>5. PropTypes.func : The prop should be a function.</Text>
        //         <Text>6. PropTypes.array : The prop should be an array.
        //         </Text>
        //     </Page>
        //     <Page className='card px-8 py-5'>
        //         <Text className='text-2xl font-bold'>1. Tell us the difference between nodejs and express js.??</Text>
        //         <Text  className='leading-relaxed mt-3'><Text className='font-bold text-xl'>Ans: </Text>js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.</Text>
                
        //     </Page>
        //     <Page className='card px-8 py-5'>
        //         <Text className='text-2xl font-bold'>1. What is a custom hook, and why will you create a custom hook???</Text>
        //         <Text  className='leading-relaxed mt-3'><Text className='font-bold text-xl'>Ans: </Text>Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code. It also enhances the rendering speed of the code as a custom hook does not need to be rendered again and again while rendering the whole code.</Text>
                
        //     </Page>

        // </Document>

        
        ReactPDF.render(<Quixote />);
};

export default Blog;