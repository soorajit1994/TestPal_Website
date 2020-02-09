import classification
import selenium_runner

Steps=[]
def run_step(step):
    global Steps
    try:
        class_1=classification.classify_local(step)
        print(class_1[0][0],class_1[0][1])
        if(class_1[0][0]=="LAUNCH"):
            
            objects=selenium_runner.launch(step)
        elif(class_1[0][0]=="click"):
            objects=selenium_runner.click_event(step)
            if (len(objects)==0):
                return "fail",[]
        elif(class_1[0][0]=="enter"):
            objects=selenium_runner.enter_event(step)
            if (len(objects)==0):
                return "fail",[]
            
        else:
            return "fail",[]
        Steps.append(step)
        
        
            
        return "pass",objects
    except IndexError as e:
        print(e)
        return "fail",[]
