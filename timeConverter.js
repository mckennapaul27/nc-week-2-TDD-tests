//timeConverter('16:35') => "4.35pm"

function timeConverter (inputTime) {
    let inputTimeArray = inputTime.split(':');
    let hours = inputTimeArray[0];
    let minutes = inputTimeArray[1];
    let amOrPm = hours < 12 ? 'am': 'pm';

    if (hours === '00') {
        hours = '12';
    }

    return hours + ':' + minutes + amOrPm;
}

module.exports = timeConverter;