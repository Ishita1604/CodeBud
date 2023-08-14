fetch("https://kontests.net/api/v1/all").then(
    res => {
        res.json().then(
            data => {
                console.log(data);
                if (data.length > 0) {

                    var temp = "";
                    data.forEach((itemData) => {
                        const startTime = new Date(itemData.start_time).toLocaleString();
                        const endTime = new Date(itemData.end_time).toLocaleString();

                        temp += '<tr class="row">';
                        temp += "<td>" + `<a href="${itemData.url}" target="_blank">` + itemData.name + `</a>` + "</td>";
                        temp += '<td >' + `<button class="start">` + startTime + "</button></td>";
                        temp += '<td >' + `<button class="end">` + endTime + "</button></td>";
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