let data = fetch("./hospital-list.json");

$(document).ready(function () {
  data
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      populateTable(data);
    })
    .catch((err) => {
      console.error(err);
    });
});

function populateTable(data) {
  var tableHead = $("#jsonTable thead");

  var tableBody = $("#jsonTable tbody");

  tableHead.empty();

  tableBody.empty();

  if (data.length > 0) {
    var columns = Object.keys(data[0]);

    var headerRow = $("<tr>");

    columns.forEach(function (column) {
      headerRow.append($("<th>").text(column));
    });

    tableHead.append(headerRow);

    $.each(data, function (index, item) {
      var row = $("<tr>");

      columns.forEach(function (column) {
        row.append($("<td>").text(item[column] || ""));
      });

      tableBody.append(row);
    });
  }
}
