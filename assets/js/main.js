const getData = async (fileURI) => {
  try {
    const data = await fetch(fileURI)
    return await data.json()
  }
  catch (error) { throw new Error(`Couldn't fetch data: ${error}`) }
}


const replaceAntlers = (className, placeholder, content) => {
  const element = document.querySelector(className)
  return element.innerText = element.innerText.replace(`{{ ${placeholder} }}`, content)
}


const getRandomArrayEntry = (data) => data[Math.floor(Math.random() * data.length)]





;(async function (){

  const fqmMeanings = await getData('assets/meanings.json')
  return replaceAntlers('.js--replace-tagline', 'Flex Queue Madness', getRandomArrayEntry(fqmMeanings))

})()
