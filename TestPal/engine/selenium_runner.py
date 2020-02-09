from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import NLP_Helper
import difflib

cmd = 'start chrome -remote-debugging-port=9014 --user-data-dir="D:\chrome"'
import os
options = webdriver.ChromeOptions()
options.add_experimental_option('debuggerAddress', 'localhost:9014')
os.system(cmd)
path=os.path.join(os.path.dirname(__file__), 'driver/chromedriver.exe')
driver = webdriver.Chrome(executable_path =path,chrome_options=options)
JS=open(os.path.join(os.path.dirname(__file__),"files/get_ALL2.js")).read()
event_attributes=open(os.path.join(os.path.dirname(__file__),'files/event_attributes.txt')).read().split(", ")
A=[]
def window_handel():
    windows=driver.window_handles
    
        
    for handle in windows:
        driver.switch_to.window(handle)
        
        if(str(driver.title).strip()==""):
            windows.remove(handle)
    
    
    driver.switch_to.window(windows[-1])
def launch(step):
    global A
    url=step.split("<")[1].split(">")[0]
    driver.get(url)
    window_handel()
    A=driver.execute_script(JS,event_attributes)
    return A
def click_event(step):
    global A
    CLICKED=0
    entity=NLP_Helper.extract_entity(step)
    print(entity)
    window_handel()
    TEMP=[]
    A=driver.execute_script(JS,event_attributes)
    for S in A:
        if(S["TAG"]!="INPUT" and S["TAG"]!="TEXTAREA"):
            if(S["TEXT"].strip()==""):
                T=S["OBJ"]
            else:
                T=S["TEXT"]
            if(difflib.SequenceMatcher(None,T , entity).ratio()>0.40):
                TEMP.append({"RATIO":difflib.SequenceMatcher(None,T , entity).ratio(),"TEXT":T,"XPATH":S["XPATH"]})
                
    if TEMP==[]:
        return []
                
    else:
        sorted_list = sorted(TEMP, key=lambda k: k['RATIO'])
        driver.find_element_by_xpath(sorted_list[-1]["XPATH"]).click()
        A=driver.execute_script(JS,event_attributes)
        return A
    

def enter_event(step):
    global A
    
    entity=NLP_Helper.extract_entity(step)
    TEMP=[]
    window_handel()
    A=driver.execute_script(JS,event_attributes)
    for S in A:
        if(S["TAG"]=="INPUT" or S["TAG"]=="TEXTAREA"):
            
            if(difflib.SequenceMatcher(None,S['OBJ'] , entity).ratio()>0.30):
                TEMP.append({"RATIO":difflib.SequenceMatcher(None,S['OBJ'] , entity).ratio(),"TEXT":S["OBJ"],"XPATH":S["XPATH"]})
                
    if TEMP==[]:
        return []
    
    else:
        sorted_list = sorted(TEMP, key=lambda k: k['RATIO'])
        print(sorted_list)
        driver.find_element_by_xpath(sorted_list[-1]["XPATH"]).send_keys(step.split("<")[1].split(">")[0])
        A=driver.execute_script(JS,event_attributes)
        return A
    
