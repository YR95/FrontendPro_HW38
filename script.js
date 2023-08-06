const buttonFirst = document.querySelector('#firstButton');
// const buttonSecond = document.querySelector('#secondButton');
const buttonThird = document.querySelector('#thirdButton');

function getProtocl(btn, selector) {
  let wholeAttributeProperty = document.querySelector(selector).getAttribute(
      'onclick');
  console.log(`Complete attribute: ${wholeAttributeProperty}`);

  let attribute = document.querySelector(selector).getAttribute(
      'onclick').substring(0, 13);
  console.log(`Location.href  ${attribute}`);

  let url = document.querySelector(selector).getAttribute(
      'onclick').substring(14);
  console.log(`URL  ${url}`);

  let protocol = url.substring(0, url.indexOf(":"));
  console.log(`protocol  ${protocol}`);

  if (protocol) {
    console.log(`protocol already exists: ${protocol} for site: ${url}`)
    console.log(btn.outerHTML)

  } else {
    let updatedUrl = attribute.concat("='").concat(
        'https://').concat(url.substring(1));

    console.log(`updated site with added protocol: ${updatedUrl}`);
    btn.setAttribute('onclick', updatedUrl);
    console.log(btn.outerHTML)
  }

}

getProtocl(buttonFirst, "#firstButton")
console.log("_______________");
getProtocl(buttonThird, "#thirdButton")