import spacy
import random
from nltk.tokenize import wordpunct_tokenize
from nltk.corpus import stopwords 
from nltk import word_tokenize, pos_tag
import en_core_web_sm
import string
from nltk.stem import WordNetLemmatizer
import re
import json
stop_words = set(stopwords.words('english')) 
lemmatizer = WordNetLemmatizer() 
nlp = en_core_web_sm.load()
def extract_entity(text):
    ENT=[]
    text=re.sub(r'\<.*?\>', '', text)
    A=''
    ENT_FLAG=0
    SYSTEM_ENTITY=''
    doc = nlp(text)
    for token in doc:
                print(token.dep_,token.text,[str(child) for child in token.children])
                if token.dep_=='ROOT':
                    
                    for Child in token.children:
                            print('c',Child)
                            if(Child.dep_=='dobj' ):
                                ENT_FLAG=0
                                print("TTT",Child)
                                if([str(child) for child in Child.children])==[]:
                                    pass
                                else:
                                    #print("CCC",Child.text)                      
                                                                
                                    for cc1 in Child.children:
                                            
                                            if(cc1.dep_=='compound' or cc1.dep_=='amod'):
                                                    A=A+" "+str(cc1.text)
                                            else:
                                                pass
                                A+=" "+(Child.text)
                                ENT.append(A)
                if ENT==[]:
                    ENT_FLAG=1
                if ENT_FLAG==1:
                    A=''
                    print("\n\nNNN",ENT)
                    if token.dep_=="pobj":
                        print("PPPPPPPPPPPPPPP",token.text)
                        if([str(child) for child in token.children])==[]:
                                    pass
                        else:
                            for cc1_ in token.children:
                                if(cc1_.dep_=='compound' or cc1_.dep_=='amod' ):
                                    print("asfasfasfafsa>>>>>>>>>>>",cc1_.text)
                                    if ([str(child2.dep_) for child2 in cc1_.children])==[]:
                                        pass
                                    else:
                                        
                                        for child2 in cc1_.children:
                                            if child2.dep_=="compound" or child2.dep_=='amod':
                                                print("asfasfasfafsa>>>>>>>>>>>",child2.text)
                                                print("EQWQWQWQ>>>>>>>>>>",ENT)
                                        
                                                A+=" "+(str(child2.text))
                                            else:
                                                pass
                                    A=A+" "+(str(cc1_.text))
                                else:
                                    pass
                        A+=" "+str(token.text)
                        ENT.append(A)
                         
                            



    print("ENTTTTT>>>>>>>>>>>",ENT)
    if ENT==[]:
       if "click" in text:
           SYSTEM_ENTITY=text.split("click")[1]
       if "enter" in text:
            SYSTEM_ENTITY=text.split("enter")[1]
       else:
            SYSTEM_ENTITY=text
            
    else:        
        SYSTEM_ENTITY=ENT[0]
    return SYSTEM_ENTITY


