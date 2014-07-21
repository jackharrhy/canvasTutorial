#!/usr/bin/python
# -*- coding: utf-8 -*-
from bottle import *
from os import getcwd

HOST = 'localhost'
PORT = '80'
DEBUG = True

pageTitles=["Template","Line","Lines","ChangingSize","ChangingColor","CleanThatCode","AddingText","AddingGradientToText","AddingShadows","AddingImg","MinifyCode"]

@route('/file/<filepath:path>')
def server_static(filepath):
    return static_file(filepath,
                       root=os.getcwd()
                       )

@route('/')
def main():
    return template('templates/startPage.tpl')

@route('/page/<number>')
def main(number):
    numberAsInt = int(number)
    header = number + " " + pageTitles[numberAsInt]
    scriptFile = '/file/js/' + number + '.js'

    if numberAsInt == 0:
        prevLink = "/"
        nextLink = "/page/1"
    elif numberAsInt == 10:
        prevLink = "/page/9"
        nextLink = "/finished"
    else:
        prevLink = "/page/{}".format(str(numberAsInt - 1))
        nextLink = "/page/{}".format(str(numberAsInt + 1))

    return template('templates/pageTemplate.tpl', header=header, page=number, scriptFile=scriptFile, prevLink=prevLink, nextLink=nextLink)

@route('/finished')
def main():
    return template('templates/finished.tpl')

run(host=HOST, port=PORT, debug=DEBUG)