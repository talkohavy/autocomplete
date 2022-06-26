//------------------------
//Function 1: calcAgeMyWay
//------------------------
function calcAgeMyWay(dobUnix){
    //Step 1: get two GMT+00 dates
    const dobDT = new Date(dobUnix * 1000);
    const nowDT = new Date();
    //Step 2: calc age
    let age = nowDT.getFullYear() - dobDT.getFullYear();
    const monthDiff = nowDT.getMonth() - dobDT.getMonth();
    if(monthDiff < 0){
        age = age - 1;
        return age;
    }
    if(monthDiff == 0){
        const dayDiff = nowDT.getDate() - dobDT.getDate();
        if(dayDiff < 0){
            age = age - 1;
            return age;
        }
    }
    return age;
}

//-----------------------
//Function 4: format Date
//-----------------------
function formatDate(localDate){
    const year = localDate.getFullYear();
    let month = localDate.getMonth() + 1;
    if (month < 10){
        month = "0" + month;
    }
    let day = localDate.getDate();
    if (day < 10){
        day = "0" + day;
    }
    const dateStr = `${day}/${month}/${year}`;
    return dateStr;
}

//-----------------------
//Function 5: format Time
//-----------------------
function formatTime(localDate){
    let hour = localDate.getHours();
    if (hour < 10){
        hour = "0" + hour;
    }
    let minutes = localDate.getMinutes();
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    const timeStr = `${hour}:${minutes}`;
    return timeStr;
}

//--------------------------
//Function 5: getDaysInMonth
//--------------------------
function getDaysInMonth(year,month) {
    // Note: Day 0 is the last day in the previous month
    // Case 1: January is 1 based
    return new Date(year, month, 0).getDate();
    // Case 2: January is 0 based
    // return new Date(year, month+1, 0).getDate();
    // Usage:
    //console.log(getDaysInMonth(2012, 1)); // 31
    //console.log(getDaysInMonth(2013, 2); // 29
    //console.log(getDaysInMonth(2013, 2); // 29
    //console.log(getDaysInMonth(2012, 12)); // 31
};

//--------------------
//Function 6: isOnline
//--------------------
function isUserOnline(globalUnix) {
    const diff = new Date().getTime()/1000 - globalUnix;
    const isOnline = diff < 300;
    return isOnline;
};

module.exports = {calcAgeMyWay, formatDate, formatTime, isUserOnline, getDaysInMonth};