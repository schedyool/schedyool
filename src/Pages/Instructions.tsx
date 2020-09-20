// calebaren.github.io
import React from 'react';
import Page from './Page';
// import { Typography, Link, List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Controls from '../Components/Controls/Controls';
import ReactMarkdown from 'react-markdown';
const Home = (): any => {
  const inputString = `Welcome to the Schedyool Free Covid-19 School Scheduling App!
    Powered by AMPL (TM) algebraic modeling software and Gurobi (TM) optimization software,
    Schedyool is free school-scheduling software specifically for the scheduling
    of blended learning during Covid-19.  For help, e-mail help@schedyool.com. 

                                How to Use Schedyool
    
    Here are detailed instructions.
    
    Page 1.  Enter your name and e-mail address.  These are needed only so Schedyool can e-mail you a schedule.
    You may leave the name field blank if you wish.
    
    Page 2. 
    a) (blended students)  
    Enter the number of students who will participate in blended (also known as "hybrid") learning.  
    These are the students who will physically attend school at least part of the time.  
    Do not include any "online only" students.
    
    b) (maximum grade) 
    The code assumes that the minimum grade in your school is 0, which is kindergarten.  (See the
    work-around below if the minimum grade in your school is not kindergarten.)  Enter here the maximum 
    grade in your school.  For many elementary schools, this will be 5, since they run from kindergarten
    to grade 5.   
     
    If your school's minimum grade level is not 0, say, because it is a middle or high school, you will have 
    to translate your school's minimum grade to 0.  For example, if your school's grade levels are 9-12,
    subtract 9 from all grades so that the maximum grade becomes 3, and enter 3 as the maximum grade.  You
    will have to understand that when Schedyool refers to grade 0, it will mean grade 9;  grade 1 will mean grade
    10;  grade 2 will mean grade 11;  and grade 3 will mean grade 12.
    
    c) (number of schedules) 
    For covid-19, this will likely be 2 or 3.  If your students will
    attend physical school on average half the time, say, they are attending on Monday-Tuesday and alternate
    Wednesdays or Thursday-Friday and alternate Wednesdays, enter 2.  If they are attending school one 
    third of the time, enter 3.
    
    d) (number of classrooms) 
    This is the number of classrooms available for instruction every day.
    
    Page 3: 
    a) (number of same-day sets) 
    You are likely to have sets of students who want to attend
    school on the same days, because they are siblings, members of a learning pod, or for some
    other reason.  Enter the number of such sets here.  The sets must have size at least two, but may
    have size three or more.
    
    b) (number of different-day sets) 
    You may have pairs of students who, for some reason,
    want to be scheduled on different days.  These must indeed be pairs (i.e., of size precisely two).  
    Enter the number of such pairs here.
    
    Page 3 (special sets)  
    The code allows you to enter sets of students who need special treatment, such
    as ICT or ENL students.  Enter here the number of special sets.
    
    Page 4 (special set fractions)  
    Students in a special set may not be allowed to encompass more than
    a certain fraction of all the students in a classroom.  For example, ICT students by law may encompass
    at most 40% of the students in a classroom.  There is one slider for each special set.
    Use the slider for a special set to enter the fraction for that special set.  For ICT students, 
    for example, adjust the slider to 40%.  For ENL students, there is no such requirement, 
    so leave the slider at 100%.
    
    Page 5 (packing special sets)
    For each special set, you may have a limitation, because of staffing issues, on the number of classrooms
    into which the students in each grade in that set may appear.  For example, suppose you want to pack:
    
      the kindergarten ICT students into 1 room each day;
      the first-grade ICT students into 2 rooms each day;
      the second-grade ICT students into 1 room each day;
      the third-grade ICT students into 3 rooms each day;
      the fourth-grade ICT students into 1 room each day; and
      the fifth-grade ICT students into 2 rooms each day.
    
    Then for the ICT special set, you would enter the numbers 1 2 1 3 1 2, in order.
    
    If there is no packing limitation for a grade, enter "None".
    
    Page 5 (file upload).  
    On this page, you need to upload the student file, the room-capacity file, the same-day-sets
    file, and the different-day-pairs files, IN THAT ORDER.  Here are descriptions of the files.
    
    While the description below mentions Excel, you could also create the files
    via Notepad or Wordpad.
    
                                       THE STUDENT FILE
    
    The most complicated file, the student file has EXACTLY one line per student;  there is no header row.  
    
    Later on, Schedyool can help you generate the file of sets of students who must be scheduled
    on the same day (that is, in the same cohort).  If you want Schedyool to help, you must download file
    blank_students_with_names.xlsm, a macro-enabled Excel workbook, from the Schedyool website.  
    This file is empty except for the macro.  If you do not, you can build a students_with_names.xlsx 
    without help from a macro.  In this latter case, the file is a regular Excel spreadsheet, 
    not a macro-enabled one.  Anyone who is reluctant to download macro-enabled spreadsheets 
    should choose the latter option, but will then have to generate the same-day-sets file manually.
    
    In either case, here is how to complete the students_with_names file.
    Start with the downloaded blank_students_with_names.xlsm or your own students_with_names.xlsx.
    Suppose in your school exactly 600 students will participate in blended learning.  Using Excel,
    create a file containing 600 rows.
    
    Column 1 (column A in Excel).  Leave blank for now.
    
    Columns 2 and 3 (B and C in Excel).  In columns 2 and 3, place the names of the students,
    the last name in column 2 and the first name in column 3.  These columns will not go to Schedyool.  
    
    Column 4 (D in Excel):  Place in column 4 the grade level of the student whose name appears in columns 2 
    and 3.  Use 0 for kindergarten.  These numbers must be between 0 and the maximum grade you entered above.
      
    Column 5 (E in Excel).  In column 5, place M for a boy or F for a girl.  The genders are used only to approximately
    balance the classrooms by gender.
    
    Each additional column, if any, corresponds to a special set.  So far, this file has five columns.
    If there are no special sets, stop.  If there are special sets, add exactly one column per special set.
    
    For each special set, in order, put a 1 if the student is in the special set and a 0 otherwise.
    For example, if there are two special sets and the first student were not in the first one but were in the 
    second, then in the first row, add a 0 in column 6 (F in Excel) and a 1 in column 7 (G in Excel).
    (It might be easier to first fill the two columns with zeros and then manually change some of the zeros to
    ones.)
    
    The total number of columns should be 5 plus the number of special sets.
    
    Now sort the sheet on column B, the last names.  You will get a warning asking if you want 
    to expand the selection;  say "yes" or "OK".  Note:  You do not have to sort the sheet
    if you are not using the macro.
    
    After sorting (or not sorting) the rows by last name, insert line numbers in the first column, 
    that is, put a 1 on row 1, a 2 on row 2, 3 on row 3, etc.  We recommend using method 1, 
    "Using Fill Handle," from website trumpexcel.com/number-rows-in-excel.  It's easy.
    
    Save the workbook as an Excel spreadsheet named students_with_names, either as a macro-enabled workbook 
    (with a .xlsm extension) or a regular Excel spreadsheet (with a .xlsx extension).  
    
    Now, in Excel, copy all the columns EXCEPT FOR THE FIRST THREE to a new sheet.
    Save the sheet as type "CSV (Comma Delimited)" with name "students_without_names"
    (without the quotation marks).  You will get a warning saying "The selected
    file type does not support workbooks that contain multiple sheets."  That's exactly 
    what you want.  Click "OK".  Then you will get a warning about losing features, and "Do you want to 
    keep that format?"  Click Yes.  The file will be 
    stored with a ".csv" extension.  It is that file, students_without_names.csv, that you will
    upload first to Schedyool.
    
    EXAMPLE.
    
    Suppose there are exactly 10 students participating in blended learning in your school 
    and you have two special sets.  Before sorting and adding line numbers, your students_with_names 
    file will have 7 columns, the first being blank, and may look like this:
    
     	Smith	John	4	M	0	1
     	Jones	Mary	5	F	0	0
     	William	Letitia	4	F	1	1
     	Friend	Bill	0	M	0	0
     	Aslam	Amir	2	M	0	0
     	Smith	Kareem	3	M	0	0
     	Talwar	Moh	1	M	1	0
     	Halvah	Cindy	1	F	1	0
     	Chan	Carla	2	F	0	0
      	Chopra	Sunil	5	M	0	1
    
    After sorting by last name and adding line numbers, it might look like this:
    
    1	Aslam	Amir	2	M	0	0
    2	Chan	Carla	2	F	0	0
    3 	Chopra	Sunil	5	M	0	1
    4	Friend	Bill	0	M	0	0
    5	Halvah	Cindy	1	F	1	0
    6	Jones	Mary	5	F	0	0
    7	Smith	John	4	M	0	1
    8	Smith	Kareem	3	M	0	0
    9	Talwar	Moh	1	M	1	0
    10	William	Letitia	4	F	1	1
    
    The corresponding students_without_names.csv file will have 10 rows and look like this:
    
    2,M,0,0
    2,F,0,0
    5,M,0,1 
    0,M,0,0
    1,F,1,0
    5,F,0,0
    4,M,0,1
    3,M,0,0
    1,M,1,0
    4,F,1,1
    
    From this file, Schedyool knows that there are two special sets.  Assuming the first 
    is ICT and the second is ENL, Schedyool knows that:
    
    The first student is in second grade, is a boy, is not in ICT or ENL.
    The second is in second grade and is a girl in neither ICT nor ENL
    The third, in fifth grade, is a boy who is in both ENL but not ICT.
    
                             THE ROOM CAPACITY FILE
    
    This file is much simpler.  Open a new sheet of the workbook.  In that sheet, use only the 
    first three columns of each row.  Each row will correspond to a classroom available every
    day for blended learning.
    
    The first column (column A) will contain the line numbers, as above.  
    In the second column (column B), place the name of the classroom, like "Room 128", and in the third
    (column C), place its "socially-distanced" student capacity, like 10.  (Remember to deduct for 
    teachers.)  There must be exactly one row for each 
    classroom and no header row.  Call that sheet "room_capacities_with_names".
    
    Then copy only the *third* column of that sheet to a new sheet.
    Then save the last sheet alone as a CSV file, as you did above, ignoring the 
    warnings from Excel.  Call that CSV file something like "room_capacities_without_names", to which 
    a ".csv" extension will be added.  This is the room capacity file you will upload to Schedyool.
    
    EXAMPLE.
    
    Here is a sample 7-line room_capacities_without_names.csv file, for a school with 7 classrooms.
    
    10
    8
    12
    12
    11
    7
    9
    
    There are two more files to upload.
    
                             THE SAME-DAY SETS FILE
    
    You can read below how Schedyool's Excel macro can help you build this file.
    
    You likely have some sets of students who want to be scheduled on the same day.  Perhaps
    some of your sets are sets of siblings and some are "learning pods."  You will now create a file 
    containing one line for each such set.  In this file, we represent a student
    by the number of the row in which the student appears in the students_with_names file.
    For example, look at the sample students_with_names file above.  
    Suppose that John Smith and Kareem Smith are siblings who should be scheduled
    on the same day.  Then add to the same-day sets file the row 
    
    7	8
    
    with the 7 in the first column (column A) and the 8 in the second (column B),
    because John Smith is student 7 and Kareem Smith is student 8.
    If Letitia William, Moh Talwar, and Carla Chan are in a learning pod together and 
    desire to be scheduled together, add row
    
    10	9	2
    
    with the 2 in the third column.  As you can see, different rows in this file can 
    have different numbers of entries.  Should Sunil Chopra and Bill Friend be friends who want to be 
    scheduled on the same row, add row
    
    3	4
    
    Now save this spreadsheet as CSV (not as Excel) into "same_day_sets.csv".
    In CSV format, the file will have three lines and will look like this:
    
    7,8
    10,9,2
    3,4
    
    This is the same-day-sets file you will upload to Schedyool.
    
            HOW SCHEDYOOL CAN HELP GENERATING THE SAME-DAY-SETS FILE
    
    As a starting point, Schedyool can assume that all children with the same 
    last name should be scheduled on the same day (i.e., in the same cohort).  Of course 
    (1) children with the same last name need not be siblings;  (2) siblings may not have asked 
    to be scheduled on the same day; and (3) siblings need not have the same last name.  
    Nonetheless, Schedyool's file may be a good starting point.  The principal would need, at minimum, to add 
    to the Schedyool-generated file rows for learning pods.  For the example above, Schedyool 
    would generate a file with only the line
    
    7	8
    
    because only John Smith, student 7, and Kareem Smith, student 8, have the same last name.
    
    Here we describe how Schedyool can generate the same-day-sets file for sets of children
    having the same last name.  You must have downloaded the file blank_students_with_names.xlsm 
    from the Schedyool website.  Carefully follow the directions above for generating the student file,
    which must be placed in the "student_file" sheet in the students_with_names.xlsm spreadsheet.
    Excel will ask you if you want to enable macros;  say "yes" or "OK".
    
    Now click on button on row 1 in column N labeled "Generate Same-Day Sets".  If things work, you
    will see "Done."  In this case, the same-day sets file for kids with the same last name appears 
    on the sheet labeled "same_day_sets", which you will have to save in CSV and upload to Schedyool.
    
                            THE DIFFERENT DAY PAIRS FILE                              
    
    Last, you must upload a different-day-pairs file, for pairs of students who want to be
    scheduled on different days.  This file looks a lot like the same-day-sets file, except that
    it has exactly two numbers per row.  You simply place on each row the row numbers of a pair
    of students who want to be scheduled on different days.  For example, if Cindy Halvah and 
    Moh Talwar are such a pair, add row
    
    5	9
    
    If John Smith and Sunil Chopra are another another such pair, add row
    
    7	3
    
    Save as CSV into something like "different_day_pairs.csv".  In this example, the 2-line file to be
    uploaded would be 
    
    5,9
    7,3
    
                               SUBMITTING YOUR DATA
    
    After reviewing your data on the Review page, click Submit.  The code will need up to 15 minutes.  
    At completion, it will send you an e-mail.  The e-mail will contain the schedule, 
    presuming (as is usually the case) it found 
    one.  If it failed to find one, there was probably a mistake in your data, either in the 
    quantities you entered by hand or in the files you uploaded.  In most but not all cases, 
    Schedyool will describe the error, but in some cases you will have to examine the data you entered
    and find the error yourself.  In rare cases, Schedyool might even fail to find a schedule, if, for 
    example, there is no feasible schedule, even when there is no error in the data.
    
                              HOW TO INTERPRET THE E-MAIL
    
    If Schedyool found a schedule, it will appear as the CSV attachment "schedule.csv" to the e-mail. 
    This attachment corresponds to the textual output which appears in the body of the e-mail.  File
    schedule.csv will have four columns.  The first is the student number, from students_with_names;
    the second is that student's grade level;  the third is the day on which the student will attend
    school (that is, the cohort;  more about this in a moment); and the last is the classroom number.
    
    The "day" is really the "cohort."  For example, for Monday-Tuesday and alternate Wednesdays 
    vs Thursday-Friday and alternate Wednesdays, "day 1" means the former and "day 2" means the latter.
    
    Open up schedule.csv by double clicking on it.  Add three new columns at the front.  Also open 
    schedule_with_names and copy the first three columns of schedule_with_names 
    into the three blank columns of schedule.csv.  Now you have the schedule with the names of the students.  
  `;

  return (
    <Page title="Instructions" subtitle="Instructions for using Schedyool">
      <Link to="/"> <Controls.Button text="Home" /> </Link>
      <Link to="/downloadfile"> <Controls.Button text="Download Workbook@@@@@@@@@@" /> </Link>
      <Link to="/"> <Controls.Button text="Download Workbook@@@@@@@@@@NO!Home" /> </Link>
      <Link to="/scheduler"> <Controls.Button text="Schedyool!" /> </Link>
      <ReactMarkdown source={inputString} />
    </Page>
  )

};


export default Home;
