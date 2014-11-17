#!/usr/bin/env python

# enable debugging
import cgi
import cgitb
from urlparse import urlparse
import os
cgitb.enable()
cgitb.enable( display=0 , logdir='/tmp' )

import socket

def send_command( ostr , host = 'localhost' , portno = 10888 , socketfile = '/tmp/.record_roku_socket' ) :
    ''' send string to specified socket '''
    import socket
    net_type = socket.AF_INET
    stm_type = socket.SOCK_STREAM
    addr_obj = ( host , portno )
    if socketfile :
        net_type = socket.AF_UNIX
        addr_obj = socketfile
    
    retval = ''
    s = socket.socket( net_type , stm_type )
    try :
        err = s.connect( addr_obj )
    except :
        print 'failed to open socket'
        return False

    s.send( '%s\n' % ostr )
    retval = s.recv(1024)
    s.close()
    return retval



def get_output( val , host = 'localhost' , portno = 10888 , socketfile = '/tmp/.record_roku_socket' ) :

    print "Content-Type: text/html\n\n\n"
    print

    ostr = send_command( val , host , portno , socketfile )

    if not ostr :
        return

    print val.replace('command w','').replace('command','')

    tmpfile = open( '/tmp/.remcom_control_file' , 'w' )
    tmpfile.write( '%s\n' % val )

    return

if __name__ == '__main__' :

    form = cgi.FieldStorage()
    if "cmd" not in form :
        print "<H1>Error</H1>"
        print "Please fill in the cmd field."

    get_output( form['cmd'].value )
