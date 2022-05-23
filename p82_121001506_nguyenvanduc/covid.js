const url='https://api.covid19api.com/summary'
const xuat =(data) =>
{ 
    const bang = document.querySelector('tbody')
    let html = ''
    data.Countries.map((item,index) => 
    {
        html +=`
        <tr> 
            <th scope="row">${item.Country}</th>
            <td>${item.CountryCode}</td>
            <td>${item.slug}</td>
            <td>${item.NewConfirmed}</td>
            <td>${item.TotalConfirmed}</td>
            <td>${item.NewDeaths}</td>
            <td>${item.TotalDeaths}</td>
            <td>${item.NewRecovered}</td>
            <td>${item.TotalRecovered}</td>
            <td>${item.Date}</td>
        </tr>
        `
    })
    bang.innerHTML = html
}

const getAPI =(url, callback ) =>
{
    fetch(url)
        .then(res =>res.json())
        .then (data => {
            callback(data)
    })

}
    getAPI(url,xuat)
