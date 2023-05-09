const xmlText = `
  <SONG>
    <NAME>Pump Up The Jam</NAME>
    <ARTIST>Thomas Gold</ARTIST>
  </SONG>
`;

// Создаем парсер
const parser = new DOMParser();

// Парсим XML текст
const xmlDoc = parser.parseFromString(xmlText, "text/xml");

// Получаем значения элементов NAME и ARTIST
const name = xmlDoc.getElementsByTagName("NAME")[0].childNodes[0].nodeValue;
const artist = xmlDoc.getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue;
const songString = `${artist} - ${name}`;
// console.log(songString);

document.write(songString);
