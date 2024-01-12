function submitForm() {
    const fullName = document.getElementById('fullName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    let operator;

    switch (phoneNumber.substr(0, 3)) {
        case '066':
        case '095':
        case '050':
        case '099':
            operator = 'Водафон';
            break;
        case '063':
        case '073':
        case '093':
            operator = 'Лайфсел';
            break;
        case '067':
        case '098':
        case '068':
        case '096':
        case '097':
            operator = 'Київстар';
            break;
        default:
            operator = 'Інший';
    }

    const tableRow = document.createElement('tr');
    tableRow.innerHTML = `<td>${phoneNumber}</td><td>${fullName}</td><td>${operator}</td>`;

    document.getElementById('tableBody').appendChild(tableRow);
}
