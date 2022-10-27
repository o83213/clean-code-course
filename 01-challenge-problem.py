class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y


class Rectangle:
    def __init__(self, start_point, width, height):
        self.start_point = start_point
        self.width = width
        self.height = height

    def getArea(self):
        return self.width * self.height

    def print_end_point(self):
        top_right = self.start_point.x + self.width
        bottom_left = self.start_point.y + self.height
        print('Starting Point (X)): ' + str(self.start_point.x))
        print('Starting Point (Y)): ' + str(self.start_point.y))
        print('End Point X-Axis (Top Right): ' + str(top_right))
        print('End Point Y-Axis (Bottom Left): ' + str(bottom_left))


start_point = Point(50, 100)
rectangle = Rectangle(start_point, 90, 10)

print(rectangle.getArea())
rectangle.print_end_point()