const run =async()=>{
    const response = await fetch('http://localhost');
    const data = await response.json();
    // return data
    
    const list = document.querySelector('.main')
    data.map(({Name , Amount})=>{
        const ele = document.createElement("div")
        ele.className='element'
        ele.append(document.createElement("h1").innerText= Name)
        ele.append(document.createElement("br"))
        ele.append(document.createElement("p").innerHTML= Amount)
        list.append(ele)
    })


}

run()