
const grillDOMElement = document.getElementById('grill')
console.log(grillDOMElement)



const dataArray = [
    {
        name: 'Wayne Barnett',
        work : 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        work : 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        work : 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        work : 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        work : 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        work : 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg'
    }

]

for (let i = 0; i < dataArray.length; i++) {
	const worker = dataArray[i]
	const finalData = `${worker.name} ${worker.work} ${worker.image}`
	console.log(finalData)

    const html = `
    <div class="card">
    <img src="./img/${worker.image}" alt="">
    <div class = "text grey">${worker.name}</div>
    <div class = "text">${worker.work}</div>
    </div>
    `
    grillDOMElement.innerHTML += html
}

