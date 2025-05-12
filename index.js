const fs = require('fs');
const { XMLParser, XMLValidator } = require('fast-xml-parser');

// Load XML and XSD files
const xmlString = fs.readFileSync('xsd/book.xml', 'utf-8');
const xsdString = fs.readFileSync('xsd/imsqti_itemv3p0_v1p0.xsd', 'utf-8');

// Validate XML against XSD
if (XMLValidator.validate(xmlString)) {
  console.log('XML is well-formed.');
} else {
  console.error('XML is not well-formed.');
}

// Note: fast-xml-parser does not natively support XSD validation.
// You may need to use an external library or tool for full XSD validation.
