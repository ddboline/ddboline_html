#!/usr/bin/env python

# enable debugging
import cgi
import cgitb
from urlparse import urlparse
import os
cgitb.enable()
cgitb.enable( display=0 , logdir='/tmp' )

import socket

from control_roku import get_output

if __name__ == '__main__' :

    form = cgi.FieldStorage()
    if "cmd" not in form :
        print "<H1>Error</H1>"
        print "Please fill in the cmd field."

    get_output( form['cmd'].value , socketfile = '/tmp/.remcom_test_socket' )
