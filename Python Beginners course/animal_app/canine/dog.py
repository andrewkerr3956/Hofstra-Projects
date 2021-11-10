from animal_app.animal import Animal

class Dog(Animal):
    def __init__(self):
        self.legs = 4
        self.wings = False
        self.sound = 'barks'
    
    def is_thirsty(self):
        return 'pants'
    
    @staticmethod
    def get_breeds():
        return ['Shitzu', 'Maltese', 'Poodle']