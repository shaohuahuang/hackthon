### What is outstanding?
Outstanding of a rental-month, is actually the accumulation of all income and expenditure previous to the current rental-month. 
 
### What to note? 
- only items of last two months can be modified 
- only outstanding of the last two month could be recalculated. 

### FAQ
- When do you insert month into rental_month table? 
    
  When adding a new record into cash_balance, if the rental_month in the record does not exist yet, it will insert into rental_month.

- How modification into cash_balance table will affect outstanding table? 
  
  Insertion:
    - if month does not exist, it should calculate its outstanding. 
      It also needs to calculate the outstanding of the next month, which is actually the YTD outstanding for the current month
      
    - if month already exists
      Just do the calculation
      
  Update:
      Just do the calculation
   
  Delete: 
      just do the calculation
      
- Why trigger is necessary? 
  Because trigger every modification on cash_balance item will trigger the other things to happen
  Inside the trigger, we need to ensure which data could be modified in outstanding table
  
  prev month: its outstanding will not change, but the items could be modified
  curr month: its outstanding will change 
  next month: its outstanding will change
  
  
  
### Technical Qustions

- Inside a store procedure, if one insert statement fail, will it terminate immediately?
  Answer: If will terminate even though the error is very minor
  
- How to migrate database? 
    - first insert the outstanding and related rental_month records
    - import cash_balance data










