// calebaren.github.io
import React from 'react';
import Page from './Page';
import { Typography, Link, List, ListItem, ListItemText } from '@material-ui/core';
import Controls from '../Components/Controls/Controls';
import ReactMarkdown from 'react-markdown';

const Home = (): any => {
    const inputString: any = `
    Thanks to the requirements of blended virtual and physical learning, principals have the
    daunting task of scheduling students while satisfying several important constraints:
    
    1.  the number of students in each classroom cannot violate its "social-distancing" capacity;
    2.  sets of students such as siblings and members of "learning pods" who wish to attend 
        school on the same days should be allowed to;
    3.  pairs of students who wish to attend school on different days, for whatever reason,
        should be allowed to;  and 
    4.  sets of students such as those learning English as a new language (ENL) or needing
        integrated co-teaching (ICT) should be handled appropriately.
    
    Schedyool simplifies your job by doing the scheduling for you.  You provide information on 
    the students, without giving any students' names, and, in most cases, Schedyool will find and e-mail
    you a schedule. 
    
                                How to Use Schedyool
    
    Here are detailed instructions.
    
    Page 1.  Enter your name and e-mail address.  These are needed only so Schedyool can e-mail you the schedule.
    
    Page 2. 
    a) (blended students)  
    Enter the number of students who will participate in blended learning.  These are the students who will
    physically attend school at least part of the time.  Do not include any "online only" students.
    
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
    
    By far the most complicated file, the student file has EXACTLY one line per student;  there is no header row.  
    Suppose in your school exactly 600 students will participate in blended learning.  Using Excel,
    create a file containing 600 rows.
    
    Column 1 (column A in Excel).  Insert line numbers in the first column, that is, put a 1 on row 1, a 2 on row 2, 
    3 on row 3, etc.  I use method 1, "Using Fill Handle," from website trumpexcel.com/number-rows-in-excel.
    It's easy.
    
    Column 2 (B in Excel).  In column 2, place the names of the students in some particular (say, alphabetical) 
    order.  This column will not go to Schedyool.  Alternatively, start with a sheet having the names of the 
    students participating in blended learning in column 2, and add the line numbers in column 1.
    
    Column 3 (C in Excel):  Place in column 3 the grade level of the student whose name appears in column 2.  
    Use 0 for kindergarten.  These numbers must be between 0 and the maximum grade you entered above.
      
    Column 4 (D in Excel).  In column 4, place M for a boy or F for a girl.  The genders are used only to approximately
    balance the classrooms by gender.
    
    Each additional column, if any, corresponds to a special set.  So far, this file has four columns.
    If there are no special sets, stop.  If there are special sets, add exactly one column per special set.
    
    For each special set, in order, put a 1 if the student is in the special set and a 0 otherwise.
    For example, if there are two special sets and the first student were not in the first one but were in the 
    second, then in the first row, add a 0 in column 5 (E in Excel) and a 1 in column 6 (F in Excel).
    
    The total number of columns should be 4 plus the number of special sets.
    Save the workbook as an Excel spreadsheet, perhaps calling it "students_with_names".
    
    Now, in Excel, copy all the columns EXCEPT FOR THE FIRST TWO to a new sheet.
    Save the workbook as type "CSV (Comma Delimited)".  You will get a warning saying "The selected
    file type does not support workbooks that contain multiple sheets."  That's exactly 
    what you want.  Click "OK".  Then you will get a warning about losing features, and "Do you want to 
    keep that format?"  Click Yes.  Give the file a name like "students_without_names".  It will be 
    stored with a ".csv" extension.  It is that file, students_without_names.csv, that you will
    upload to Schedyool.
    
    EXAMPLE.
    
    Suppose there are exactly 10 students participating in blended learning in your school 
    and you have two special sets.  Your students_with_names file will have 6 columns and 
    may look like this:
    
    1   John Smith          4 M 0 1
    2   Mary Jones          5 F 0 0
    3   Letitia Williams    4 F 1 1
    4   Bill Friend         0 M 0 0
    5   Amir Aslam          2 M 0 0
    6   Kareem Smith        3 M 0 0
    7   Mohammad Talwar     1 M 1 0
    8   Cindy Halvah        1 F 1 0
    9   Carla Chan          2 F 0 0
    10  Sunil Chopra        5 M 0 1
    
    The corresponding students_without_names.csv file will have 10 rows and look like this:
    
    4,M,0,1
    5,F,0,0
    4,F,1,1
    0,M,0,0
    2,M,0,0
    3,M,0,0
    1,M,1,0
    1,F,1,0
    2,F,0,0
    5,M,0,1 
    
    From this file, Schedyool knows that there are two special sets.  Assuming the first 
    is ICT and the second is ENL, Schedyool knows that:
    
    The first student is entering fourth grade, is a boy, is not in ICT but is in ENL.
    The second is entering fifth grade and is a girl in neither ICT nor ENL
    The third, entering fourth grade, is a girl who is in both ICT and ENL.
    
    The most difficult aspect of using Schedyool is the creation of the students file.
    
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
    
    There are two more files to upload.  They are not difficult.
    
                                THE SAME-DAY SETS FILE
    
    You likely have some sets of students who want to be scheduled on the same day.  Perhaps
    some of your sets are sets of siblings and some are "learning pods."  You will now create a file 
    containing one line for each such set.  In this file, we represent a student
    by the number of the row in which the student appears in the students_with_names file.
    For example, look at the sample students_with_names file above.  
    Suppose that John Smith and Kareem Smith are siblings who should be scheduled
    on the same day.  Then add to the same-day sets file the row 
    
    1  6
    
    with the 1 in the first column (column A) and the 6 in the second (column B),
    because John Smith is student 1 and Kareem Smith is student 6.
    If Letitia Williams, Mohammad Talwar, and Carla Chan are in a learning pod together and 
    desire to be scheduled together, add row
    
    3  7  9
    
    with the 9 in the third column.
    (The numbers in a row actually do not have to be in sorted order.)  As you can see,
    different rows in this file can have different numbers of entries.
    Should Sunil Chopra and Bill Friend be friends who want to be scheduled on the same row, add row
    
    10  4
    
    Now save this spreadsheet as CSV (not as Excel) into something like "same_day_sets.csv".
    In CSV format, the file will have three lines and will look like this:
    
    1,6
    3,7,9
    10,4
    
    This is the same-day-sets file you will upload to Schedyool.
    
                             THE DIFFERENT DAY PAIRS FILE                              
    
    Last, you must upload a different-day-pairs file, for pairs of students who want to be
    scheduled on different days.  This file looks a lot like the same-day-sets file, except that
    it has exactly two numbers per row.  You simply place on each row the row numbers of a pair
    of students who want to be scheduled on different days.  For example, if Cindy Halvah and 
    Mohammad Talwar are such a pair, add row
    
    8 7 
    
    If John Smith and Sunil Chopra are another another such pair, add row
    
    1 10
    
    Save as CSV into something like "different_day_pairs.csv".  In this example, the 2-line file to be
    uploaded would be 
    
    8,7
    1,10
    
                               SUBMITTING YOUR DATA
    
    After reviewing your data on the Review page, click Submit.  The code will need up to 15 minutes.  
    At completion, it will send you an e-mail.  The e-mail will contain the schedule, 
    presuming (as is usually the case) it found 
    one.  If it failed to find one, there was probably a mistake in your data, either in the 
    quantities you entered by hand or in the files you uploaded.  In most but not all cases, 
    Schedyool will describe the error, but in some cases you will have to examine the data you entered
    and find the error yourself.  In rare cases, Schedyool might even fail to find a schedule, if, for 
    example, your scheduling problem is too difficult, even when there is no error in the data.
    
                              HOW TO INTERPRET THE E-MAIL
    
    If Schedyool found a schedule, it will appear as the CSV attachment "schedule.csv" to the e-mail. 
    This attachment corresponds to the textual output which appears in the body of the e-mail.  File
    schedule.csv will have four columns.  The first is the student number, from students_with_names;
    the second is that student's grade level;  the third is the day on which the student will attend
    school (more about this in a moment); and the last is the classroom number.
    
    The "day" is really the "cohort."  For example, for Monday-Tuesday and alternate Wednesdays 
    vs Thursday-Friday and alternate Wednesdays, "day 1" means the former and "day 2" means the latter.
    
    `;



    return (
        <Page title="Instructions" subtitle="Instructions for using Schedyool">
            <Link href="/scheduler">
                <Controls.Button text="Schedyool!" />
            </Link>
            <Link href="/">
                <Controls.Button text="Home" color="default" />
            </Link>
            <ReactMarkdown source={inputString} />
            <Link href="/scheduler">
                <Controls.Button text="Schedyool!" />
            </Link>
            <Link href="/">
                <Controls.Button text="Home" color="default" />
            </Link>
        </Page>
    )
    //     return (
    //         <Page title="How to" subtitle="Instructions for using Schedyool" >
    //             <Typography paragraph>
    //                 Thanks to the requirements of blended virtual and physical learning, principals have the
    //                 daunting task of scheduling students while satisfying several constraints:
    //             </Typography>
    //             <List>
    //                 <ListItem>
    //                     <ListItemText>
    //                         1.  The number of students in each classroom cannot violate its "social-distancing" capacity;
    //                     </ListItemText>
    //                 </ListItem>
    //                 <ListItem>
    //                     <ListItemText>
    //                         2.  sets of students such as siblings and members of "learning pods" who wish to attend
    //                         school on the same days should be allowed to;
    //                     </ListItemText>
    //                 </ListItem>
    //                 <ListItem>
    //                     <ListItemText>
    //                         3.  pairs of students who wish to attend school on different days, for whatever reason,
    //                         should be allowed to;  and
    //                     </ListItemText>
    //                 </ListItem>
    //                 <ListItem>
    //                     <ListItemText>
    //                         4.  sets of students such as those learning English as a new language (ENL) or needing
    //                         integrated co-teaching (ICT) should be handled appropriately.
    //                     </ListItemText>
    //                 </ListItem>
    //             </List>


    //             <Typography paragraph>
    //                 Schedyool simplifies your job by doing the scheduling for you.  You provide information on
    //                 the students, without giving any students' names, and, in most cases, Schedyool will find and e-mail
    //                 you a schedule.  After processing your data, Schedyool deletes it.
    //             </Typography>
    //             <Typography paragraph variant="body2">
    //                 DISCLAIMER:  By using Schedyool, you acknowledge that Schedyool comes with no express or
    //                 implied warranty.  There is no warranty of any kind concerning the fitness of the Schedyool results
    //                 for any use.  There is no guaranty that Schedyool will function as intended.  In particular,
    //                 in some cases Schedyool may produce no schedule at all.  You acknowledge that schedules produced
    //                 by Schedyool may not satisfy all constraints submitted, and
    //                 that any schedule produced by Schedyool will be manually reviewed by the school's
    //                 principal for appropriateness before being implemented.
    //             </Typography>

    //             <Typography paragraph variant="h5">
    //                 How to Use Schedyool
    //             </Typography>

    //             <Typography paragraph variant="body1">

    //                 Here are detailed instructions.

    //                 <List>
    //                     <ListItem>
    //                         <ListItemText>
    //                         <em>Page 1.</em> Enter your name and e-mail address.  These are needed only so Schedyool can e-mail you the schedule.
    //                         </ListItemText>
    //                     </ListItem>
    //                     <ListItem>
    //                         <ListItemText>
    //                         <em>Page 2.</em>
    //                         <List>
    //                             <ListItem>
    //                                 <ListItemText>
    //                                 a) (blended students)
    //                         Enter the number of students who will participate in blended learning.  These are the students who will
    //                         physically attend school at least part of the time.  Do not include any "online only" students.
    //                                 </ListItemText>
    //                             </ListItem>
    //                             <ListItem>
    //                                 <ListItemText>
    //                                 b) (maximum grade)
    //                         The code assumes that the minimum grade in your school is 0, which is kindergarten.  (We will
    //                         give you a work-around if the minimum grade in your school is not kindergarten.)  Enter here the maximum
    //                         grade in your school.  For many elementary schools, this will be 5, since they run from kindergarten
    //                         to grade 5.

    //                         If your school's minimum grade level is not 0, say, because it is a middle or high school, you will have
    //                         to translate your school's minimum grade to 0.  For example, if your school's grade levels are 9-12,
    //                         subtract 9 from all grades so that the maximum grade becomes 3, and enter 3 as the maximum grade.  You
    //                         will have to understand that when Schedyool refers to grade 0, it will mean grade 9;  grade 1 will mean grade
    //                         10;  grade 2 will mean grade 11;  and grade 3 will mean grade 12.
    //                                 </ListItemText>
    //                             </ListItem>
    //                             <ListItem>
    //                                 <ListItemText>
    //                                 c) (number of schedules)
    //                         For covid-19, this will likely be 2 or 3.  If your students will
    //                         attend physical school on average half the time, say, they are attending on Monday-Tuesday and alternate
    //                         Wednesdays or Thursday-Friday and alternate Wednesdays, enter 2.  If they are attending school one
    //                         third of the time, enter 3.
    //                                 </ListItemText>
    //                             </ListItem>
    //                             <ListItem>
    //                                 <ListItemText>
    //                                 d) (number of classrooms)
    //                         This is the number of classrooms available for instruction every day.
    //                                 </ListItemText>
    //                             </ListItem>
    //                         </List>
    //                         </ListItemText>





    //                     </ListItem>
    //                     <ListItem>
    //                         <ListItemText>
    //                         <em>Page 3.</em>
    //                         <List>
    //                             <ListItem>
    //                                 <ListItemText>
    //                                 a) (number of same-day sets)
    //                         You are likely to have sets of students who want to attend
    //                         school on the same days, because they are siblings, members of a learning pod, or for some
    //                         other reason.  Enter the number of such sets here.  The sets must have size at least two, but may
    //                         have size three or more.
    //                                 </ListItemText>
    //                             </ListItem>
    //                             <ListItem>
    //                                 <ListItemText>
    //                                 b) (number of different-day sets)
    //                         You may have pairs of students who, for some reason,
    //                         want to be scheduled on different days.  These must indeed be pairs (i.e., of size precisely two).
    //                         Enter the number of such pairs here.
    //                                 </ListItemText>
    //                             </ListItem>
    //                         </List>
    //                         </ListItemText>

    //                     </ListItem>
    //                     <ListItem>
    //                         <ListItemText>
    //                             <em>Page 4.</em> (special sets)
    //                             The code allows you to enter sets of students who need special treatment, such
    //                         as ICT or ENL students.  Enter here the number of special sets.
    //                         </ListItemText>
    //                     </ListItem>
    //                     <ListItem>
    //                         <ListItemText>
    //                             <em>Page 5.</em> (special set fractions)
    //                             Students in a special set may not be allowed to encompass more than
    //                         a certain fraction of all the students in a classroom.  For example, ICT students by law may encompass
    //                         at most 40% of the students in a classroom.  There is one slider for each special set.
    //                         Use the slider for a special set to enter the fraction for that special set.  For ICT students,
    //                         for example, adjust the slider to 40%.  For ENL students, there is no such requirement,
    //                         so leave the slider at 100%.
    //                         </ListItemText>
    //                     </ListItem>
    //                     <ListItem>
    //                         <ListItemText>
    //                             <em>Page 6.</em>(packing special sets)
    //                         For each special set, you may have a limitation, because of staffing issues, on the number of classrooms
    //                         into which the students in each grade in that set may appear.  For example, suppose you want to pack:
    //                         <List>
    //                             <ListItem>
    //                                 <ListItemText>
    //                                 the kindergarten ICT students into 1 room each day;
    //                                 </ListItemText>
    //                             </ListItem>
    //                             <ListItem>
    //                                 <ListItemText>
    //                                 the first-grade ICT students into 2 rooms each day;
    //                                 </ListItemText>
    //                             </ListItem>
    //                             <ListItem>
    //                                 <ListItemText>
    //                                 the second-grade ICT students into 1 room each day;
    //                                 </ListItemText>
    //                             </ListItem>
    //                             <ListItem>
    //                                 <ListItemText>
    //                                 the third-grade ICT students into 3 rooms each day;
    //                                 </ListItemText>
    //                             </ListItem>
    //                             <ListItem>
    //                                 <ListItemText>
    //                                 the fourth-grade ICT students into 1 room each day; and
    //                                 </ListItemText>
    //                             </ListItem>
    //                             <ListItem>
    //                                 <ListItemText>
    //                                 the fifth-grade ICT students into 2 rooms each day.
    //                                 </ListItemText>
    //                             </ListItem>
    //                         </List>

    //                         Then for the ICT special set, you would enter the numbers <code>1 2 1 3 1 2</code>, in order.

    //                         If there is no packing limitation, enter <code>None</code>.
    //                         </ListItemText>
    //                     </ListItem>
    //                     <ListItem>
    //                         <ListItemText>
    //                             <em>Page 6.</em> (file upload).
    //                             On this page, you need to upload the student file, the room-capacity file, the same-day-sets
    //                             file, and the different-day-pairs files, IN THAT ORDER.  Here are descriptions of the files.

    //                         </ListItemText>
    //                     </ListItem>

    //                 </List>
    // While the description below mentions Excel, you could also create the files
    // via Notepad or Wordpad.
    //             </Typography>

    //             <Typography paragraph variant="h5">
    //                 THE STUDENT FILE
    //             </Typography>

    //             <Typography paragraph variant="body2">
    //                 By far the most complicated file, the student file has EXACTLY one line per student;  there is no header row.
    //                 Suppose in your school exactly 600 students will participate in blended learning.  Using Excel,
    //                 create a file containing 600 rows.
    // </Typography>
    //             <Typography paragraph variant="body2">
    //                 <strong>Column 1.</strong>  Insert line numbers in the first column, that is, put a 1 on row 1, a 2 on row 2,
    // 3 on row 3, etc.  I use method 1, "Using Fill Handle," from <a href="trumpexcel.com/number-rows-in-excel">this website</a>.  It's easy.
    // </Typography>
    //             <Typography paragraph variant="body2">
    //             <strong>Column 2.</strong>  In column 2, please the names of the students in some particular (say, alphabetical)
    //                 order.  This column will not go to Schedyool.  Alternatively, start with a sheet having the names of the
    //                 students participating in blended learning in column 2, and add the line numbers in column 1.
    // </Typography>
    //             <Typography paragraph variant="body2">
    //             <strong>Column 3.</strong>  Place in column 3 the grade level of the student whose name appears in column 2.
    //                 Use 0 for kindergarten.  These numbers must be between 0 and the maximum grade you entered above.
    // </Typography>
    //             <Typography paragraph variant="body2">
    //             <strong>Column 4.</strong>  In column 4, place M for a boy or F for a girl.  The genders are used only to approximately
    //                 balance the classrooms by gender.
    // </Typography>
    //             <Typography paragraph variant="body2">
    //                 Each additional column, if any, corresponds to a special set.  So far, this file has four columns.
    //                 If there are no special sets, stop.  If there are special sets, add exactly one column per special set.
    // </Typography>
    //             <Typography paragraph variant="body2">
    //                 For each special set, in order, put a 1 if the student is in the special set and a 0 otherwise.
    //                 For example, if there are two special sets and the first student were not in the first one but were in the
    //                 second, then in the first row, add a 0 in column 5 and a 1 in column 6.
    //             </Typography>
    //             <Typography paragraph variant="body2">
    //                 The total number of columns should be 4 plus the number of special sets.
    //                 Save the workbook as an Excel spreadsheet, perhaps calling it "students_with_names".
    //             </Typography>
    //             <Typography paragraph variant="body2">
    //                 Now, in Excel, copy all the columns EXCEPT FOR THE FIRST TWO to a new sheet.
    //                 Save the workbook as type <code>CSV (Comma Delimited)</code>.  You will get a warning saying <code>The selected
    //                 file type does not support workbooks that contain multiple sheets.</code>  That's exactly
    //                 what you want.  Click <code>OK</code>.  Then you will get a warning about losing features, and <code>Do you want to
    //                 keep that format?</code> Click <code>Yes</code>.  Give the file a name like <code>students_without_names</code>.  It will be
    //                 stored with <code>.csv</code> extension.  It is that file, <code>students_without_names.csv</code>, that you will
    //                 upload to Schedyool.
    //             </Typography>
    //             <Typography paragraph variant="body2">
    //                 EXAMPLE.
    //             </Typography>
    //             <Typography paragraph variant="body2">
    //                 Suppose there are exactly 10 students participating in blended learning in your school
    //                 and you have two special sets.  Your students_with_names file will have 6 columns and
    //                 may look like this:
    //             </Typography>
    //             <Typography paragraph variant="body2">
    //                 1   John Smith          4 M 0 1
    //                 2   Mary Jones          5 F 0 0
    //                 3   Letitia Williams    4 F 1 1
    //                 4   Bill Friend         0 M 0 0
    //                 5   Amir Aslam          2 M 0 0
    //                 6   Kareem Smith        3 M 0 0
    //                 7   Mohammad Talwar     1 M 1 0
    //                 8   Cindy Halvah        1 F 1 0
    //                 9   Carla Chan          2 F 0 0
    //                 10  Sunil Chopra        5 M 0 1
    //             </Typography>
    //             <Typography paragraph variant="body2">
    //                 The corresponding students_without_names.csv file will have 10 rows and look like this:
    //             </Typography>
    //             <Typography paragraph variant="body2">
    //                 4,M,0,1
    //                 5,F,0,0
    //                 4,F,1,1
    //                 0,M,0,0
    //                 2,M,0,0
    //                 3,M,0,0
    //                 1,M,1,0
    //                 1,F,1,0
    //                 2,F,0,0
    //                 5,M,0,1
    //             </Typography>
    //             <Typography paragraph variant="body2">
    //                 From this file, Schedyool knows that there are two special sets.  Assuming the first
    //                 is ICT and the second is ENL, Schedyool knows that:
    //             </Typography>
    //             <Typography paragraph variant="body2">
    //                 The first student is entering fourth grade, is a boy, is not in ICT but is in ENL.
    //                 The second is entering fifth grade and is a girl in neither ICT nor ENL
    //                 The third, entering fourth grade, is a girl who is in both ICT and ENL.
    //             </Typography>
    //             <Typography paragraph variant="body2">
    //                 By the way, if you accidentally upload the file *with* names, don't panic.  The code
    //                 will fail (because it expects *numbers* in the first column, not names),
    //                 return an error message, and delete the file.
    //             </Typography>
    //             <Typography paragraph variant="body2">
    //                 The most difficult aspect of using Schedyool is the creation of the students file.
    //             </Typography>

    //             <Typography paragraph variant="h5">
    //                 THE ROOM CAPACITY FILE
    //             </Typography>
    //             <Typography paragraph variant="body2">
    //                 This file is much simpler.  Open a new sheet of the workbook.  In that sheet, use only the
    //                 first three columns of each row.  Each row will correspond to a classroom available every
    //                 day for blended learning.

    //                 The first column will contain the line numbers, as above.
    //                 In the second column, place the name of the classroom, like "Room 128", and in the third, place
    //                 its "socially-distanced" student capacity, like 10.  (Remember to deduct for
    //                 teachers.)  There must be exactly one row for each
    //                 classroom and no header row.  Call that sheet "room_capacities_with_names".

    //                 Then copy only the *third* column of that sheet to a new sheet.
    //                 Then save the last sheet alone as a CSV file, as you did above, ignoring the
    //                 warnings from Excel.  Call that CSV file something like "room_capacities_without_names", to which
    //                 a ".csv" extension will be added.  This is the room capacity file you will upload to Schedyool.

    //                 EXAMPLE.

    //                 Here is a sample 7-line room_capacities_without_names.csv file, for a school with 7 classrooms.

    //                 10
    //                 8
    //                 12
    //                 12
    //                 11
    //                 7
    //                 9

    //                 There are two more files to upload.  They are not difficult.
    //             </Typography>

    //             <Typography paragraph variant="h5">
    //                 THE SAME-DAY SETS FILE
    //             </Typography>

    //             <Typography paragraph variant="body2">

    //                 You likely have some sets of students who want to be scheduled on the same day.  Perhaps
    //                 some of your sets are sets of siblings and some are "learning pods."  You will now create a file
    //                 containing one line for each such set.  In this file, we represent a student
    //                 by the number of the row in which the student appears in the students_with_names file.
    //                 For example, look at the sample students_with_names.csv file above.
    //                 Suppose that John Smith and Kareem Smith are siblings who should be scheduled
    //                 on the same day.  Then add to the same-day sets file the row

    // <code>1  6</code>

    // with the 1 in the first column, the 6, in the second,
    // because John Smith is student 1 and Kareem Smith is student 6.
    // If Letitia Williams, Mohammad Talwar, and Carla Chan are in a learning pod together and
    // desire to be scheduled together, add row

    // <code>3  7  9</code>

    // with the 9 in the third column.
    // (The numbers in a row actually do not have to be in sorted order.)  As you can see,
    // different rows in this file can have different numbers of entries.
    // Should Sunil Chopra and Bill Friend be friends who want to be scheduled on the same row, add row

    // <code>10  4</code>

    // Now save this spreadsheet as CSV (not as Excel) into something like "same_day_sets.csv".
    // In CSV format, the file will have three lines and will look like this:

    // <code>1,6</code>
    //                 <code>3,7,9</code>
    //                 <code>10,4</code>

    // This is the same-day-sets file you will upload to Schedyool.

    //             </Typography>


    //             <Typography paragraph variant="h5">
    //                 THE DIFFERENT DAY PAIRS FILE
    //             </Typography>

    //             <Typography paragraph variant="body2">
    //                 Last, you must upload a different-day-pairs file, for pairs of students who want to be
    //                 scheduled on different days.  This file looks a lot like the same-day-sets file, except that
    //                 it has exactly two numbers per row.  You simply place on each row the row numbers of a pair
    //                 of students who want to be scheduled on different days.  For example, if Cindy Halvah and
    //                 Mohammad Talwar are such a pair, add row

    // <code>8 7 </code>

    // If John Smith and Sunil Chopra are another another such pair, add row

    // <code>1 10</code>

    // Save as CSV into something like "different_day_pairs.csv".  In this example, the 2-line file to be
    // uploaded would be

    // <code>8,7</code>
    //                 <code>1,10</code>

    //             </Typography>

    //             <Typography paragraph variant="h5">
    //                 SUBMITTING YOUR DATA
    //             </Typography>

    //             <Typography paragraph variant="body2">
    //                 After reviewing your data on the Review page, click Submit.  The code will need up to 15 minutes.
    //                 At completion, it will send you an e-mail.  The e-mail will contain the schedule,
    //                 presuming (as is usually the case) it found
    //                 one.  If it failed to find one, there was probably a mistake in your data, either in the
    //                 quantities you entered by hand or in the files you uploaded.  In most but not all cases,
    //                 Schedyool will describe the error, but in some cases you will have to examine the data you entered
    //                 and find the error yourself.  In rare cases, Schedyool might even fail to find a schedule, if, for
    //                 example, your scheduling problem is too difficult, even when there is no error in the data.
    //             </Typography>

    //             <Typography paragraph variant="h5">
    //                 HOW TO INTERPRET THE E-MAIL
    //             </Typography>

    //             <Typography paragraph variant="body2">
    //                 If Schedyool found a schedule, it will appear as the CSV attachment "schedule.csv" to the e-mail.
    //                 This attachment corresponds to the textual output which appears in the body of the e-mail.  File
    //                 schedule.csv will have four columns.  The first is the student number, from students_with_names.csv;
    //                 the second is that student's grade level;  the third is the day on which the student will attend
    //                 school (more about this in a moment); and the last is the classroom number.
    //             </Typography>
    //             <Typography paragraph variant="body2">
    //                 The "day" is really the "schedule."  For example, for Monday-Tuesday and alternate Wednesdays
    //                 vs Thursday-Friday and alternate Wednesdays, "day 1" means the former and "day 2" means the latter.
    //             </Typography>
    //             <Link href="/scheduler">
    //                 <Controls.Button text="Schedyool!" />
    //             </Link>
    //             <Link href="/">
    //                 <Controls.Button text="Home" color="default" />
    //             </Link>
    //         </Page>
    //     );
};

export default Home;
