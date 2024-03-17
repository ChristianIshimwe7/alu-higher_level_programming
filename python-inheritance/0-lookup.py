#!/usr/bin/python3
'''Returning a list of available attributes and methods of an object'''


def lookup(obj):
    '''Function returns a list'''
    return list(dir(obj))
