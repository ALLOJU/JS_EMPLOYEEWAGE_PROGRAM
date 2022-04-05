//UC1
//assigning absent value is zero
const IS_ABSENT=0
//generating random value using math.random() function
let empCheck=Math.floor(Math.random() *10) %2;
//if employee check is zero then it gives absent
if(empCheck==IS_ABSENT){
    console.log("Employee is Absent");

}
//otherwise it will give employee present
else{
    console.log("Employee is Present");
}
