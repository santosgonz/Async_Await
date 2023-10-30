async function getNumber(){
    console.log("Start")
    const res = await axios.get('http://numbersapi.com/13/?json')
    console.log("Complete")
    console.log(res.data.text)
}

url2 = "http://numbersapi.com/1..4"

async function getNumbers(){
    const res = await axios.get(url2)
    let numbers = res.data
    const container = $('#numbersContainer')
    console.log(numbers)
    for (let num in numbers) {
        let divElement = $('<div></div>').text(numbers[num]);
        container.append(divElement)
    }
}

const num = 13;
const url13 = `http://numbersapi.com/${num}/?json`;

async function facts() {
    const container = $('#numbersContainer');
    for (let i = 0; i < 4; i++) {
        const res = await axios.get(url13)
        let fact = res.data.text;
        console.log(fact)
        let divElement = $('<div></div>').text(fact)
        container.append(divElement)
    }
}