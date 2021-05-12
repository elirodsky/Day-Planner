$(document).ready(()=>{
    //display the current date
    const today = moment().format('dddd, MMMM Do')
    $('#currentDay').text(today)

    //display the 9 rows = the hours of the day 9-5
    const hours = [9,10,11,12,1,2,3,4,5]
    hours.forEach(hour => {
        let row = $(`<div id="hour-${hour}" class="row time-block">
        <div class="col-md-1 hour">
          ${hour}${hour <= 5 ? "PM" : "AM"}
        </div>
        <textarea class="col-md-10 description">
        </textarea>
        <button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>
      </div>`)
      $('.container').append(row)
    })
   
});

// ${currentHour > hour ? "future" : currentHour === hour ? "present" : "past"}"