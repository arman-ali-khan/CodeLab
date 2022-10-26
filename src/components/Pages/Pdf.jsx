import { Document, Page, View } from '@react-pdf/renderer';
import React from 'react';

const Pdf = () => {
    // const courceData = useLoaderData();
    // const {name, picture, details} = courceData;

    return (
        <Document>
    <Page size="A4" >
      <View>
      
			
                <Text>PDF Text</Text>
	
      </View>
    </Page>
  </Document>
    );
};

export default Pdf;
