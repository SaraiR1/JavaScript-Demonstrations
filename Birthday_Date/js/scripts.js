function getDate (){
    // regular expression to make sure the user enters MM/DD
    let date = /^\d{2}[\/]\d{2}$/;

    //prompt user for their birth month and day 
    let bday = prompt("Enter your birthday MM/DD");

    /* while the user enters a date that does not match the regular expression,
     they will be alerted to use the correct format and prompts the user again */
    while (date.test(bday) == false)
    {
        alert("please use the format MM/DD (Example: 07/10)");

        bday = prompt("Enter your birthday MM/DD");

    }

    // removes the '/'
    let bdayArr = bday.split('/');

    // gets the current date
    let currentYear = new Date();

    // adds the current year to the beginning of the bday date
    bdayArr.unshift(currentYear.getFullYear());

    let bdayDate = new Date(bdayArr);

    // gets the difference between the bday date and current date
    let calDays = bdayDate.getTime()-currentYear.getTime();

    // calculates how many days until the user's next birthday
    let days = Math.floor((calDays/(1000*60*60*24)) + 1);

    /* if days is negative because the user's birthday already passed
     then the browser will display the user's birthday next year (2024) 
     instead of 2023 */
    if(days < 0) {

        bdayDate.setFullYear(currentYear.getFullYear() + 1);

        let cal = bdayDate.getTime()-currentYear.getTime();

        let day = Math.floor((cal/(1000*60*60*24)) + 1);

        document.write(day + " days until your next birthday <br>");

        document.write("<br> Birthday: " + bdayDate.toDateString());

    } else {

        // displays how many days until birthday
        document.write(days + " days until your next birthday <br>");

        // displays birthday date without the eastern standard time
        document.write("<br> Birthday: " + bdayDate.toDateString());
    }


}
