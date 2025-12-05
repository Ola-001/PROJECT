def card_counting():
    while True:
        user_input = input("Enter any whole number:")

        try:
            user = int(user_input)
            print("You entered:", user)
            break

        except ValueError:
                print ("Enter a whole number")

    if 2 <= user <= 6:
        print ("Low card (2-6)")
    elif 7 <= user <= 9:
        print ("Neutral card (7-9)")
    else:
        print ("High card (10, face, ace)")

card_counting()