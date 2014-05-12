# bootstrap-datetimepicker

Our own fork of Eonasdan's bootstrap datetimepicker with simple time selectors. Build for Bootstrap V3.

![DateTimePicker](http://i.imgur.com/b0WX8Fk.png)

## Manual installation

Include necessary scripts and styles:
```html
<head>
  <!-- ... -->
  <script type="text/javascript" src="/js/jquery.min.js"></script>
  <script type="text/javascript" src="/js/moment.min.js"></script>
  <script type="text/javascript" src="/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="/js/bootstrap-datetimepicker.min.js"></script>
  <link rel="stylesheet" href="/css/bootstrap.min.css" />
  <link rel="stylesheet" href="/css/bootstrap-datetimepicker.min.css" />
</head>
```

## Options

This fork keeps Eonasdan's datetimepicker options.

```javascript
$.fn.datetimepicker.defaults = {
    pickDate: true,                 //en/disables the date picker
    pickTime: true,                 //en/disables the time picker
    useMinutes: true,               //en/disables the minutes picker
    useSeconds: true,               //en/disables the seconds picker
    useCurrent: true,               //when true, picker will set the value to the current date/time
    minuteStepping:1,               //set the minute stepping
    minDate:`1/1/1900`,               //set a minimum date
    maxDate: ,     //set a maximum date (defaults to today +100 years)
    showToday: true,                 //shows the today indicator
    language:'en',                  //sets language locale
    defaultDate:"",                 //sets a default date, accepts js dates, strings and moment objects
    disabledDates:[],               //an array of dates that cannot be selected
    enabledDates:[],                //an array of dates that can be selected
    useStrict: false,               //use "strict" when validating dates  
    sideBySide: false,              //show the date and time picker side by side
    daysOfWeekDisabled:[]          //for example use daysOfWeekDisabled: [0,6] to disable weekends
};
```

## Contributing

Feel free to submit pull requests to this fork and we're open to suggestions to make some of the changes as well.

## Credits

<!-- feel free to make these link wherever you wish -->
* Thanks to [@Eonasdan]() for the fork and inspired on [@bufferapp](https://github.com/bufferapp) datetimepicker. Modify by [@JNajera](https://github.com/JNajera)
