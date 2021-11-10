import os,sys

sys.path.append(os.path.abspath(
    os.path.join(os.path.dirname(__file__), '..')
))

# print('__file__:', __file__)
# script_folder_name = os.path.dirname(__file__)
# print('script_folder_name:', script_folder_name)

# parent_relative_path = os.path.dirname(__file__)
# print('script_folder_name:', script_folder_name)

# root_path = os.path.abspath(parent_relative_path)
# print('root_path:', root_path)

# sys.path.append("C:\\Users\\crane\\Documents\\Hofstra Bootcamp\\Hofstra Projects\\Hofstra-Projects\\Hofstra-Curriculum\\Python Beginners course")
# print(sys.path)


from animal_app.canine.dog import Dog

import sys
pluto = Dog()
if len(sys.argv) > 1:
    pluto.sound = sys.argv[1]
print(pluto.make_sound())