{"intents": [
        {"tag": "element_present",
         "patterns": ["element is present","this is present"],
         "context": ["element_present"]
        },
        {"tag": "element_not_present",
         "patterns": ["element is not present","element is absent"],
         "context": ["element_not_present"]
        },
        {"tag": "element_visible",
         "patterns": ["element is visible","see this element"],
         "context": ["element_visible"]
        },
		
		{"tag": "element_not_visible",
         "patterns": ["element is not visible","can not see this","can't see it"],
         "context": ["element_not_visible"]
        },
		
		{"tag": "element_matches_value",
         "patterns": ["element matches value","value is matched"],
         "context": ["element_matches_value"]
        },
		{"tag": "element_doesnt_match",
         "patterns": ["element does not match value","element does'nt match value","value is not matched"],
         "context": ["element_doesnt_match"]
        },
		{"tag": "elements_contains_value",
         "patterns": ["element contains value","value is there in it"],
         "context": ["element_contains_value"]
        },
		{"tag": "element_doesnt_contains_value",
         "patterns": ["element does not contain it","value is not here"],
         "context": ["element_doesnt_contains_value"]
        },
		{"tag": "element_contains_CSS",
         "patterns": ["element contains CSS class","css class is here in it"],
         "context": ["element_contains_CSS"]
        },
		{"tag": "element_doesnt_contains_CSS",
         "patterns": ["element doesn't contain CSS class","css class is not matched"],
         "context": ["\n Given I am on the Home page of \"URL\"\n Given I logged into CBOL with UserID and password \"<User>\" \"<password>\"\n When I click on profiles \n Then I clicked on new card request\n And I provide valid \"Email\" \"SSN\" \"Contact\"\n And I enter security questions as mentioned\n And I click on save button\n Then I click on application overlay button\n Then can see the reference page\n And I logged off\n \n Examples\n | User | password | \n | abc  | test  | "]
        },
		{"tag": "element_contains_ATT",
         "patterns": ["element contains this atribute"],
         "context": ["element_contains_ATT"]
        },
		{"tag": "element_doesnt_contains_ATT",
         "patterns": ["elements does not contain atribute"],
         "context": ["element_doesnt_contains_ATT"]
        },
		{"tag": "title_contains_value",
         "patterns": ["value of title is this","title of the page","title contains value"],
         "context": ["title_contains_value"]
        },
		{"tag": "title_doesnt_contains_value",
         "patterns": ["title doesnt contain value","title does not contain this"],
         "context": ["title_doesnt_contains_value"]
        },
		{"tag": "url_contains_value",
         "patterns": ["url contains value"],
         "context": ["url_contains_value"]
        },
		{"tag": "url_doesnt_contains_value",
         "patterns": ["url does not contain value"],
         "context": ["url_doesnt_contains_value"]
        },
		{"tag": "page_source_contains_value",
         "patterns": ["page source contains value","page source"],
         "context": ["page_source_contains_value"]
        },
		
		 {"tag": "page_source_doesnt_contains_value",
		 "patterns": ["page source does not contain this"],
		 "context": ["page_source_doesnt_contains_value"]
		 },
		 {"tag": "click",
		 "patterns": ["click on this","i click"],
		 "context": ["CLICK"]
		 },
		 {"tag": "enter",
		 "patterns": ["enter username","enters password","enters in input"],
		 "context": ["ENTER"]
		 },
		 {"tag": "SELECT",
		 "patterns": ["select","I selects","selecting"],
		 "context": ["SELECT"]
		 },
		 
		  {"tag": "LAUNCH",
		 "patterns": ["go to http://mysite.net","launch the url www.google.com","launch https://bitbucket.org","launch http://onlinesbi.com","i navigate to url <https://>"],
		 "context": ["LAUNCH"]
		 },
		 {"tag": "UNCLASSIFIED",
		 "patterns": ["798 South Park Avenue, Jaipur, Raj","asdsadsa sadsa  adsdsadas ","We are an award-winning creative agency, dedicated to the best result in web design, promotion, business consulting, and marketing.","i like u","hi hi hi ","not now","bye bye","like u liiekasadaffa","sdadsa","qwdqwdqdwqdqww"],
		 "context": ["UNCLASSIFIED"]
		 }
		 
		 
		
		
		
        
   ]
}