function XMLtoJSON(xml) {
    let obj = {};
    const xmlInput = document.getElementById('xmlInput').value;
    // Record the start time
    const startTime = performance.now();
    if (xml.nodeType == 1) {
      if (xml.attributes.length > 0) {
        obj['@attributes'] = {};
        for (let j = 0; j < xml.attributes.length; j++) {
          const attribute = xml.attributes.item(j);
          obj['@attributes'][attribute.nodeName] = attribute.nodeValue;
        }
      }
    } else if (xml.nodeType == 3) {
      obj = xml.nodeValue.trim();
    }
    if (xml.hasChildNodes()) {
      for (let i = 0; i < xml.childNodes.length; i++) {
        const item = xml.childNodes.item(i);
        const nodeName = item.nodeName;
        if (typeof obj[nodeName] == 'undefined') {
          obj[nodeName] = XMLtoJSON(item);
        } else {
          if (typeof obj[nodeName].push == 'undefined') {
            const oldObj = obj[nodeName];
            obj[nodeName] = [];
            obj[nodeName].push(oldObj);
          }
          obj[nodeName].push(XMLtoJSON(item));
        }
      }
    }
    // Record the end time
    const endTime = performance.now();
    const elapsedTime = endTime - startTime;
    console.log(`Elapsed time: ${elapsedTime} milliseconds`);
    document.getElementById('jsonInput').value = JSON.stringify(jsonResult, null, 2);
    return obj;
  }
  // function JSONtoXML(obj) {
  // let xml = '';
  // for (let prop in obj) {
  // if (prop === '@attributes') {
  //   for (let attr in obj[prop]) {
  //     xml += ' ' + attr + '="' + obj[prop][attr] + '"';
  //   }
  // } else if (Array.isArray(obj[prop])) {
  //   for (let arrayItem in obj[prop]) {
  //     xml += '<' + prop + '>';
  //     xml += JSONtoXML(obj[prop][arrayItem]);
  //     xml += '</' + prop + '>';
  //   }
  // } else if (typeof obj[prop] === 'object') {
  //   xml += '<' + prop + '>';
  //   xml += JSONtoXML(obj[prop]);
  //   xml += '</' + prop + '>';
  // } else {
  //   xml += '<' + prop + '>' + obj[prop] + '</' + prop + '>';
  // }
  // }
  // return xml;
  // }
  const xmlDoc = new DOMParser().parseFromString(xml, 'application/xml');
  const jsonResult = XMLtoJSON(xmlDoc);
  console.log(jsonResult);
  
  function convertXMLtoJSON() {
    const xmlInput = document.getElementById('xmlInput').value;
    const xmlDoc = new DOMParser().parseFromString(xmlInput, 'application/xml');
    const jsonResult = XMLtoJSON(xmlDoc);
    document.getElementById('jsonInput').value = JSON.stringify(jsonResult, null, 2);
  }
  
  function convertJSONtoXML() {
    const jsonInput = document.getElementById('jsonInput').value;
    const jsonObj = JSON.parse(jsonInput);
    const xmlResult = JSONtoXML(jsonObj);
    document.getElementById('xmlInput').value = xmlResult;
  }