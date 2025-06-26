import random
target = random.randint(1,100)
while True:
    userChoice = int(input("Guess the target:"))
    if(userChoice == target):
      print("Success : correct guess!!")
      break 
    elif(userChoice<target):
        print("your nmbr was too small. Take a bigger guess..") 
    else:
        print("your nmbr was too big. Take a smaller guess..")   
  
  
print("------Game over-----")  