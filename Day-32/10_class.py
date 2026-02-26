# Blueprint
# self, this - context word

# this is my book - context (book)
# this is my pen - context (pen)
class Car:
    # function =  method (class function)
    def __init__(self, wheels, engine, model, doors):
        # instance variables
        self.wheels = wheels
        self.engine = engine
        self.model = model
        self.doors = doors

    # instance methods - objects share them
    def horn(self):
        return "Vroom Vroom!!!"


# Share

# Object
# self -> Object
hindustan = Car(4, "v4", "Ambassador", 4)
jeep = Car(4, "v6", "Wrangler", 4)

print(hindustan)  # Car object
print(jeep)

# Dot syntax - Class objects
print(jeep.model)
print(jeep.doors)

print(jeep.horn())
print(hindustan.horn())

# ## Tata
# - Wheels - 4
# - Engine - v4
# - Model - Harrier
# - Doors - 4





class Acc:
#1.acc_no
#2.name
#3. balance


##task 1.2
#create 3 account
# 1. nk - 50000
# 2. rishi - 300000
# 3. puspha- 1000000
    def __init__(self,acc_no,name,balance):
      self.acc_no=acc_no
      self.name=name
      self.balance=balance

    def display_balance(self):
        return (f"Your balance is : {self.balance:,}")

# def withdraw(self):?
    # return"100000"

nk= Acc(101,"nanthakumar",50000)
rishi= Acc(102,"rishi",300000)
puspha= Acc(103,"Puspha",1000000)



print(rishi.balance)
# print(rishi.balance)  
# print(puspha.balance)      
    
## Task 1.2

# print(puspha.withdraw(1_00_000))  # Success. Your balance is: ₹900,000.00
# print(puspha.display_balance())  # Your balance is: ₹900,000.00
# print(puspha.withdraw(10_00_000))  # Insufficient funds. Your balance is: ₹900,000.00
# print(puspha.withdraw(-100))  # Invalid amount