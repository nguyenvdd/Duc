const url='https://api.covid19api.com/'
const xuat =(data) => {
    const table = document.querySelector('tbody')
    let html = ''
    for (key in data){ 
        html +=`
        <tr>
        
          <th scope="row">${key}</th>
          <td${data[key].name}</td>    
          <td${data[key].Description}</td>
          <td${data[key].Path}</td>
        </tr>
        `

    }
    table.innerHTML = html 
}
const getAPI =(url, callback) =>{
       fetch(url)
       .then(res => res.json ())
       .then (data => {
           callback(data)
       })
}
getAPI(url,xuat)
