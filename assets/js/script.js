

        // document.addEventListener('contextmenu', (e) => e.preventDefault());

        // function ctrlShiftKey(e, keyCode) {
        // return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
        // }

        // document.onkeydown = (e) => {
            
        // if (
        //     event.keyCode === 123 ||
        //     ctrlShiftKey(e, 'I') ||
        //     ctrlShiftKey(e, 'J') ||
        //     ctrlShiftKey(e, 'C') ||
        //     (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
        // )
        //     return false;
        // };




        

        window.addEventListener("load", () => {
            clock();
            function clock() {
            const today = new Date();
        
              // get time components
            const hours = today.getHours();
            const minutes = today.getMinutes();
            const seconds = today.getSeconds();
        
              //add '0' to hour, minute & second when they are less 10
            const hour = hours < 10 ? "0" + hours : hours;
            const minute = minutes < 10 ? "0" + minutes : minutes;
            const second = seconds < 10 ? "0" + seconds : seconds;
        
              //make clock a 12-hour time clock
            const hourTime = hour > 12 ? hour - 12 : hour;
        
              // if (hour === 0) {
              //   hour = 12;
              // }
              //assigning 'am' or 'pm' to indicate time of the day
            const ampm = hour < 12 ? "AM" : "PM";
        
              // get date components
            const month = today.getMonth();
            const year = today.getFullYear();
            const day = today.getDate();
        
              //declaring a list of all months in  a year
            const monthList = [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ];
        
              //get current date and time
            const date = monthList[month] + " " + day + ", " + year;
            const time = hourTime + ":" + minute + ":" + second + ampm;
    
              //combine current date and time
            const dateTime = date;
        
              //print current date and time to the DOM
            document.getElementById("date-time").innerHTML = dateTime;
            setTimeout(clock, 1000);
            }
        });



        // const ul = document.querySelector('.pagination ul');

        // const generatePageNumber = (totalPages, currentPage)=>{
        //     let pagination = [],
        //         pageNo = 1;


        //     while (pageNo <= totalPages) {
        //         let isFirstPage = pageNo <= 1
        //             isLastPage = pageNo == totalPages
        //             isMiddlePage = pageNo >= currentPage - 1 && pageNo <= currentPage + 1

        //         if (isFirstPage || isLastPage || isMiddlePage) {
        //             pagination.push(pageNo)
        //             pageNo++
        //         } else {
        //             pagination.push("...")
        //             pageNo = pageNo < currentPage ? currentPage - 1 : totalPages
        //         }
        //     }
        //     return pagination;
        // }



        // const handlePagination = () => {

        //   let pageNumbers = generatePageNumber(12, 5);

        //   ul.innerHTML = "";
        //   let li = '';
        //   li += '<li class="page">PREVIOUS</li>';

        //   for (let pageNumber of pageNumbers) {
        //     li+= '<li class="page active">' ${pageNumber}</li>';
        //   }

        //   li += '<li class="page">NEXT</li>';

        //   ul.innerHTML = li;

        // }

        // handlePagination();