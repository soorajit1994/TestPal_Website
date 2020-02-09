{"intents": [
        {"tag": "login_scenario",
         "patterns": [" I enter a valid User ID and password ","I fill in Email ", "I should be on the users home page","i enter username","i enter email","i enter password","and i enter passcode","enter user id","click on login","click on i am not a robot","click on sign in","click log on","captcha","verify title in the page","assert title is","I click on SignOn Button"],
         "context": ["i login with valid credentials","i login with username and password"]
        },
        {"tag": "contact_details",
         "patterns": ["enter phone number","enter land line number","enter  mobile number ","select country code"],
         "context": ["i enter contact details","i enter contact information"]
        },
		{"tag": "address_details",
         "patterns": ["enter address","enter building number","enter road name","enter lane No","select country","select state","select city","enter city","enter PIN code","pin code","enter post office"],
         "context": ["i enter address details","i fill in address information","i enter all addresses"]
        },
		
		{"tag": "negative",
         "patterns": ["Given i navigate to url <https://>","I wait 5 seconds for element having css ","I should see balance transfer confirmation","enter amount","click on continue","enter number of people","select payment method","I click on profiles ","I click on save button","And I logged off","select state","I click on application overlay button","I click on element having class radius","click on submit payment button","I can check the amount range before payment","i click on ok","I click on Done button"," I click pay Citi credit card","select the TO account for payment","date is selected from the calendar","I click on Payments and Transfer links"],
         "context": ["negative"]
        }
		
	
       
       
		 
		 
		
		
		
        
   ]
}