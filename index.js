const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
function returnFirstTwoDrivers (){
    return drivers.slice(0 , 2);
}
function returnLastTwoDrivers(){
    return drivers.slice(2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(){
    return (fare => fare * fare);
}
const fareDoubler =(fare)=>{
     return fare * 2;
}
const fareTripler = (fare) => {
    return fare * 3;
}
