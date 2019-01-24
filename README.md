# Server (Back-End)

This /server folder contains Node.Js(Server) code 

# Database

import database from /database folder


 # How to Run
 
   Note: make sure #node and #git is installed on your system.
     
   * Step 1 : goto /databse folder and import rhtvma.sql in your machine
   
   
   * Step 2 : goto /server 
              
              run **npm install** 
              
              run **node main.js**
              
              Server running at http://localhost:8070/
              
              goto **/server/config/default.json**
              
              Update your databse configurationshere
               "mysql": {
                  "connectionLimit": 5,
                  "host": "127.0.0.1",
                  "port": 3306,
                  "user": "root",
                  "password": "root",
                  "database": "{db_name}"
                },

   * Step 3 : goto /public 
   
              run **npm install**
              
              run **ng serve** for development mode/debugging use this
              
              Angular running at http://localhost:4200/
              
              
              run **ng build**  for production mode use this
                            
              then just hit **http://localhost:8070/** (this will work only after **Step 2**)
              

 
 
 
 
 
 
 
 
 
 
 
 
 
