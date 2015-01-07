#!/bin/bash

sudo apt-get install -y apache2

sudo a2enmod userdir

#sudo a2enmod ssl
#sudo mkdir /etc/apache2/ssl
#sudo openssl req -x509 -nodes -days 365 -newkey rsa:4096 -keyout /etc/apache2/ssl/apache.key -out /etc/apache2/ssl/apache.crt

#ssh-keygen -t rsa -b 4096 -f id_rsa.new
#openssl req -new -x509 -days 365 -nodes -newkey rsa:4096 -out self.pem -keyout self.pem
#gpg --gen-key
### RSA and RSA
### keysize 4096
### USER

# cat >foo <<EOF
#           %echo Generating a basic OpenPGP key
#           Key-Type: RSA
#           Key-Length: 4096
#           Subkey-Type: RSA
#           Subkey-Length: 4096
#           Name-Real: Daniel Boline
#           Name-Comment: Dan
#           Name-Email: ddboline@gmail.com
#           Expire-Date: 0
#           Passphrase: $RANDOMSTRING
#           %pubring foo.pub
#           %secring foo.sec
#           # Do a commit here, so that we can later print "done" :-)
#           %commit
#           %echo done
#      EOF
# gpg2 --batch --gen-key foo

