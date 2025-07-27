

// function customRender(reactElement,container){
//     const docElement = document.createElement
//     (reactElement.type)
//     docElement.innerHTML = reactElement.Children
//     docElement.setAttribute('href',reactElement.props.href)
//     docElement.setAttribute('target',reactElement.props.targate)

//     container.appendChild(docElement)


// }
function customRender(reactElement,container){
const docElement = document.createElement(reactElement.type)
docElement.innerHTML = reactElement.Children
for (const prop in reactElement.props){
    if (prop === 'children') continue;
    docElement.setAttribute(prop,reactElement.props[prop])
}
container.appendChild(docElement)
}


const reactElement = {
    type: 'a',
    props:{
        href : 'https://google.com',
    targate: '_blank'
    },
    Children:'Click me to visit google'
}


const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)

