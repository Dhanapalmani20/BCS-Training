# Task  1.1 - With function

# emoji(2, "🍓")
# emoji(6, "🍍")
# emoji(4, "🥕")
# emoji(3)

def emoji (n,emoji="🔥"):
    for i in range(1,n+1):
      print (f"{emoji}"*i)

emoji(2, "🍓")
emoji(6, "🍍")
emoji(4, "🥕")
emoji(3)