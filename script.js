fetch("https://kontests.net/api/v1/all").then(
    res => {
        res.json().then(
            data => {
                console.log(data);
                if (data.length > 0) {

                    var temp = "";
                    data.forEach((itemData) => {

                        temp += '<tr class="row">';
                        //display only item data
                        // temp += "<td>" + itemData.name + "</td>";
                        //display both name & url in one 
                        temp += "<td>" + `<a href="${itemData.url}" target="_blank">` + itemData.name + `</a>` + "</td>";
                        //display only item url
                        //temp += `<td>` + `<a href="${itemData.url}" target="_blank" rel="noopenner">` + itemData.url + `</a></td>`;
                        temp += '<td >' + `<button class="start">` + itemData.start_time + "</button></td>";
                        temp += '<td >' + `<button class="end">` + itemData.end_time + "</button></td>";
                        temp += "<td>" + itemData.duration + "</td>";
                        temp += "<td>" + itemData.site + "</td>";
                        temp += "<td>" + itemData.status + "</td></tr>";


                    });

                    document.getElementById('data').innerHTML = temp;
                }
            }
        )
    }
)